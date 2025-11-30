import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
    it('renders without crashing', () => {
        render(<HeroSection isLoaded={true} />);
        expect(screen.getByText(/VIP treatment/i)).toBeInTheDocument();
    });

    it('renders "Book Your Visit" button', () => {
        render(<HeroSection isLoaded={true} />);
        const button = screen.getByRole('button', { name: /Book Your Visit/i });
        expect(button).toBeInTheDocument();
        expect(button.style.backgroundColor).toBe('rgb(255, 204, 0)');
        expect(button.style.color).toBe('rgb(42, 111, 107)');
    });

    it('calls onBookClick when "Book Your Visit" button is clicked', () => {
        const handleBookClick = vi.fn();
        render(<HeroSection isLoaded={true} onBookClick={handleBookClick} />);

        const button = screen.getByRole('button', { name: /Book Your Visit/i });
        fireEvent.click(button);

        expect(handleBookClick).toHaveBeenCalledTimes(1);
    });
});
