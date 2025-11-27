import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FooterSection from './FooterSection';
import { colors } from '../../constants/colors';

// Mock DogSilhouette component
vi.mock('../DogSilhouette', () => ({
  default: ({ color, className }) => (
    <div data-testid="dog-silhouette" data-color={color} data-classname={className}>
      Dog Silhouette
    </div>
  )
}));

describe('FooterSection', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      render(<FooterSection />);
    });

    it('renders logo image', () => {
      render(<FooterSection />);

      const logo = screen.getByAltText('Smarter Dog Grooming Salon');
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', '/assets/logo-text.png');
    });

    it('renders company description', () => {
      render(<FooterSection />);

      expect(screen.getByText(/Family-run since 1982/i)).toBeInTheDocument();
    });

    it('renders social media icons', () => {
      render(<FooterSection />);

      expect(screen.getByText('📘')).toBeInTheDocument();
      expect(screen.getByText('📸')).toBeInTheDocument();
      expect(screen.getByText('📱')).toBeInTheDocument();
    });

    it('renders dog silhouette background', () => {
      render(<FooterSection />);

      expect(screen.getByTestId('dog-silhouette')).toBeInTheDocument();
    });
  });

  describe('opening hours section', () => {
    it('renders "Opening Hours" heading', () => {
      render(<FooterSection />);

      expect(screen.getByText('Opening Hours')).toBeInTheDocument();
    });

    it('renders all days of the week', () => {
      render(<FooterSection />);

      expect(screen.getByText('Monday')).toBeInTheDocument();
      expect(screen.getByText('Tuesday')).toBeInTheDocument();
      expect(screen.getByText('Wednesday')).toBeInTheDocument();
      expect(screen.getByText('Thu–Sun')).toBeInTheDocument();
    });

    it('renders operating hours', () => {
      render(<FooterSection />);

      const hours = screen.getAllByText('8:30am – 3:00pm');
      expect(hours).toHaveLength(3);
    });

    it('renders "Closed" for Thursday-Sunday', () => {
      render(<FooterSection />);

      expect(screen.getByText('Closed')).toBeInTheDocument();
    });

    it('"Closed" text has pink color', () => {
      render(<FooterSection />);
      const closedText = screen.getByText('Closed');

      expect(closedText).toHaveStyle({ color: colors.pink });
    });
  });

  describe('location section', () => {
    it('renders "Find Us" heading', () => {
      render(<FooterSection />);

      expect(screen.getByText('Find Us')).toBeInTheDocument();
    });

    it('renders location details', () => {
      render(<FooterSection />);

      expect(screen.getByText('Ashton-under-Lyne')).toBeInTheDocument();
      expect(screen.getByText('Greater Manchester')).toBeInTheDocument();
      expect(screen.getByText('United Kingdom')).toBeInTheDocument();
    });
  });

  describe('contact section', () => {
    it('renders "Get in Touch" heading', () => {
      render(<FooterSection />);

      expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    });

    it('renders email address', () => {
      render(<FooterSection />);

      expect(screen.getByText('hello@smarterdog.co.uk')).toBeInTheDocument();
    });

    it('renders phone number', () => {
      render(<FooterSection />);

      expect(screen.getByText('0161 XXX XXXX')).toBeInTheDocument();
    });

    it('renders WhatsApp badge', () => {
      render(<FooterSection />);

      expect(screen.getByText('💬 WhatsApp Available')).toBeInTheDocument();
    });

    it('WhatsApp badge has green background and white text', () => {
      render(<FooterSection />);
      const whatsappBadge = screen.getByText('💬 WhatsApp Available');

      expect(whatsappBadge).toHaveStyle({ backgroundColor: colors.green, color: 'white' });
    });
  });

  describe('copyright section', () => {
    it('renders copyright text', () => {
      render(<FooterSection />);

      expect(screen.getByText(/© 2025 Smarter Dog Grooming Salon/i)).toBeInTheDocument();
    });

    it('renders "Made with" message', () => {
      render(<FooterSection />);

      expect(screen.getByText(/Made with 🐾 in Ashton-under-Lyne/i)).toBeInTheDocument();
    });

    it('"Made with" message uses handwriting font', () => {
      render(<FooterSection />);
      const madeWith = screen.getByText(/Made with 🐾 in Ashton-under-Lyne/i);

      expect(madeWith).toHaveClass('handwriting');
      expect(madeWith).toHaveClass('text-lg');
    });
  });

  describe('styling', () => {
    it('applies yellow background color to footer', () => {
      const { container } = render(<FooterSection />);
      const footer = container.querySelector('footer');

      expect(footer.style.backgroundColor).toBe(colors.yellow);
    });

    it('has proper padding classes', () => {
      const { container } = render(<FooterSection />);
      const footer = container.querySelector('footer');

      expect(footer).toHaveClass('px-6');
      expect(footer).toHaveClass('py-16');
      expect(footer).toHaveClass('relative');
      expect(footer).toHaveClass('overflow-hidden');
    });

    it('text uses teal color', () => {
      render(<FooterSection />);
      const description = screen.getByText(/Family-run since 1982/i);

      expect(description).toHaveStyle({ color: colors.teal });
    });

    it('headings use teal color', () => {
      render(<FooterSection />);
      const openingHoursHeading = screen.getByText('Opening Hours');

      expect(openingHoursHeading).toHaveStyle({ color: colors.teal });
    });

    it('social icons have white background', () => {
      const { container } = render(<FooterSection />);
      const socialIcons = container.querySelectorAll('.w-10.h-10.rounded-full');

      socialIcons.forEach(icon => {
        expect(icon).toHaveStyle({ backgroundColor: 'white' });
      });
    });

    it('social icons are circular', () => {
      const { container } = render(<FooterSection />);
      const socialIcons = container.querySelectorAll('.w-10.h-10.rounded-full');

      expect(socialIcons).toHaveLength(3);
    });
  });

  describe('layout', () => {
    it('uses 4-column grid', () => {
      const { container } = render(<FooterSection />);
      const grid = container.querySelector('.grid.md\\:grid-cols-4');

      expect(grid).toBeInTheDocument();
    });

    it('container has max width', () => {
      const { container } = render(<FooterSection />);
      const mainContainer = container.querySelector('.max-w-6xl.mx-auto');

      expect(mainContainer).toBeInTheDocument();
    });

    it('copyright section has border-top', () => {
      const { container } = render(<FooterSection />);
      const copyrightSection = container.querySelector('.pt-8.border-t');

      expect(copyrightSection).toBeInTheDocument();
    });

    it('border color is teal light', () => {
      const { container } = render(<FooterSection />);
      const copyrightSection = container.querySelector('.pt-8.border-t');

      expect(copyrightSection.style.borderColor).toBe(colors.tealLight);
    });
  });

  describe('interactive elements', () => {
    it('social icons have cursor-pointer', () => {
      const { container } = render(<FooterSection />);
      const socialIcons = container.querySelectorAll('.cursor-pointer');

      expect(socialIcons.length).toBeGreaterThanOrEqual(3);
    });

    it('social icons have hover effect', () => {
      const { container } = render(<FooterSection />);
      const socialIcons = container.querySelectorAll('.hover\\:scale-110');

      expect(socialIcons).toHaveLength(3);
    });
  });

  describe('background elements', () => {
    it('dog silhouette has teal color', () => {
      render(<FooterSection />);
      const silhouette = screen.getByTestId('dog-silhouette');

      expect(silhouette).toHaveAttribute('data-color', colors.teal);
    });

    it('dog silhouette is positioned in background', () => {
      const { container } = render(<FooterSection />);
      const silhouetteContainer = container.querySelector('.absolute.bottom-0.left-10');

      expect(silhouetteContainer).toBeInTheDocument();
    });
  });

  describe('opening hours colors', () => {
    it('Wednesday hours have green color', () => {
      const { container } = render(<FooterSection />);
      // Find Wednesday's time span
      const wednesdayRow = Array.from(container.querySelectorAll('p')).find(p =>
        p.textContent.includes('Wednesday')
      );
      const timeSpan = wednesdayRow?.querySelector(`[style*="${colors.green}"]`);

      expect(timeSpan).toBeInTheDocument();
    });
  });

  describe('responsive layout', () => {
    it('copyright section is responsive', () => {
      const { container } = render(<FooterSection />);
      const copyrightSection = container.querySelector('.flex.flex-col.md\\:flex-row');

      expect(copyrightSection).toBeInTheDocument();
    });

    it('copyright items are centered on mobile', () => {
      const { container } = render(<FooterSection />);
      const copyrightSection = container.querySelector('.items-center');

      expect(copyrightSection).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('logo has descriptive alt text', () => {
      render(<FooterSection />);
      const logo = screen.getByAltText('Smarter Dog Grooming Salon');

      expect(logo).toBeInTheDocument();
    });

    it('all sections have descriptive headings', () => {
      render(<FooterSection />);

      expect(screen.getByText('Opening Hours')).toBeInTheDocument();
      expect(screen.getByText('Find Us')).toBeInTheDocument();
      expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    });
  });
});
