import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CTASection from './CTASection';
import { colors } from '../../constants/colors';

describe('CTASection', () => {
  it('renders heading and supporting copy', () => {
    render(<CTASection onBookClick={() => {}} />);

    expect(screen.getByText('Ready for their pamper?')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Book your visit' })).toBeInTheDocument();
    expect(screen.getByText(/We're open Monday to Wednesday/i)).toBeInTheDocument();
  });

  it('calls onBookClick when primary CTA is clicked', () => {
    const onBookClick = vi.fn();
    render(<CTASection onBookClick={onBookClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'Book your visit' }));
    expect(onBookClick).toHaveBeenCalledTimes(1);
    expect(onBookClick).toHaveBeenCalledWith('CTA Section');
  });

  it('renders message link with correct href', () => {
    render(<CTASection onBookClick={() => {}} />);

    expect(screen.getByRole('link', { name: /Message 07507 731487/i })).toHaveAttribute('href', 'sms:07507731487');
  });

  it('uses brand pink background', () => {
    const { container } = render(<CTASection onBookClick={() => {}} />);
    const section = container.querySelector('section');

    expect(section).toHaveStyle({ backgroundColor: colors.pink });
  });
});
