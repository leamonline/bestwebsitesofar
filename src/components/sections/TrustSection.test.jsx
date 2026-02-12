import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TrustSection from './TrustSection';
import { colors } from '../../constants/colors';

describe('TrustSection', () => {
  it('renders trust stats and labels', () => {
    render(<TrustSection />);

    expect(screen.getByText('Since 1982')).toBeInTheDocument();
    expect(screen.getByText('Serving Ashton')).toBeInTheDocument();
    expect(screen.getByText('10,000+')).toBeInTheDocument();
    expect(screen.getByText('Happy Pups')).toBeInTheDocument();
    expect(screen.getByText('4.9★')).toBeInTheDocument();
    expect(screen.getByText('Google Rating')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('Tail Wags')).toBeInTheDocument();
  });

  it('uses white background and pink transition', () => {
    const { container } = render(<TrustSection />);
    const section = container.querySelector('section');
    const path = container.querySelector('svg[viewBox="0 0 1440 100"] path');

    expect(section.style.backgroundColor).toBe('white');
    expect(path).toHaveAttribute('fill', colors.pink);
  });
});
