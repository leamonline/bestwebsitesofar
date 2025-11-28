import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';


describe('Navigation', () => {
  const renderNavigation = (props = {}) => {
    return render(
      <MemoryRouter>
        <Navigation isLoaded={true} {...props} />
      </MemoryRouter>
    );
  };

  describe('rendering', () => {
    it('renders without crashing', () => {
      renderNavigation({ isLoaded: false });
    });

    it('renders logo image', () => {
      renderNavigation({ isLoaded: true });

      const logo = screen.getByAltText('Smarter Dog Grooming Salon');
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', '/assets/logo-text.png');
    });

    it('renders desktop navigation items', () => {
      renderNavigation({ isLoaded: true });

      // We look for the desktop container specifically
      const desktopNav = screen.getByText('Services').closest('.hidden.md\\:flex');
      expect(desktopNav).toBeInTheDocument();
    });

    it('renders mobile toggle button', () => {
      renderNavigation({ isLoaded: true });
      const toggle = screen.getByLabelText('Toggle menu');
      expect(toggle).toBeInTheDocument();
    });
  });

  describe('mobile menu behavior', () => {
    it('opens menu when toggle is clicked', () => {
      renderNavigation({ isLoaded: true });
      const toggle = screen.getByLabelText('Toggle menu');

      // Menu should be closed initially (links not visible in mobile overlay)
      // Note: They are in the DOM but hidden? No, conditional rendering {isMenuOpen && ...}
      expect(screen.queryByText('Services', { selector: '.md\\:hidden a' })).not.toBeInTheDocument();

      fireEvent.click(toggle);

      // Now menu should be open
      const mobileServicesLink = screen.getAllByText('Services').find(el => el.closest('.md\\:hidden'));
      expect(mobileServicesLink).toBeInTheDocument();
    });

    it('closes menu when a link is clicked', () => {
      renderNavigation({ isLoaded: true });
      const toggle = screen.getByLabelText('Toggle menu');
      fireEvent.click(toggle);

      const mobileServicesLink = screen.getAllByText('Services').find(el => el.closest('.md\\:hidden'));
      fireEvent.click(mobileServicesLink);

      // Menu should close
      expect(screen.queryByText('Services', { selector: '.md\\:hidden a' })).not.toBeInTheDocument();
    });
  });

  describe('styling', () => {
    it('has proper padding and layout classes', () => {
      const { container } = renderNavigation({ isLoaded: true });
      const nav = container.querySelector('nav');

      expect(nav).toHaveClass('px-6');
      expect(nav).toHaveClass('py-5');
      expect(nav).toHaveClass('max-w-6xl');
      expect(nav).toHaveClass('mx-auto');
    });
  });

  describe('accessibility', () => {
    it('logo has descriptive alt text', () => {
      renderNavigation({ isLoaded: true });
      const logo = screen.getByAltText('Smarter Dog Grooming Salon');
      expect(logo).toBeInTheDocument();
    });

    it('toggle button has aria label', () => {
      renderNavigation({ isLoaded: true });
      expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
    });
  });
});
