import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
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

    it('renders offer badge', () => {
      render(<OfferSection />);

      expect(screen.getByText('✨ NEW CUSTOMER OFFER')).toBeInTheDocument();
    });

    it('renders offer title', () => {
      render(<OfferSection />);

      expect(screen.getByText(/First groom\? Get 20% off!/i)).toBeInTheDocument();
    });

    it('renders offer description', () => {
      render(<OfferSection />);

      expect(screen.getByText(/Mention this offer when you book/i)).toBeInTheDocument();
      expect(screen.getByText(/Valid for new customers only/i)).toBeInTheDocument();
    });

    it('renders "Claim Offer" button', () => {
      render(<OfferSection />);

      expect(screen.getByRole('button', { name: /Claim Offer/i })).toBeInTheDocument();
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

      expect(section.style.backgroundColor).toBe(colors.green);
    });

    it('has proper padding classes', () => {
      const { container } = render(<OfferSection />);
      const section = container.querySelector('section');

      expect(section).toHaveClass('py-20');
      expect(section).toHaveClass('relative');
      expect(section).toHaveClass('overflow-hidden');
    });

    it('offer badge has white background and green text', () => {
      render(<OfferSection />);
      const badge = screen.getByText('✨ NEW CUSTOMER OFFER');

      expect(badge).toHaveStyle({ backgroundColor: 'white', color: colors.green });
    });

    it('offer title has white color', () => {
      render(<OfferSection />);
      const title = screen.getByText(/First groom\? Get 20% off!/i);

      expect(title).toHaveStyle({ color: 'white' });
      expect(title).toHaveClass('heading-font');
      expect(title).toHaveClass('font-bold');
    });

    it('offer description has white color with opacity', () => {
      render(<OfferSection />);
      const description = screen.getByText(/Mention this offer when you book/i);

      expect(description).toHaveStyle({ color: 'white', opacity: '0.9' });
    });

    it('"Claim Offer" button has white background and green text', () => {
      render(<OfferSection />);
      const button = screen.getByRole('button', { name: /Claim Offer/i });

      expect(button.style.backgroundColor).toBe('white');
      expect(button.style.color).toBe(colors.green);
    });

    it('"Claim Offer" button has correct classes', () => {
      render(<OfferSection />);
      const button = screen.getByRole('button', { name: /Claim Offer/i });

      expect(button).toHaveClass('px-8');
      expect(button).toHaveClass('py-4');
      expect(button).toHaveClass('rounded-full');
      expect(button).toHaveClass('font-bold');
      expect(button).toHaveClass('hover:scale-105');
      expect(button).toHaveClass('hover:shadow-xl');
    });
  });

  describe('content container', () => {
    it('offer container has semi-transparent white background', () => {
      const { container } = render(<OfferSection />);
      const offerContainer = container.querySelector('.rounded-3xl.p-8');

      expect(offerContainer).toHaveStyle({ backgroundColor: 'rgba(255,255,255,0.1)' });
    });

    it('offer container has rounded corners', () => {
      const { container } = render(<OfferSection />);
      const offerContainer = container.querySelector('.rounded-3xl');

      expect(offerContainer).toBeInTheDocument();
    });
  });

  describe('layout', () => {
    it('content uses flex layout for responsive design', () => {
      const { container } = render(<OfferSection />);
      const contentFlex = container.querySelector('.flex.flex-col.md\\:flex-row');

      expect(contentFlex).toBeInTheDocument();
    });

    it('container has max width', () => {
      const { container } = render(<OfferSection />);
      const mainContainer = container.querySelector('.max-w-6xl.mx-auto');

      expect(mainContainer).toBeInTheDocument();
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
        div => div.style.backgroundColor === colors.green && div.querySelector('svg')
      );

      expect(svgContainers.length).toBeGreaterThan(0);
    });
  });

  describe('responsive layout', () => {
    it('button has whitespace-nowrap to prevent wrapping', () => {
      render(<OfferSection />);
      const button = screen.getByRole('button', { name: /Claim Offer/i });

      expect(button).toHaveClass('whitespace-nowrap');
    });
  });
});
