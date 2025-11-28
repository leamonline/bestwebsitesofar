import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServicesPage from './ServicesPage';

describe('ServicesPage', () => {
    it('renders without crashing', () => {
        render(
            <MemoryRouter>
                <ServicesPage />
            </MemoryRouter>
        );
        expect(screen.getByText('Our Services')).toBeInTheDocument();
    });

    it('displays all pricing tiers', () => {
        render(
            <MemoryRouter>
                <ServicesPage />
            </MemoryRouter>
        );
        expect(screen.getByText('The Bath & Brush')).toBeInTheDocument();
        expect(screen.getByText('The Full Groom')).toBeInTheDocument();
        expect(screen.getByText('Puppy Introduction')).toBeInTheDocument();
    });

    it('displays the timeline', () => {
        render(
            <MemoryRouter>
                <ServicesPage />
            </MemoryRouter>
        );
        expect(screen.getByText('What to Expect')).toBeInTheDocument();
        expect(screen.getByText('Arrival')).toBeInTheDocument();
        expect(screen.getByText('The Finish')).toBeInTheDocument();
    });
});
