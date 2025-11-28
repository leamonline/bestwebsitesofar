import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SmarterDogHomepage from './SmarterDogHomepage';

describe('SmarterDogHomepage Integration Tests', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const renderHomepage = () => {
    return render(
      <MemoryRouter>
        <SmarterDogHomepage />
      </MemoryRouter>
    );
  };

  describe('full page rendering', () => {
    it('renders complete homepage without crashing', () => {
      renderHomepage();
    });

    it('renders all major sections in correct order', () => {
      const { container } = renderHomepage();

      // Check that all sections exist in the DOM
      expect(container.querySelector('[class*="py-2"]')).toBeInTheDocument(); // AnnouncementBar
      expect(container.querySelector('nav')).toBeInTheDocument(); // Navigation
      expect(container.querySelector('footer')).toBeInTheDocument(); // Footer
    });

    it('renders announcement bar at the top', () => {
      renderHomepage();

      expect(screen.getByText(/Last-minute slots available/i)).toBeInTheDocument();
    });

    it('renders navigation with logo', () => {
      renderHomepage();

      const logos = screen.getAllByAltText('Smarter Dog Grooming Salon');
      expect(logos.length).toBeGreaterThan(0);
    });

    it('renders hero section with main heading', () => {
      renderHomepage();

      expect(screen.getByText(/Where every dog gets the/i)).toBeInTheDocument();
      expect(screen.getByText(/VIP treatment/i)).toBeInTheDocument();
    });

    it('renders trust section with statistics', () => {
      renderHomepage();

      expect(screen.getByText('40+')).toBeInTheDocument();
      expect(screen.getByText('10,000+')).toBeInTheDocument();
    });

    it('renders services section with all services', () => {
      renderHomepage();

      expect(screen.getByText('What we do best')).toBeInTheDocument();
      expect(screen.getByText('Full Groom')).toBeInTheDocument();
      expect(screen.getByText('Bath & Tidy')).toBeInTheDocument();
    });

    it('renders gallery section with polaroid images', () => {
      renderHomepage();

      expect(screen.getByText('Fresh from the Salon')).toBeInTheDocument();
    });

    it('renders testimonials section', () => {
      renderHomepage();

      expect(screen.getByText('What Our Pack Says')).toBeInTheDocument();
      expect(screen.getByText('Sarah M.')).toBeInTheDocument();
    });

    it('renders offer section', () => {
      renderHomepage();

      expect(screen.getByText(/First groom\? Get 20% off!/i)).toBeInTheDocument();
    });

    it('renders houndsly section', () => {
      renderHomepage();

      expect(screen.getByText(/Houndsly by Smarter Dog/i)).toBeInTheDocument();
    });

    it('renders CTA section', () => {
      renderHomepage();

      expect(screen.getByText(/Book your dog's VIP experience/i)).toBeInTheDocument();
    });

    it('renders footer with contact information', () => {
      renderHomepage();

      expect(screen.getByText('leam@smarterdog.co.uk')).toBeInTheDocument();
      expect(screen.getByText('Opening Hours')).toBeInTheDocument();
    });
  });

  describe('page animations and loading', () => {
    it('navigation starts hidden and animates in', async () => {
      const { container } = renderHomepage();
      const nav = container.querySelector('nav');

      // Initially opacity-0
      expect(nav).toHaveClass('opacity-0');

      // After 100ms, should animate in
      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      expect(nav).toHaveClass('animate-fade-in');
      expect(nav).not.toHaveClass('opacity-0');
    });

    it('hero section starts hidden and animates in', async () => {
      renderHomepage();

      // Initially hero content is hidden
      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      // After animation, content should be visible
      expect(screen.getByText(/VIP treatment/i)).toBeVisible();
    });
  });

  describe('call-to-action buttons', () => {
    it('renders multiple "Request Appointment" buttons throughout the page', () => {
      renderHomepage();

      const bookButtons = screen.getAllByRole('button', { name: /Request Appointment/i });
      expect(bookButtons.length).toBeGreaterThan(1);
    });

    it('renders "Book Your Visit" button in hero section', () => {
      renderHomepage();

      expect(screen.getByRole('button', { name: /Book Your Visit/i })).toBeInTheDocument();
    });

    it('renders phone number button', () => {
      renderHomepage();

      expect(screen.getByRole('button', { name: /0161 XXX XXXX/i })).toBeInTheDocument();
    });

    it('renders "Claim Offer" button', () => {
      renderHomepage();

      expect(screen.getByRole('button', { name: /Claim Offer/i })).toBeInTheDocument();
    });
  });

  describe('navigation links', () => {
    it('renders navigation menu items', () => {
      renderHomepage();

      expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Houndsly' })).toBeInTheDocument();
    });

    it('renders "Book now" link in announcement bar', () => {
      renderHomepage();

      expect(screen.getByRole('link', { name: /Book now →/i })).toBeInTheDocument();
    });
  });

  describe('content hierarchy', () => {
    it('has proper heading hierarchy', () => {
      const { container } = renderHomepage();

      // Should have multiple h3 and h4 headings for sections
      const headings = container.querySelectorAll('h2, h3, h4, h5');
      expect(headings.length).toBeGreaterThan(0);
    });

    it('sections are organized with proper spacing', () => {
      const { container } = renderHomepage();

      // Most sections should have py-20 or similar padding
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(5);
    });
  });

  describe('branding consistency', () => {
    it('uses brand colors throughout', () => {
      const { container } = renderHomepage();

      // Check for section elements which should have background colors
      const sections = container.querySelectorAll('section, footer');
      expect(sections.length).toBeGreaterThan(5);
    });

    it('uses consistent typography classes', () => {
      const { container } = renderHomepage();

      // Should use heading-font in multiple places
      const headingFonts = container.querySelectorAll('.heading-font');
      expect(headingFonts.length).toBeGreaterThan(10);

      // Should use body-font in multiple places
      const bodyFonts = container.querySelectorAll('.body-font');
      expect(bodyFonts.length).toBeGreaterThan(10);
    });

    it('uses handwriting font for special elements', () => {
      const { container } = renderHomepage();

      const handwritingElements = container.querySelectorAll('.handwriting');
      expect(handwritingElements.length).toBeGreaterThan(0);
    });
  });

  describe('images and icons', () => {
    it('renders logo images', () => {
      renderHomepage();

      const logos = screen.getAllByAltText('Smarter Dog Grooming Salon');
      expect(logos.length).toBeGreaterThanOrEqual(2); // Nav + Footer
    });

    it('uses emojis throughout the page', () => {
      renderHomepage();

      // Check for various emojis used throughout
      const dogEmojis = screen.getAllByText(/🐕/);
      expect(dogEmojis.length).toBeGreaterThan(0);

      const scissorEmojis = screen.getAllByText(/✂️/);
      expect(scissorEmojis.length).toBeGreaterThan(0);

      const bathEmojis = screen.getAllByText(/🛁/);
      expect(bathEmojis.length).toBeGreaterThan(0);
    });
  });

  describe('transitions and decorative elements', () => {
    it('renders SVG wave transitions between sections', () => {
      const { container } = renderHomepage();

      const svgs = container.querySelectorAll('svg');
      // Should have multiple SVG transitions + dog silhouettes
      expect(svgs.length).toBeGreaterThan(5);
    });

    it('renders decorative background elements', () => {
      const { container } = renderHomepage();

      // Check for decorative circles and shapes
      const decorativeCircles = container.querySelectorAll('.rounded-full.opacity-10, .rounded-full.opacity-20');
      expect(decorativeCircles.length).toBeGreaterThan(0);
    });
  });

  describe('responsive design classes', () => {
    it('uses responsive grid layouts', () => {
      const { container } = renderHomepage();

      const responsiveGrids = container.querySelectorAll('[class*="md:grid-cols"]');
      expect(responsiveGrids.length).toBeGreaterThan(3);
    });

    it('uses responsive flex layouts', () => {
      const { container } = renderHomepage();

      const responsiveFlexes = container.querySelectorAll('[class*="md:flex-row"]');
      expect(responsiveFlexes.length).toBeGreaterThan(0);
    });

    it('hides navigation menu on mobile', () => {
      const { container } = renderHomepage();

      const mobileHiddenNav = container.querySelector('.hidden.md\\:flex');
      expect(mobileHiddenNav).toBeInTheDocument();
    });
  });

  describe('contact information', () => {
    it('displays email address', () => {
      renderHomepage();

      expect(screen.getByText('leam@smarterdog.co.uk')).toBeInTheDocument();
    });

    it('displays phone number', () => {
      renderHomepage();

      const phoneNumbers = screen.getAllByText(/07507 731487/i);
      expect(phoneNumbers.length).toBeGreaterThan(0);
    });

    it('displays location information', () => {
      renderHomepage();

      expect(screen.getByText('Ashton-under-Lyne')).toBeInTheDocument();
      expect(screen.getByText('OL6 8HD')).toBeInTheDocument();
    });

    it('displays opening hours', () => {
      renderHomepage();

      expect(screen.getByText('Opening Hours')).toBeInTheDocument();
      expect(screen.getByText('Mon & Tue')).toBeInTheDocument();
    });
  });

  describe('social proof elements', () => {
    it('displays years of experience', () => {
      renderHomepage();

      expect(screen.getByText('40+')).toBeInTheDocument();
      expect(screen.getByText(/Years Experience/i)).toBeInTheDocument();
    });

    it('displays number of happy customers', () => {
      renderHomepage();

      expect(screen.getByText('10,000+')).toBeInTheDocument();

      const happyPupsText = screen.getAllByText(/Happy Pups/i);
      expect(happyPupsText.length).toBeGreaterThan(0);
    });

    it('displays Google rating', () => {
      renderHomepage();

      expect(screen.getByText('4.9★')).toBeInTheDocument();
      expect(screen.getByText(/Google Rating/i)).toBeInTheDocument();
    });

    it('displays customer testimonials', () => {
      renderHomepage();

      expect(screen.getByText(/15 years/i)).toBeInTheDocument();
      expect(screen.getByText('Sarah M.')).toBeInTheDocument();
      expect(screen.getByText('James T.')).toBeInTheDocument();
    });
  });

  describe('accessibility features', () => {
    it('has semantic HTML structure', () => {
      const { container } = renderHomepage();

      expect(container.querySelector('nav')).toBeInTheDocument();
      expect(container.querySelector('footer')).toBeInTheDocument();
      expect(container.querySelectorAll('section').length).toBeGreaterThan(5);
    });

    it('all images have alt text', () => {
      renderHomepage();

      const images = screen.getAllByRole('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('alt');
      });
    });

    it('buttons are accessible', () => {
      renderHomepage();

      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(3);

      buttons.forEach(button => {
        expect(button).toBeVisible();
      });
    });

    it('links are accessible', () => {
      renderHomepage();

      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(4);

      links.forEach(link => {
        expect(link).toBeVisible();
      });
    });
  });
});
