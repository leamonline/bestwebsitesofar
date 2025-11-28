import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FooterSection from './FooterSection';


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

      expect(closedText).toHaveStyle({ color: 'rgb(255, 46, 99)' });
    });

    it('WhatsApp badge has green background and white text', () => {
      render(<FooterSection />);
      const whatsappBadge = screen.getByText('💬 WhatsApp Available');

      expect(whatsappBadge).toHaveStyle({ backgroundColor: 'rgb(0, 217, 74)', color: 'rgb(255, 255, 255)' });
    });

    it('applies yellow background color to footer', () => {
      const { container } = render(<FooterSection />);
      const footer = container.querySelector('footer');

      expect(footer.style.backgroundColor).toBe('rgb(255, 204, 0)');
    });

    it('text uses teal color', () => {
      render(<FooterSection />);
      const description = screen.getByText(/Family-run since 1982/i);

      expect(description).toHaveStyle({ color: 'rgb(42, 111, 107)' });
    });

    it('headings use teal color', () => {
      render(<FooterSection />);
      const openingHoursHeading = screen.getByText('Opening Hours');

      expect(openingHoursHeading).toHaveStyle({ color: 'rgb(42, 111, 107)' });
    });

    it('border color is teal light', () => {
      const { container } = render(<FooterSection />);
      const copyrightSection = container.querySelector('.pt-8.border-t');

      expect(copyrightSection.style.borderColor).toBe('rgb(232, 245, 245)');
    });

    it('Wednesday hours have green color', () => {
      const { container } = render(<FooterSection />);
      // Find Wednesday's time span
      const wednesdayRow = Array.from(container.querySelectorAll('p')).find(p =>
        p.textContent.includes('Wednesday')
      );
      const timeSpan = wednesdayRow.querySelectorAll('span')[1];

      expect(timeSpan).toHaveStyle({ color: 'rgb(0, 217, 74)' });
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
