import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TrustSection from './TrustSection';


describe('TrustSection', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      render(<TrustSection />);
    });

    it('renders all 4 statistics', () => {
      render(<TrustSection />);

      expect(screen.getByText('40+')).toBeInTheDocument();
      expect(screen.getByText('10,000+')).toBeInTheDocument();
      expect(screen.getByText('4.9★')).toBeInTheDocument();
      expect(screen.getByText('100%')).toBeInTheDocument();
    });

    it('renders statistic labels', () => {
      render(<TrustSection />);

      expect(screen.getByText(/Years Experience/i)).toBeInTheDocument();
      expect(screen.getByText(/Happy Pups/i)).toBeInTheDocument();
      expect(screen.getByText(/Google Rating/i)).toBeInTheDocument();
      expect(screen.getByText(/Tail Wags/i)).toBeInTheDocument();
    });

    it('renders statistic icons', () => {
      render(<TrustSection />);

      expect(screen.getByText(/🏆/)).toBeInTheDocument();
      expect(screen.getByText(/🐕/)).toBeInTheDocument();
      expect(screen.getByText(/⭐/)).toBeInTheDocument();
      expect(screen.getByText(/💕/)).toBeInTheDocument();
    });

    it('renders SVG wave transition', () => {
      const { container } = render(<TrustSection />);
      const svg = container.querySelector('svg');

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('viewBox', '0 0 1440 100');
    });
  });

  describe('styling', () => {
    it('applies green background color to section', () => {
      const { container } = render(<TrustSection />);
      const section = container.querySelector('section');

      expect(section.style.backgroundColor).toBe('rgb(0, 217, 74)');
    });

    it('has proper padding and overflow classes', () => {
      const { container } = render(<TrustSection />);
      const section = container.querySelector('section');

      expect(section).toHaveClass('py-10');
      expect(section).toHaveClass('relative');
      expect(section).toHaveClass('overflow-hidden');
    });

    it('statistic numbers have white color', () => {
      render(<TrustSection />);
      const number = screen.getByText('40+');

      expect(number).toHaveStyle({ color: 'rgb(255, 255, 255)' });
    });

    it('SVG parent has green background', () => {
      const { container } = render(<TrustSection />);
      const svgParents = Array.from(container.querySelectorAll('div')).filter(
        div => div.style.backgroundColor === 'rgb(0, 217, 74)' && div.querySelector('svg')
      );

      expect(svgParents.length).toBeGreaterThan(0);
    });

    it('SVG has correct styling classes', () => {
      const { container } = render(<TrustSection />);
      const svg = container.querySelector('svg');

      expect(svg).toHaveAttribute('preserveAspectRatio', 'none');
    });
  });

  describe('statistics data', () => {
    it('each statistic has both number and label', () => {
      const { container } = render(<TrustSection />);
      const stats = container.querySelectorAll('.text-center');

      expect(stats).toHaveLength(4);

      stats.forEach(stat => {
        const number = stat.querySelector('.heading-font');
        const label = stat.querySelector('.body-font');

        expect(number).toBeInTheDocument();
        expect(label).toBeInTheDocument();
      });
    });

    it('statistics are in correct order', () => {
      render(<TrustSection />);
      const numbers = screen.getAllByText(/^(40\+|10,000\+|4\.9★|100%)$/);

      expect(numbers[0]).toHaveTextContent('40+');
      expect(numbers[1]).toHaveTextContent('10,000+');
      expect(numbers[2]).toHaveTextContent('4.9★');
      expect(numbers[3]).toHaveTextContent('100%');
    });
  });
});
