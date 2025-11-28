import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServicesSection from './ServicesSection';


// Mock child components
import { vi } from 'vitest';
vi.mock('../ServiceCard', () => ({
  default: ({ icon, title, desc }) => (
    <div data-testid="service-card">
      <span>{icon}</span>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}));

vi.mock('../DogSilhouette', () => ({
  default: ({ color, className }) => (
    <div data-testid="dog-silhouette" data-color={color} data-classname={className}>
      Dog Silhouette
    </div>
  )
}));

describe('ServicesSection', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      render(<ServicesSection />);
    });

    it('renders section title', () => {
      render(<ServicesSection />);

      expect(screen.getByText('Our Services')).toBeInTheDocument();
      expect(screen.getByText('What we do best')).toBeInTheDocument();
    });

    it('renders 3 main service cards', () => {
      render(<ServicesSection />);

      expect(screen.getByText('Full Groom')).toBeInTheDocument();
      expect(screen.getByText('Bath & Tidy')).toBeInTheDocument();
      expect(screen.getByText('Puppy Intro')).toBeInTheDocument();
    });

    it('renders 2 additional hygiene services', () => {
      render(<ServicesSection />);

      expect(screen.getByText('Ear Cleaning')).toBeInTheDocument();
      expect(screen.getByText('Teeth Cleaning')).toBeInTheDocument();
    });

    it('renders service icons', () => {
      render(<ServicesSection />);

      expect(screen.getByText('✂️')).toBeInTheDocument();
      expect(screen.getByText('🛁')).toBeInTheDocument();
      expect(screen.getByText('🐾')).toBeInTheDocument();
    });

    it('renders hygiene icons', () => {
      render(<ServicesSection />);

      expect(screen.getByText('👂')).toBeInTheDocument();
      expect(screen.getByText('🦷')).toBeInTheDocument();
    });

    it('renders "Hygiene" badges', () => {
      render(<ServicesSection />);

      const badges = screen.getAllByText('Hygiene');
      expect(badges).toHaveLength(2);
    });

    it('renders dog silhouette background', () => {
      render(<ServicesSection />);

      expect(screen.getByTestId('dog-silhouette')).toBeInTheDocument();
    });

    it('renders SVG wave transition', () => {
      const { container } = render(<ServicesSection />);
      const svgs = container.querySelectorAll('svg');

      expect(svgs.length).toBeGreaterThan(0);
    });
  });

  describe('styling', () => {
    it('applies pink background color to section', () => {
      const { container } = render(<ServicesSection />);
      const section = container.querySelector('section');

      expect(section.style.backgroundColor).toBe('rgb(255, 46, 99)');
    });

    it('has proper padding classes', () => {
      const { container } = render(<ServicesSection />);
      const section = container.querySelector('section');

      expect(section).toHaveClass('py-20');
      expect(section).toHaveClass('relative');
      expect(section).toHaveClass('overflow-hidden');
    });

    it('section badge has white background and pink text', () => {
      render(<ServicesSection />);
      const badge = screen.getByText('Our Services');

      expect(badge).toHaveStyle({ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(255, 46, 99)' });
    });

    it('section title has white color', () => {
      render(<ServicesSection />);
      const title = screen.getByText('What we do best');

      expect(title).toHaveStyle({ color: 'rgb(255, 255, 255)' });
    });

    it('hygiene badges have correct colors', () => {
      render(<ServicesSection />);
      const badges = screen.getAllByText('Hygiene');

      badges.forEach(badge => {
        expect(badge).toHaveStyle({ backgroundColor: 'rgb(255, 46, 99)', color: 'rgb(255, 255, 255)' });
      });
    });
  });

  describe('service descriptions', () => {
    it('Full Groom has correct description', () => {
      render(<ServicesSection />);

      expect(screen.getByText(/The works: bath, dry, brush, trim/i)).toBeInTheDocument();
    });

    it('Bath & Tidy has correct description', () => {
      render(<ServicesSection />);

      expect(screen.getByText(/A refresh between full grooms/i)).toBeInTheDocument();
    });

    it('Puppy Intro has correct description', () => {
      render(<ServicesSection />);

      expect(screen.getByText(/First time\? We take it slow/i)).toBeInTheDocument();
    });

    it('Ear Cleaning has correct description', () => {
      render(<ServicesSection />);

      expect(screen.getByText(/Gentle, thorough ear care/i)).toBeInTheDocument();
    });

    it('Teeth Cleaning has correct description', () => {
      render(<ServicesSection />);

      expect(screen.getByText(/Fresh breath and healthy gums/i)).toBeInTheDocument();
    });
  });

  describe('layout', () => {
    it('main services use 3-column grid', () => {
      const { container } = render(<ServicesSection />);
      const mainGrid = container.querySelector('.grid.md\\:grid-cols-3');

      expect(mainGrid).toBeInTheDocument();
    });

    it('additional services use 2-column grid', () => {
      const { container } = render(<ServicesSection />);
      const additionalGrid = container.querySelector('.grid.md\\:grid-cols-2');

      expect(additionalGrid).toBeInTheDocument();
    });

    it('container has max width', () => {
      const { container } = render(<ServicesSection />);
      const containers = container.querySelectorAll('.max-w-6xl.mx-auto');

      expect(containers.length).toBeGreaterThan(0);
    });
  });

  describe('background elements', () => {
    it('dog silhouette has white color', () => {
      render(<ServicesSection />);
      const silhouette = screen.getByTestId('dog-silhouette');

      expect(silhouette).toHaveAttribute('data-color', 'white');
    });

    it('dog silhouette is positioned for background', () => {
      const { container } = render(<ServicesSection />);
      const silhouetteContainer = container.querySelector('.absolute.bottom-0.left-0');

      expect(silhouetteContainer).toBeInTheDocument();
    });
  });
});
