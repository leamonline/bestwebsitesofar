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

      expect(screen.getByText(/Family-run since 1983/i)).toBeInTheDocument();
    });

    it('text uses teal color', () => {
      render(<FooterSection />);
      const description = screen.getByText(/Family-run since 1983/i);

      expect(description).toHaveStyle({ color: 'rgb(42, 111, 107)' });
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
    it('renders opening hours heading', () => {
      render(<FooterSection />);
      expect(screen.getByRole('heading', { name: 'Opening Hours' })).toBeInTheDocument();
    });

    it('renders days of the week', () => {
      render(<FooterSection />);
      expect(screen.getByText('Mon & Tue')).toBeInTheDocument();
      expect(screen.getByText('Wednesday')).toBeInTheDocument();
      expect(screen.getByText('Thursday')).toBeInTheDocument();
      expect(screen.getByText('Fri–Sun')).toBeInTheDocument();
    });

    it('Wednesday hours have pink color (Closed)', () => {
      render(<FooterSection />);
      // Find the row containing Wednesday
      const wednesdayRow = screen.getByText('Wednesday').closest('p');
      const timeSpan = wednesdayRow.querySelectorAll('span')[1];

      expect(timeSpan).toHaveTextContent('Closed');
      expect(timeSpan).toHaveStyle({ color: 'rgb(255, 46, 99)' });
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
