import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HoundslySection from './HoundslySection';

describe('HoundslySection', () => {
    it('renders without crashing', () => {
        render(<HoundslySection />);
        expect(screen.getByText(/Houndsly by Smarter Dog/i)).toBeInTheDocument();
    });

    it('renders product cards', () => {
        render(<HoundslySection />);
        expect(screen.getByText('Calming Shampoo')).toBeInTheDocument();
        expect(screen.getByText('Paw Balm')).toBeInTheDocument();
        expect(screen.getByText('Detangling Spray')).toBeInTheDocument();
    });

    it('renders "View All Products" button', () => {
        render(<HoundslySection />);
        expect(screen.getByRole('button', { name: /View All Products/i })).toBeInTheDocument();
    });

    it('renders "Add to Cart" buttons', () => {
        render(<HoundslySection />);
        const buttons = screen.getAllByRole('button', { name: /Add to Cart/i });
        expect(buttons.length).toBeGreaterThanOrEqual(3);
    });
});
