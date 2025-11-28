import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HoundslyPage from './HoundslyPage';

describe('HoundslyPage', () => {
    it('renders without crashing', () => {
        render(
            <MemoryRouter>
                <HoundslyPage />
            </MemoryRouter>
        );
        expect(screen.getByText('Houndsly Shop')).toBeInTheDocument();
    });

    it('displays products', () => {
        render(
            <MemoryRouter>
                <HoundslyPage />
            </MemoryRouter>
        );
        expect(screen.getByText('Calming Shampoo')).toBeInTheDocument();
        expect(screen.getByText('Paw Balm')).toBeInTheDocument();
    });
});
