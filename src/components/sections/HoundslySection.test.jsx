import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HoundslySection from './HoundslySection';

describe('HoundslySection', () => {
    it('renders without crashing', () => {
        render(<HoundslySection />);
        expect(screen.getByText(/Houndsly by Smarter Dog/i)).toBeInTheDocument();
        expect(screen.getByAltText('Houndsly Pet Products')).toBeInTheDocument();
    });

    it('renders new copy and tagline', () => {
        render(<HoundslySection />);
        expect(screen.getByText(/Rainbow-powered. Nature-approved/i)).toBeInTheDocument();
        expect(screen.getByText(/Crafted for Sensitive Skin/i)).toBeInTheDocument();
    });

    it('renders product images', () => {
        render(<HoundslySection />);
        expect(screen.getByAltText('Houndsly Natural Shampoo')).toBeInTheDocument();
        expect(screen.getByAltText('Drynamite Speed Dry Spray')).toBeInTheDocument();
    });

    it('renders badges', () => {
        render(<HoundslySection />);
        expect(screen.getByText('Vegan')).toBeInTheDocument();
        expect(screen.getByText('Small Batch')).toBeInTheDocument();
    });

    it('renders CTA buttons', () => {
        render(<HoundslySection />);
        const shopLink = screen.getByRole('link', { name: /Shop Houndsly/i });
        const viewRangeLink = screen.getByRole('link', { name: /View the Range/i });

        expect(shopLink).toBeInTheDocument();
        expect(shopLink).toHaveAttribute('href', 'https://houndsly.co.uk');

        expect(viewRangeLink).toBeInTheDocument();
        expect(viewRangeLink).toHaveAttribute('href', 'https://houndsly.co.uk/collections/all');
    });
});
