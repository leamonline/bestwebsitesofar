import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import BookingForm from './BookingForm';
import { trackEvent } from '../utils/analytics';

vi.mock('@emailjs/browser', () => ({
    default: {
        send: vi.fn(),
    },
}));

vi.mock('../utils/analytics', () => ({
    trackEvent: vi.fn(),
}));

const renderBookingForm = (props = {}) =>
    render(
        <MemoryRouter>
            <BookingForm {...props} />
        </MemoryRouter>
    );

const fillRequiredFields = () => {
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '07507731487' } });
    fireEvent.change(screen.getByLabelText("Dog's Name"), { target: { value: 'Milo' } });
};

describe('BookingForm', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'service_test');
        vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'template_test');
        vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'public_test');
        emailjs.send.mockResolvedValue({ status: 200 });
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.unstubAllEnvs();
    });

    it('renders concierge prefill summary and values', () => {
        renderBookingForm({
            prefillSummary: 'De-Shedding Package on an every 8 weeks rhythm for Milo.',
            initialFormData: {
                dogName: 'Milo',
                breed: 'Golden Retriever',
                service: 'De-Shedding Package',
                visitPlan: 'every-8-weeks',
                preferredTimes: ['mon-am'],
                notes: 'AI concierge recommendation for Milo.',
            },
        });

        expect(screen.getByText('AI concierge recommendation')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Milo')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Golden Retriever')).toBeInTheDocument();
        expect(screen.getByDisplayValue('AI concierge recommendation for Milo.')).toBeInTheDocument();
        expect(screen.getByRole('combobox', { name: 'Service Required' })).toHaveValue('De-Shedding Package');
        expect(screen.getByRole('combobox', { name: 'Visit Schedule' })).toHaveValue('every-8-weeks');
        expect(screen.getByLabelText('Monday Morning')).toBeChecked();
    });

    it('does not include nail clip or anal gland expression in service options', () => {
        renderBookingForm({ variant: 'modal' });

        expect(screen.queryByRole('option', { name: /Nail Clip Only/i })).not.toBeInTheDocument();
        expect(screen.queryByRole('option', { name: /Anal Gland Expression/i })).not.toBeInTheDocument();
    });

    it('shows validation errors for invalid phone and email', async () => {
        const { container } = renderBookingForm();

        fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Jane Doe' } });
        fireEvent.change(screen.getByLabelText('Phone'), { target: { value: 'abc' } });
        fireEvent.change(screen.getByLabelText('Email (Optional)'), { target: { value: 'invalid-email' } });
        fireEvent.change(screen.getByLabelText("Dog's Name"), { target: { value: 'Milo' } });

        fireEvent.submit(container.querySelector('form'));

        await waitFor(() => {
            expect(screen.getByText('Please enter a valid UK phone number')).toBeInTheDocument();
            expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
        });
        expect(emailjs.send).not.toHaveBeenCalled();
    });

    it('submits successfully and shows success step', async () => {
        const handleClose = vi.fn();
        renderBookingForm({ variant: 'modal', onClose: handleClose });

        fillRequiredFields();
        fireEvent.change(screen.getByLabelText('Email (Optional)'), { target: { value: 'jane@example.com' } });
        fireEvent.change(screen.getByLabelText('Breed'), { target: { value: 'Cockapoo' } });
        fireEvent.click(screen.getByLabelText('Tuesday Morning'));
        fireEvent.change(screen.getByLabelText('Any Notes?'), { target: { value: 'Nervous around dryers' } });

        fireEvent.click(screen.getByRole('button', { name: 'Send Request' }));

        await waitFor(() => {
            expect(emailjs.send).toHaveBeenCalledTimes(1);
            expect(trackEvent).toHaveBeenCalledWith('Conversion', 'Submit Booking Request', 'Full Groom');
            expect(screen.getByText('Request Received!')).toBeInTheDocument();
        });

        fireEvent.click(screen.getByRole('button', { name: 'Close' }));
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('uses dev simulation path when booking env vars are missing', async () => {
        vi.stubEnv('VITE_EMAILJS_SERVICE_ID', '');
        vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', '');
        vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', '');

        const { container } = renderBookingForm();
        fillRequiredFields();

        fireEvent.submit(container.querySelector('form'));

        await waitFor(() => {
            expect(screen.getByText('Request Received!')).toBeInTheDocument();
        }, { timeout: 2500 });
        expect(emailjs.send).not.toHaveBeenCalled();
    });
});
