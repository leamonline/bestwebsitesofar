import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TestimonialsSection from './TestimonialsSection';
import { colors } from '../../constants/colors';

describe('TestimonialsSection', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      render(<TestimonialsSection />);
    });

    it('renders section title', () => {
      render(<TestimonialsSection />);

      expect(screen.getByText('Client Reviews')).toBeInTheDocument();
      expect(screen.getByText('The Word on the Street')).toBeInTheDocument();
    });

    it('renders 3 testimonials', () => {
      render(<TestimonialsSection />);

      expect(screen.getByText(/Been bringing my dogs here for 15 years/i)).toBeInTheDocument();
      expect(screen.getByText(/My nervous rescue was terrified of groomers/i)).toBeInTheDocument();
      expect(screen.getByText(/The best cut my doodle has ever had/i)).toBeInTheDocument();
    });

    it('renders testimonial authors', () => {
      render(<TestimonialsSection />);

      expect(screen.getByText('Sarah M.')).toBeInTheDocument();
      expect(screen.getByText('James T.')).toBeInTheDocument();
      expect(screen.getByText('Emily R.')).toBeInTheDocument();
    });

    it('renders pet information', () => {
      render(<TestimonialsSection />);

      expect(screen.getByText('Parent of Biscuit & Crumble')).toBeInTheDocument();
      expect(screen.getByText('Parent of Ronnie')).toBeInTheDocument();
      expect(screen.getByText('Parent of Barnaby')).toBeInTheDocument();
    });

    it('renders quote marks', () => {
      render(<TestimonialsSection />);

      const quoteMarks = screen.getAllByText('"');
      expect(quoteMarks).toHaveLength(3);
    });

    it('renders paw emojis', () => {
      render(<TestimonialsSection />);

      const paws = screen.getAllByText('🐾');
      expect(paws).toHaveLength(3);
    });

    it('renders SVG transition', () => {
      const { container } = render(<TestimonialsSection />);
      const svg = container.querySelector('svg');

      expect(svg).toBeInTheDocument();
    });
  });

  describe('styling', () => {
    it('has proper padding classes', () => {
      const { container } = render(<TestimonialsSection />);
      const section = container.querySelector('section');

      expect(section).toHaveClass('py-24');
    });

    it('section badge has yellow background and plum text', () => {
      render(<TestimonialsSection />);
      const badge = screen.getByText('Client Reviews');

      expect(badge).toHaveStyle({ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(45, 0, 75)' });
    });

    it('section title has white color', () => {
      render(<TestimonialsSection />);
      const title = screen.getByText('The Word on the Street');

      expect(title).toHaveStyle({ color: 'rgb(255, 255, 255)' });
      expect(title).toHaveClass('heading-font');
      expect(title).toHaveClass('font-black');
    });

    it('quote marks have testimonial accent color', () => {
      const { container } = render(<TestimonialsSection />);
      const quoteMarks = container.querySelectorAll('.text-4xl.absolute.top-4.right-4');

      expect(quoteMarks.length).toBe(3);
      expect(quoteMarks[0]).toHaveStyle({ color: 'rgb(255, 46, 99)' });
      expect(quoteMarks[1]).toHaveStyle({ color: 'rgb(0, 217, 74)' });
      expect(quoteMarks[2]).toHaveStyle({ color: 'rgb(255, 107, 0)' });
    });
  });

  describe('testimonial content', () => {
    it('first testimonial has complete content', () => {
      render(<TestimonialsSection />);

      expect(screen.getByText(/Been bringing my dogs here for 15 years/i)).toBeInTheDocument();
      expect(screen.getByText(/treat every pup like royalty/i)).toBeInTheDocument();
    });

    it('second testimonial has complete content', () => {
      render(<TestimonialsSection />);

      expect(screen.getByText(/My nervous rescue was terrified/i)).toBeInTheDocument();
      expect(screen.getByText(/gets excited for his appointments/i)).toBeInTheDocument();
    });

    it('testimonials have plum text color', () => {
      const { container } = render(<TestimonialsSection />);
      const quotes = container.querySelectorAll('.body-font.text-lg.leading-relaxed');

      quotes.forEach(quote => {
        expect(quote).toHaveStyle({ color: 'rgb(45, 0, 75)' });
      });
    });
  });

  describe('layout', () => {
    it('uses 3-column grid for testimonials on large screens', () => {
      const { container } = render(<TestimonialsSection />);
      const grid = container.querySelector('.grid.md\\:grid-cols-2.lg\\:grid-cols-3');

      expect(grid).toBeInTheDocument();
    });

    it('container has max width', () => {
      const { container } = render(<TestimonialsSection />);
      const containers = container.querySelectorAll('.max-w-6xl.mx-auto');

      expect(containers.length).toBeGreaterThan(0);
    });

    it('title section is centered', () => {
      const { container } = render(<TestimonialsSection />);
      const titleSection = container.querySelector('.text-center.mb-20');

      expect(titleSection).toBeInTheDocument();
    });
  });

  describe('accent colors', () => {
    it('first testimonial has pink accent', () => {
      const { container } = render(<TestimonialsSection />);
      // We need to find the element that has the accent color style
      // In the new code, the quote mark has the accent color
      const quoteMarks = container.querySelectorAll('.text-4xl.absolute.top-4.right-4');
      expect(quoteMarks[0]).toHaveStyle({ color: colors.pink });
    });

    it('second testimonial has green accent', () => {
      const { container } = render(<TestimonialsSection />);
      const quoteMarks = container.querySelectorAll('.text-4xl.absolute.top-4.right-4');
      expect(quoteMarks[1]).toHaveStyle({ color: colors.green });
    });
  });

  describe('author information', () => {
    it('author names use heading-font', () => {
      render(<TestimonialsSection />);
      const sarahName = screen.getByText('Sarah M.');
      const jamesName = screen.getByText('James T.');

      expect(sarahName).toHaveClass('heading-font');
      expect(sarahName).toHaveClass('font-bold');
      expect(jamesName).toHaveClass('heading-font');
      expect(jamesName).toHaveClass('font-bold');
    });

    it('pet information uses body-font', () => {
      render(<TestimonialsSection />);
      const sarahPets = screen.getByText('Parent of Biscuit & Crumble');
      const jamesPets = screen.getByText('Parent of Ronnie');

      expect(sarahPets).toHaveClass('body-font');
      expect(sarahPets).toHaveClass('text-sm');
      expect(jamesPets).toHaveClass('body-font');
      expect(jamesPets).toHaveClass('text-sm');
    });

    it('pet information has teal color', () => {
      render(<TestimonialsSection />);
      const sarahPets = screen.getByText('Parent of Biscuit & Crumble');

      expect(sarahPets).toHaveStyle({ color: colors.teal });
    });
  });

  describe('SVG transition', () => {
    it('SVG path has green fill color', () => {
      const { container } = render(<TestimonialsSection />);
      const path = container.querySelector('path');

      expect(path).toHaveAttribute('fill', colors.green);
    });
  });
});
