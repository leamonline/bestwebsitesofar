import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import GoogleReviews from './GoogleReviews';

// Mock fetch
globalThis.fetch = vi.fn();

describe('GoogleReviews', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders mock reviews when no API key is provided', async () => {
        render(<GoogleReviews />);

        // Wait for mock data to load (loading state might be too transient to catch)
        await waitFor(() => {
            expect(screen.getByText('Sarah Jenkins')).toBeInTheDocument();
            expect(screen.getByText('Mike Stevens')).toBeInTheDocument();
        });
    });

    it('attempts to fetch reviews when API key and Place ID are provided', async () => {
        const mockResponse = {
            result: {
                reviews: [
                    {
                        author_name: "Test User",
                        rating: 4,
                        relative_time_description: "a day ago",
                        text: "Great test review",
                        profile_photo_url: null
                    }
                ]
            }
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse
        });

        render(<GoogleReviews placeId="test-place-id" apiKey="test-api-key" />);

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith(
                expect.stringContaining('https://maps.googleapis.com/maps/api/place/details/json?place_id=test-place-id')
            );
            expect(screen.getByText('Test User')).toBeInTheDocument();
        });
    });

    it('falls back to mock reviews on fetch error', async () => {
        fetch.mockRejectedValueOnce(new Error('API Error'));

        render(<GoogleReviews placeId="test-place-id" apiKey="test-api-key" />);

        await waitFor(() => {
            // Should fall back to mock data (Sarah Jenkins is in mock data)
            expect(screen.getByText('Sarah Jenkins')).toBeInTheDocument();
        });
    });

    it('renders header with "Loved by Locals"', () => {
        render(<GoogleReviews />);
        expect(screen.getByText('Loved by Locals')).toBeInTheDocument();
    });

    it('renders "Verified Reviews" badge', () => {
        render(<GoogleReviews />);
        expect(screen.getByText(/Verified Reviews from Real Dog Parents/i)).toBeInTheDocument();
    });

    it('renders "Excellent" rating', () => {
        render(<GoogleReviews />);
        expect(screen.getByText('Excellent')).toBeInTheDocument();
    });

    it('renders Google logo', () => {
        render(<GoogleReviews />);
        const logo = screen.getByAltText('Google');
        expect(logo).toBeInTheDocument();
    });

    it('renders review cards', async () => {
        render(<GoogleReviews />);
        const cards = await screen.findAllByText(/Read on Google/i);
        expect(cards).toHaveLength(3);
    });

    it('renders quote icons', () => {
        render(<GoogleReviews />);
        const quotes = screen.getAllByText('❝');
        expect(quotes.length).toBeGreaterThan(0);
    });
});
