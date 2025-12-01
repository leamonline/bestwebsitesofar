import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingModal from './BookingModal';

// Mock dependencies
vi.mock('../utils/analytics', () => ({
    trackEvent: vi.fn(),
}));

vi.mock('@emailjs/browser', () => ({
    default: {
        send: vi.fn().mockResolvedValue({ status: 200, text: 'OK' }),
    },
}));

describe('BookingModal', () => {
    it('does not render when isOpen is false', () => {
        render(<BookingModal isOpen={false} onClose={() => { }} />);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders when isOpen is true', () => {
        render(<BookingModal isOpen={true} onClose={() => { }} />);
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByText("Let's get you booked in!")).toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        const handleClose = vi.fn();
        render(<BookingModal isOpen={true} onClose={handleClose} />);

        const closeButton = screen.getByLabelText('Close modal');
        fireEvent.click(closeButton);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when backdrop is clicked', () => {
        const handleClose = vi.fn();
        const { container } = render(<BookingModal isOpen={true} onClose={handleClose} />);

        // The backdrop is the first child of the root div
        const backdrop = container.firstChild.firstChild;
        fireEvent.click(backdrop);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('submits form and shows success message', async () => {
        render(<BookingModal isOpen={true} onClose={() => { }} />);

        // Fill out form
        fireEvent.change(screen.getByPlaceholderText('Jane Doe'), { target: { value: 'John Smith' } });
        fireEvent.change(screen.getByPlaceholderText('07123...'), { target: { value: '07123456789' } });
        fireEvent.change(screen.getByPlaceholderText('Barnaby'), { target: { value: 'Rex' } });

        // Submit
        const submitButton = screen.getByText('Send Request');
        fireEvent.click(submitButton);

        // Check for success message
        await waitFor(() => {
            expect(screen.getByText('Request Received!')).toBeInTheDocument();
        }, { timeout: 3000 });
        expect(screen.getByText(/Thanks John Smith!/)).toBeInTheDocument();
    });
});
