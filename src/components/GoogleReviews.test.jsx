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
});
