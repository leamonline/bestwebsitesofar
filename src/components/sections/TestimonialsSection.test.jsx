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

      expect(screen.getByText('Testimonials')).toBeInTheDocument();
      expect(screen.getByText('What Our Pack Says')).toBeInTheDocument();
    });

    it('renders 2 testimonials', () => {
      render(<TestimonialsSection />);

      expect(screen.getByText(/Been bringing my dogs here for 15 years/i)).toBeInTheDocument();
      expect(screen.getByText(/My nervous rescue was terrified of groomers/i)).toBeInTheDocument();
    });

    it('renders testimonial authors', () => {
      render(<TestimonialsSection />);

      expect(screen.getByText('Sarah M.')).toBeInTheDocument();
      expect(screen.getByText('James T.')).toBeInTheDocument();
    });

    it('renders pet information', () => {
      render(<TestimonialsSection />);

      expect(screen.getByText('Mum to Biscuit & Crumble')).toBeInTheDocument();
      expect(screen.getByText('Dad to Ronnie')).toBeInTheDocument();
    });

    it('renders quote marks', () => {
      render(<TestimonialsSection />);

      const quoteMarks = screen.getAllByText('"');
      expect(quoteMarks).toHaveLength(2);
    });

    it('renders heart emojis', () => {
      render(<TestimonialsSection />);

      const hearts = screen.getAllByText('💕');
      expect(hearts).toHaveLength(2);
    });

    it('renders SVG transition', () => {
      const { container } = render(<TestimonialsSection />);
      const svg = container.querySelector('svg');

      expect(svg).toBeInTheDocument();
    });
  });

  describe('styling', () => {
    it('applies cyan background color to section', () => {
      const { container } = render(<TestimonialsSection />);
      const section = container.querySelector('section');

      expect(section.style.backgroundColor).toBe(colors.cyan);
    });

    it('has proper padding classes', () => {
      const { container } = render(<TestimonialsSection />);
      const section = container.querySelector('section');

      expect(section).toHaveClass('py-20');
    });

    it('section badge has white background and cyan text', () => {
      render(<TestimonialsSection />);
      const badge = screen.getByText('Testimonials');

      expect(badge).toHaveStyle({ backgroundColor: 'white', color: colors.cyan });
    });

    it('section title has white color', () => {
      render(<TestimonialsSection />);
      const title = screen.getByText('What Our Pack Says');

      expect(title).toHaveStyle({ color: 'white' });
      expect(title).toHaveClass('heading-font');
      expect(title).toHaveClass('font-bold');
    });

    it('testimonial cards have white background', () => {
      const { container } = render(<TestimonialsSection />);
      const testimonialCards = container.querySelectorAll('.p-8.rounded-3xl');

      expect(testimonialCards.length).toBeGreaterThanOrEqual(2);
      testimonialCards.forEach(card => {
        expect(card).toHaveStyle({ backgroundColor: 'white' });
      });
    });

    it('quote marks have testimonial accent color', () => {
      const { container } = render(<TestimonialsSection />);
      const quoteMarks = container.querySelectorAll('.text-5xl.mb-4');

      expect(quoteMarks.length).toBe(2);
      expect(quoteMarks[0]).toHaveStyle({ color: colors.pink });
      expect(quoteMarks[1]).toHaveStyle({ color: colors.green });
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

    it('testimonials have teal text color', () => {
      const { container } = render(<TestimonialsSection />);
      const quotes = container.querySelectorAll('.body-font.text-lg.leading-relaxed');

      quotes.forEach(quote => {
        expect(quote).toHaveStyle({ color: colors.teal });
      });
    });
  });

  describe('layout', () => {
    it('uses 2-column grid for testimonials', () => {
      const { container } = render(<TestimonialsSection />);
      const grid = container.querySelector('.grid.md\\:grid-cols-2');

      expect(grid).toBeInTheDocument();
    });

    it('container has max width', () => {
      const { container } = render(<TestimonialsSection />);
      const containers = container.querySelectorAll('.max-w-6xl.mx-auto');

      expect(containers.length).toBeGreaterThan(0);
    });

    it('title section is centered', () => {
      const { container } = render(<TestimonialsSection />);
      const titleSection = container.querySelector('.text-center.mb-16');

      expect(titleSection).toBeInTheDocument();
    });
  });

  describe('accent colors', () => {
    it('first testimonial has pink accent', () => {
      const { container } = render(<TestimonialsSection />);
      const testimonials = container.querySelectorAll('.p-8.rounded-3xl');
      const firstQuoteMark = testimonials[0].querySelector('.text-5xl');

      expect(firstQuoteMark).toHaveStyle({ color: colors.pink });
    });

    it('second testimonial has green accent', () => {
      const { container } = render(<TestimonialsSection />);
      const testimonials = container.querySelectorAll('.p-8.rounded-3xl');
      const secondQuoteMark = testimonials[1].querySelector('.text-5xl');

      expect(secondQuoteMark).toHaveStyle({ color: colors.green });
    });
  });

  describe('author information', () => {
    it('author names use heading-font', () => {
      render(<TestimonialsSection />);
      const sarahName = screen.getByText('Sarah M.');
      const jamesName = screen.getByText('James T.');

      expect(sarahName).toHaveClass('heading-font');
      expect(sarahName).toHaveClass('font-semibold');
      expect(jamesName).toHaveClass('heading-font');
      expect(jamesName).toHaveClass('font-semibold');
    });

    it('pet information uses body-font', () => {
      render(<TestimonialsSection />);
      const sarahPets = screen.getByText('Mum to Biscuit & Crumble');
      const jamesPets = screen.getByText('Dad to Ronnie');

      expect(sarahPets).toHaveClass('body-font');
      expect(sarahPets).toHaveClass('text-sm');
      expect(jamesPets).toHaveClass('body-font');
      expect(jamesPets).toHaveClass('text-sm');
    });

    it('pet information has teal color', () => {
      render(<TestimonialsSection />);
      const sarahPets = screen.getByText('Mum to Biscuit & Crumble');

      expect(sarahPets).toHaveStyle({ color: colors.teal });
    });
  });

  describe('SVG transition', () => {
    it('SVG path has green fill color', () => {
      const { container } = render(<TestimonialsSection />);
      const path = container.querySelector('path');

      expect(path).toHaveAttribute('fill', colors.green);
    });

    it('SVG container has cyan background', () => {
      const { container } = render(<TestimonialsSection />);
      const svgContainers = Array.from(container.querySelectorAll('div')).filter(
        div => div.style.backgroundColor === colors.cyan && div.querySelector('svg')
      );

      expect(svgContainers.length).toBeGreaterThan(0);
    });
  });
});
