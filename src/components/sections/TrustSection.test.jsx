import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TrustSection from './TrustSection';
import { colors } from '../../constants/colors';

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

      expect(section.style.backgroundColor).toBe(colors.green);
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

      expect(number).toHaveStyle({ color: 'white' });
    });

    it('statistic numbers use heading-font', () => {
      render(<TrustSection />);
      const number = screen.getByText('40+');

      expect(number).toHaveClass('heading-font');
      expect(number).toHaveClass('font-bold');
      expect(number).toHaveClass('text-4xl');
    });

    it('statistic labels have semi-transparent white color', () => {
      render(<TrustSection />);
      const label = screen.getByText(/Years Experience/i);

      expect(label).toHaveStyle({ color: 'rgba(255,255,255,0.8)' });
    });

    it('statistic labels use body-font', () => {
      render(<TrustSection />);
      const label = screen.getByText(/Years Experience/i);

      expect(label).toHaveClass('body-font');
      expect(label).toHaveClass('text-sm');
    });
  });

  describe('decorative elements', () => {
    it('renders top-left decorative circle', () => {
      const { container } = render(<TrustSection />);
      const circles = container.querySelectorAll('.rounded-full.opacity-10');

      expect(circles.length).toBeGreaterThanOrEqual(2);
    });

    it('decorative circles have white background', () => {
      const { container } = render(<TrustSection />);
      const circles = container.querySelectorAll('.rounded-full.opacity-10');

      circles.forEach(circle => {
        expect(circle.style.backgroundColor).toBe('white');
      });
    });

    it('decorative circles are positioned absolutely', () => {
      const { container } = render(<TrustSection />);
      const circle = container.querySelector('.absolute.top-0.left-10');

      expect(circle).toBeInTheDocument();
      expect(circle).toHaveClass('absolute');
    });
  });

  describe('layout', () => {
    it('statistics container has flex layout', () => {
      const { container } = render(<TrustSection />);
      const statsContainer = container.querySelector('.flex.flex-wrap.justify-center');

      expect(statsContainer).toBeInTheDocument();
    });

    it('statistics container has correct max width', () => {
      const { container } = render(<TrustSection />);
      const statsContainer = container.querySelector('.max-w-6xl.mx-auto');

      expect(statsContainer).toBeInTheDocument();
    });

    it('statistics are centered', () => {
      const { container } = render(<TrustSection />);
      const statsContainer = container.querySelector('.justify-center.items-center');

      expect(statsContainer).toBeInTheDocument();
    });
  });

  describe('SVG transition', () => {
    it('SVG has correct fill color (pink)', () => {
      const { container } = render(<TrustSection />);
      const path = container.querySelector('path');

      expect(path).toHaveAttribute('fill', colors.pink);
    });

    it('SVG parent has green background', () => {
      const { container } = render(<TrustSection />);
      const svgContainer = container.querySelector('div[style*="backgroundColor"]');
      const svgParents = Array.from(container.querySelectorAll('div')).filter(
        div => div.style.backgroundColor === colors.green && div.querySelector('svg')
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
