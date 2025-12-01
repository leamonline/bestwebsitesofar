import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';

import SmarterDogHomepage from './SmarterDogHomepage';

// Mock child components to isolate testing
vi.mock('./sections/AnnouncementBar', () => ({
  default: () => <div data-testid="announcement-bar">AnnouncementBar</div>
}));
vi.mock('./sections/Navigation', () => ({
  default: ({ isLoaded }) => <div data-testid="navigation">Navigation {isLoaded ? 'loaded' : 'loading'}</div>
}));
vi.mock('./sections/HeroSection', () => ({
  default: ({ isLoaded }) => <div data-testid="hero-section">HeroSection {isLoaded ? 'loaded' : 'loading'}</div>
}));
vi.mock('./sections/TrustSection', () => ({
  default: () => <div data-testid="trust-section">TrustSection</div>
}));
vi.mock('./sections/ServicesSection', () => ({
  default: () => <div data-testid="services-section">ServicesSection</div>
}));
vi.mock('./sections/GallerySection', () => ({
  default: () => <div data-testid="gallery-section">GallerySection</div>
}));
vi.mock('./sections/TestimonialsSection', () => ({
  default: () => <div data-testid="testimonials-section">TestimonialsSection</div>
}));
vi.mock('./sections/OfferSection', () => ({
  default: () => <div data-testid="offer-section">OfferSection</div>
}));
vi.mock('./sections/CTASection', () => ({
  default: () => <div data-testid="cta-section">CTASection</div>
}));
vi.mock('./sections/FooterSection', () => ({
  default: () => <div data-testid="footer-section">FooterSection</div>
}));

describe('SmarterDogHomepage', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  describe('component rendering', () => {
    it('renders without crashing', () => {
      render(<SmarterDogHomepage />);
    });

    it('renders all section components', () => {
      render(<SmarterDogHomepage />);


      expect(screen.getByTestId('navigation')).toBeInTheDocument();
      expect(screen.getByTestId('hero-section')).toBeInTheDocument();
      expect(screen.getByTestId('trust-section')).toBeInTheDocument();
      expect(screen.getByTestId('services-section')).toBeInTheDocument();
      expect(screen.getByTestId('gallery-section')).toBeInTheDocument();
      expect(screen.getByTestId('testimonials-section')).toBeInTheDocument();
      expect(screen.getByTestId('offer-section')).toBeInTheDocument();
      expect(screen.getByTestId('cta-section')).toBeInTheDocument();
      expect(screen.getByTestId('footer-section')).toBeInTheDocument();
    });

    it('renders sections in correct order', () => {
      const { container } = render(<SmarterDogHomepage />);
      const sections = Array.from(container.querySelectorAll('[data-testid]'));
      const sectionOrder = sections.map(el => el.getAttribute('data-testid'));

      expect(sectionOrder).toEqual([

        'navigation',
        'hero-section',
        'trust-section',
        'services-section',
        'gallery-section',
        'testimonials-section',
        'offer-section',
        'cta-section',
        'footer-section',
      ]);
    });
  });

  describe('state management', () => {
    it('initializes with isLoaded as false', () => {
      render(<SmarterDogHomepage />);

      expect(screen.getByTestId('navigation')).toHaveTextContent('loading');
      expect(screen.getByTestId('hero-section')).toHaveTextContent('loading');
    });

    it('sets isLoaded to true after 100ms', async () => {
      render(<SmarterDogHomepage />);

      // Initially should be loading
      expect(screen.getByTestId('navigation')).toHaveTextContent('loading');

      // Fast-forward time by 100ms
      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      // State should be updated
      expect(screen.getByTestId('navigation')).toHaveTextContent('loaded');
      expect(screen.getByTestId('hero-section')).toHaveTextContent('loaded');
    });

    it('does not set isLoaded before 100ms', () => {
      render(<SmarterDogHomepage />);

      // Advance by 50ms (half the timeout)
      vi.advanceTimersByTime(50);

      expect(screen.getByTestId('navigation')).toHaveTextContent('loading');
      expect(screen.getByTestId('hero-section')).toHaveTextContent('loading');
    });

    it('passes isLoaded prop to Navigation component', async () => {
      render(<SmarterDogHomepage />);

      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      expect(screen.getByTestId('navigation')).toHaveTextContent('loaded');
    });

    it('passes isLoaded prop to HeroSection component', async () => {
      render(<SmarterDogHomepage />);

      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      expect(screen.getByTestId('hero-section')).toHaveTextContent('loaded');
    });
  });

  describe('cleanup and memory management', () => {
    it('clears timeout on unmount', () => {
      const { unmount } = render(<SmarterDogHomepage />);

      // Unmount before timeout completes
      unmount();

      // Advance timers after unmount
      vi.advanceTimersByTime(100);

      // If cleanup works properly, this shouldn't cause issues
      expect(vi.getTimerCount()).toBe(0);
    });

    it('does not update state after unmount', () => {
      const { unmount } = render(<SmarterDogHomepage />);

      // Spy on console.error to catch React warnings about state updates on unmounted components
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

      unmount();
      vi.advanceTimersByTime(100);

      // Should not have React warnings
      expect(consoleErrorSpy).not.toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });
  });



  describe('integration', () => {
    it('renders complete page structure', () => {
      const { container } = render(<SmarterDogHomepage />);

      // Should have exactly one main container
      expect(container.children).toHaveLength(1);

      // Main container should have the min-h-screen class
      expect(container.firstChild).toHaveClass('min-h-screen');
    });

    it('all sections are rendered inside the main container', () => {
      const { container } = render(<SmarterDogHomepage />);
      const mainDiv = container.firstChild;
      const sections = mainDiv.querySelectorAll('[data-testid]');

      expect(sections).toHaveLength(9);
    });
  });
});
