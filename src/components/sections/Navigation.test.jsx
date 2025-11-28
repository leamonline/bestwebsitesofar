import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';


describe('Navigation', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      render(<Navigation isLoaded={false} />);
    });

    it('renders logo image', () => {
      render(<Navigation isLoaded={true} />);

      const logo = screen.getByAltText('Smarter Dog Grooming Salon');
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', '/assets/logo-text.png');
    });

    it('renders all navigation items', () => {
      render(<Navigation isLoaded={true} />);

      expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
    });

    it('renders all navigation links', () => {
      render(<Navigation isLoaded={true} />);
      const navLinks = screen.getAllByRole('link');
      // Services, About, Gallery, Houndsly, Contact
      expect(navLinks).toHaveLength(5);
    });

    it('renders exactly 5 navigation links', () => {
      render(<Navigation isLoaded={true} />);

      const links = screen.getAllByRole('link');
      // Filter out logo, should have 5 nav links
      const navLinks = links.filter(link =>
        ['Services', 'About', 'Gallery', 'Houndsly', 'Contact'].includes(link.textContent)
      );
      expect(navLinks).toHaveLength(5);
    });

    it('renders "Request Appointment" button', () => {
      render(<Navigation isLoaded={true} />);

      expect(screen.getByRole('button', { name: 'Request Appointment' })).toBeInTheDocument();
    });
  });

  describe('isLoaded prop behavior', () => {
    it('applies opacity-0 class when isLoaded is false', () => {
      const { container } = render(<Navigation isLoaded={false} />);
      const nav = container.querySelector('nav');

      expect(nav).toHaveClass('opacity-0');
      expect(nav).not.toHaveClass('animate-fade-in');
    });

    it('applies animate-fade-in class when isLoaded is true', () => {
      const { container } = render(<Navigation isLoaded={true} />);
      const nav = container.querySelector('nav');

      expect(nav).toHaveClass('animate-fade-in');
      expect(nav).not.toHaveClass('opacity-0');
    });

    it('renders correctly without isLoaded prop (undefined)', () => {
      const { container } = render(<Navigation />);
      const nav = container.querySelector('nav');

      expect(nav).toHaveClass('opacity-0');
    });
  });

  describe('styling', () => {
    it('has proper padding and layout classes', () => {
      const { container } = render(<Navigation isLoaded={true} />);
      const nav = container.querySelector('nav');

      expect(nav).toHaveClass('px-6');
      expect(nav).toHaveClass('py-5');
      expect(nav).toHaveClass('flex');
      expect(nav).toHaveClass('items-center');
      expect(nav).toHaveClass('justify-between');
      expect(nav).toHaveClass('max-w-6xl');
      expect(nav).toHaveClass('mx-auto');
    });

    it('logo has correct height and object-fit', () => {
      render(<Navigation isLoaded={true} />);
      const logo = screen.getByAltText('Smarter Dog Grooming Salon');

      expect(logo).toHaveClass('h-16');
      expect(logo).toHaveClass('w-auto');
      expect(logo).toHaveClass('object-contain');
    });

    it('navigation links have teal color', () => {
      render(<Navigation isLoaded={true} />);
      const servicesLink = screen.getByRole('link', { name: 'Services' });

      expect(servicesLink).toHaveStyle({ color: 'rgb(42, 111, 107)' });
    });

    it('navigation links have proper classes', () => {
      render(<Navigation isLoaded={true} />);
      const servicesLink = screen.getByRole('link', { name: 'Services' });

      expect(servicesLink).toHaveClass('body-font');
      expect(servicesLink).toHaveClass('text-sm');
      expect(servicesLink).toHaveClass('font-medium');
      expect(servicesLink).toHaveClass('transition-colors');
      expect(servicesLink).toHaveClass('duration-200');
    });

    it('"Request Appointment" button has green background and white text', () => {
      render(<Navigation isLoaded={true} />);
      const button = screen.getByRole('button', { name: 'Request Appointment' });

      expect(button).toHaveStyle({ backgroundColor: 'rgb(0, 217, 74)', color: 'rgb(255, 255, 255)' });
    });

    it('calls onBookClick when "Request Appointment" button is clicked', () => {
      const handleBookClick = vi.fn();
      render(<Navigation isLoaded={true} onBookClick={handleBookClick} />);

      const button = screen.getByRole('button', { name: 'Request Appointment' });
      fireEvent.click(button);

      expect(handleBookClick).toHaveBeenCalledTimes(1);
    });

    it('"Request Appointment" button has correct classes', () => {
      render(<Navigation isLoaded={true} />);
      const button = screen.getByRole('button', { name: 'Request Appointment' });

      expect(button).toHaveClass('px-6');
      expect(button).toHaveClass('py-3');
      expect(button).toHaveClass('rounded-full');
      expect(button).toHaveClass('font-bold');
      expect(button).toHaveClass('text-sm');
      expect(button).toHaveClass('transition-all');
      expect(button).toHaveClass('hover:scale-105');
      expect(button).toHaveClass('hover:shadow-lg');
    });
  });

  describe('responsive behavior', () => {
    it('navigation items container is hidden on mobile', () => {
      const { container } = render(<Navigation isLoaded={true} />);
      const navItemsContainer = container.querySelector('.hidden.md\\:flex');

      expect(navItemsContainer).toBeInTheDocument();
      expect(navItemsContainer).toHaveClass('hidden');
      expect(navItemsContainer).toHaveClass('md:flex');
    });

    it('navigation items have correct gap', () => {
      const { container } = render(<Navigation isLoaded={true} />);
      const navItemsContainer = container.querySelector('.hidden.md\\:flex');

      expect(navItemsContainer).toHaveClass('items-center');
      expect(navItemsContainer).toHaveClass('gap-8');
    });
  });

  describe('accessibility', () => {
    it('logo has descriptive alt text', () => {
      render(<Navigation isLoaded={true} />);
      const logo = screen.getByAltText('Smarter Dog Grooming Salon');

      expect(logo).toBeInTheDocument();
    });

    it('all navigation links are accessible via role', () => {
      render(<Navigation isLoaded={true} />);

      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThanOrEqual(4);
    });

    it('button is accessible via role', () => {
      render(<Navigation isLoaded={true} />);

      const button = screen.getByRole('button', { name: 'Request Appointment' });
      expect(button).toBeInTheDocument();
    });
  });

  describe('navigation items structure', () => {
    it('renders navigation items in correct order', () => {
      render(<Navigation isLoaded={true} />);

      const links = screen.getAllByRole('link');
      const navLinks = links.filter(link =>
        ['Services', 'About', 'Gallery', 'Contact'].includes(link.textContent)
      );

      expect(navLinks[0]).toHaveTextContent('Services');
      expect(navLinks[1]).toHaveTextContent('About');
      expect(navLinks[2]).toHaveTextContent('Gallery');
      expect(navLinks[3]).toHaveTextContent('Contact');
    });

    it('all navigation links point to hash anchors', () => {
      render(<Navigation isLoaded={true} />);

      const links = screen.getAllByRole('link');
      const navLinks = links.filter(link =>
        ['Services', 'About', 'Gallery', 'Contact'].includes(link.textContent)
      );

      navLinks.forEach(link => {
        expect(link).toHaveAttribute('href', '#');
      });
    });
  });
});
