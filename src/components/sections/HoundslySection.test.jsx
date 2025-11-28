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
        expect(screen.getByText('Houndsly Shampoo')).toBeInTheDocument();
        expect(screen.getByText('Paw Balm')).toBeInTheDocument();
        expect(screen.getByText('Detangling Spray')).toBeInTheDocument();
    });

    it('renders "View All Products" button', () => {
        render(<HoundslySection />);
        expect(screen.getByRole('button', { name: /View All Products/i })).toBeInTheDocument();
    });

    it('renders "Buy Now" links', () => {
        render(<HoundslySection />);
        const links = screen.getAllByRole('link', { name: /Buy Now/i });
        expect(links.length).toBeGreaterThanOrEqual(3);
    });

    it('does not render price for Houndsly Shampoo but does for others', () => {
        render(<HoundslySection />);
        expect(screen.queryByText('£12.00')).not.toBeInTheDocument();
        expect(screen.getByText('£8.50')).toBeInTheDocument();
    });
});
