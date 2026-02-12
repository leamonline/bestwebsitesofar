import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HoundslyPage from './HoundslyPage';

const renderPage = () =>
  render(
    <MemoryRouter>
      <HoundslyPage />
    </MemoryRouter>
  );

describe('HoundslyPage', () => {
  it('renders coming soon overlay content', () => {
    renderPage();

    expect(screen.getByText(/Coming Soon/i)).toBeInTheDocument();
    expect(screen.getByText(/Houndsly shop is getting a makeover/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Back to Homepage/i })).toHaveAttribute('href', '/');
  });

  it('renders sample product names behind the overlay', () => {
    renderPage();

    expect(screen.getByText('Calming Shampoo')).toBeInTheDocument();
    expect(screen.getByText('Detangling Spray')).toBeInTheDocument();
    expect(screen.getByText('Ear Cleaner')).toBeInTheDocument();
  });
});
