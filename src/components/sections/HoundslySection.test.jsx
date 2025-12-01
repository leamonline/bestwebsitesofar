import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HoundslySection from './HoundslySection';

describe('HoundslySection', () => {
    it('renders without crashing', () => {
        render(<HoundslySection />);
        expect(screen.getByText(/Houndsly by Smarter Dog/i)).toBeInTheDocument();
        expect(screen.getByAltText('Houndsly')).toBeInTheDocument();
    });

    it('renders product cards', () => {
        render(<HoundslySection />);
        expect(screen.getByText('Houndsly Shampoo')).toBeInTheDocument();
        expect(screen.queryByText('Paw Balm')).not.toBeInTheDocument();
        expect(screen.getByText('Drynamite Speed Dry')).toBeInTheDocument();
    });

    it('renders "HOUNDSLY.CO.UK" link', () => {
        render(<HoundslySection />);
        const link = screen.getByRole('link', { name: /HOUNDSLY.CO.UK/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://houndsly.co.uk');
    });

    it('renders "Buy Now" links', () => {
        render(<HoundslySection />);
        const links = screen.getAllByRole('link', { name: /Buy Now/i });
        expect(links.length).toBeGreaterThanOrEqual(2);
    });

    it('does not render price for Houndsly Shampoo or Drynamite', () => {
        render(<HoundslySection />);
        expect(screen.queryByText('£12.00')).not.toBeInTheDocument();
        expect(screen.queryByText('£10.00')).not.toBeInTheDocument();
        expect(screen.queryByText('£8.50')).not.toBeInTheDocument();
    });
});
