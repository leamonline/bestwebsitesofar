import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import OfferSection from './OfferSection';
import { colors } from '../../constants/colors';

// Mock DogSilhouette component
vi.mock('../DogSilhouette', () => ({
  default: ({ color, className }) => (
    <div data-testid="dog-silhouette" data-color={color} data-classname={className}>
      Dog Silhouette
    </div>
  )
}));

describe('OfferSection', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      render(<OfferSection />);
    });

    it('renders newsletter badge', () => {
      render(<OfferSection />);

      expect(screen.getByText('✨ NEWSLETTER')).toBeInTheDocument();
    });

    it('renders newsletter title', () => {
      render(<OfferSection />);

      expect(screen.getByText(/Join our pack!/i)).toBeInTheDocument();
    });

    it('renders newsletter description', () => {
      render(<OfferSection />);

      expect(screen.getByText(/Sign up for grooming tips, special offers, and adorable dog photos/i)).toBeInTheDocument();
    });

    it('renders email input', () => {
      render(<OfferSection />);

      expect(screen.getByPlaceholderText(/Enter your email address/i)).toBeInTheDocument();
    });

    it('renders "Subscribe" button', () => {
      render(<OfferSection />);

      expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument();
    });

    it('renders decorative emojis', () => {
      render(<OfferSection />);

      expect(screen.getByText('⭐')).toBeInTheDocument();
      expect(screen.getByText('🐕')).toBeInTheDocument();
    });

    it('renders dog silhouette background', () => {
      render(<OfferSection />);

      expect(screen.getByTestId('dog-silhouette')).toBeInTheDocument();
    });

    it('renders SVG transition', () => {
      const { container } = render(<OfferSection />);
      const svg = container.querySelector('svg');

      expect(svg).toBeInTheDocument();
    });
  });

  describe('styling', () => {
    it('applies green background color to section', () => {
      const { container } = render(<OfferSection />);
      const section = container.querySelector('section');

      expect(section.style.backgroundColor).toBe('rgb(0, 217, 74)');
    });

    it('has proper padding classes', () => {
      const { container } = render(<OfferSection />);
      const section = container.querySelector('section');

      expect(section).toHaveClass('py-20');
      expect(section).toHaveClass('relative');
      expect(section).toHaveClass('overflow-hidden');
    });

    it('subscribe button has white background and green text', () => {
      render(<OfferSection />);
      const button = screen.getByRole('button', { name: /Subscribe/i });

      expect(button).toHaveStyle({ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(0, 217, 74)' });
    });

    it('newsletter title has white color', () => {
      render(<OfferSection />);
      const title = screen.getByText(/Join our pack!/i);

      expect(title).toHaveStyle({ color: 'rgb(255, 255, 255)' });
      expect(title).toHaveClass('heading-font');
      expect(title).toHaveClass('font-bold');
    });

    it('newsletter description has white color with opacity', () => {
      render(<OfferSection />);
      const description = screen.getByText(/Sign up for grooming tips/i);

      expect(description).toHaveStyle({ color: 'rgb(255, 255, 255)', opacity: '0.9' });
    });
  });

  describe('interaction', () => {
    it('allows typing in email input', () => {
      render(<OfferSection />);
      const input = screen.getByPlaceholderText(/Enter your email address/i);

      fireEvent.change(input, { target: { value: 'test@example.com' } });
      expect(input.value).toBe('test@example.com');
    });

    it('shows success message after submission', () => {
      render(<OfferSection />);
      const input = screen.getByPlaceholderText(/Enter your email address/i);
      const button = screen.getByRole('button', { name: /Subscribe/i });

      fireEvent.change(input, { target: { value: 'test@example.com' } });
      fireEvent.click(button);

      expect(screen.getByText(/Thanks for subscribing!/i)).toBeInTheDocument();
      expect(screen.getByText(/Keep an eye on your inbox/i)).toBeInTheDocument();
      expect(screen.queryByRole('form')).not.toBeInTheDocument();
    });
  });

  describe('content container', () => {
    it('offer container has semi-transparent white background', () => {
      const { container } = render(<OfferSection />);
      const offerContainer = container.querySelector('.rounded-3xl.p-8');

      expect(offerContainer).toHaveStyle({ backgroundColor: 'rgba(255, 255, 255, 0.1)' });
    });

    it('offer container has rounded corners', () => {
      const { container } = render(<OfferSection />);
      const offerContainer = container.querySelector('.rounded-3xl');

      expect(offerContainer).toBeInTheDocument();
    });
  });

  describe('decorative elements', () => {
    it('star emoji bounces', () => {
      const { container } = render(<OfferSection />);
      const star = container.querySelector('.animate-bounce-slow');

      expect(star).toBeInTheDocument();
      expect(star).toHaveTextContent('⭐');
    });

    it('dog silhouette has white color', () => {
      render(<OfferSection />);
      const silhouette = screen.getByTestId('dog-silhouette');

      expect(silhouette).toHaveAttribute('data-color', 'white');
    });

    it('dog silhouette is positioned in background', () => {
      const { container } = render(<OfferSection />);
      const silhouetteContainer = container.querySelector('.absolute.top-10.right-10');

      expect(silhouetteContainer).toBeInTheDocument();
    });

    it('dog emoji has reduced opacity', () => {
      const { container } = render(<OfferSection />);
      const dogEmoji = container.querySelector('.opacity-50');

      expect(dogEmoji).toBeInTheDocument();
      expect(dogEmoji).toHaveTextContent('🐕');
    });
  });

  describe('SVG transition', () => {
    it('SVG path has pink fill color', () => {
      const { container } = render(<OfferSection />);
      const path = container.querySelector('path');

      expect(path).toHaveAttribute('fill', colors.pink);
    });

    it('SVG container has green background', () => {
      const { container } = render(<OfferSection />);
      const svgContainers = Array.from(container.querySelectorAll('div')).filter(
        div => div.style.backgroundColor === 'rgb(0, 217, 74)' && div.querySelector('svg')
      );

      expect(svgContainers.length).toBeGreaterThan(0);
    });
  });
});
