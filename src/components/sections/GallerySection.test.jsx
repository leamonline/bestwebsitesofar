import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import GallerySection from './GallerySection';
import { colors } from '../../constants/colors';

// Mock PolaroidImage component
vi.mock('../PolaroidImage', () => ({
  default: ({ caption, rotation, tapeColor }) => (
    <div data-testid="polaroid-image" data-caption={caption} data-rotation={rotation} data-tape-color={tapeColor}>
      {caption}
    </div>
  )
}));

describe('GallerySection', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      render(<GallerySection />);
    });

    it('renders section title', () => {
      render(<GallerySection />);

      expect(screen.getByText('Gallery')).toBeInTheDocument();
      expect(screen.getByText('Fresh from the Salon')).toBeInTheDocument();
    });

    it('renders 4 polaroid images', () => {
      render(<GallerySection />);

      const polaroids = screen.getAllByTestId('polaroid-image');
      expect(polaroids).toHaveLength(4);
    });

    it('renders polaroid captions', () => {
      render(<GallerySection />);

      expect(screen.getByText('Max after his trim 🐕')).toBeInTheDocument();
      expect(screen.getByText('Daisy loves bath time')).toBeInTheDocument();
      expect(screen.getByText('Sir Woofs-a-lot 👑')).toBeInTheDocument();
      expect(screen.getByText('Fluffy & fabulous')).toBeInTheDocument();
    });

    it('renders paw print decorations', () => {
      render(<GallerySection />);

      const pawPrints = screen.getAllByText('🐾');
      expect(pawPrints).toHaveLength(2);
    });

    it('renders SVG transition', () => {
      const { container } = render(<GallerySection />);
      const svg = container.querySelector('svg');

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('viewBox', '0 0 1440 60');
    });
  });

  describe('styling', () => {
    it('applies yellow background color to section', () => {
      const { container } = render(<GallerySection />);
      const section = container.querySelector('section');

      expect(section.style.backgroundColor).toBe(colors.yellow);
    });

    it('has proper padding classes', () => {
      const { container } = render(<GallerySection />);
      const section = container.querySelector('section');

      expect(section).toHaveClass('py-20');
      expect(section).toHaveClass('relative');
      expect(section).toHaveClass('overflow-hidden');
    });

    it('section badge has white background and teal text', () => {
      render(<GallerySection />);
      const badge = screen.getByText('Gallery');

      expect(badge).toHaveStyle({ backgroundColor: 'white', color: colors.teal });
    });

    it('section title has teal color', () => {
      render(<GallerySection />);
      const title = screen.getByText('Fresh from the Salon');

      expect(title).toHaveStyle({ color: colors.teal });
      expect(title).toHaveClass('heading-font');
      expect(title).toHaveClass('font-bold');
    });

    it('paw prints have correct opacity', () => {
      const { container } = render(<GallerySection />);
      const pawPrintContainers = container.querySelectorAll('.opacity-20');

      expect(pawPrintContainers.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('polaroid images configuration', () => {
    it('first polaroid has correct rotation and tape color', () => {
      render(<GallerySection />);
      const polaroids = screen.getAllByTestId('polaroid-image');

      expect(polaroids[0]).toHaveAttribute('data-rotation', '-4');
      expect(polaroids[0]).toHaveAttribute('data-tape-color', colors.pink);
    });

    it('second polaroid has correct rotation and tape color', () => {
      render(<GallerySection />);
      const polaroids = screen.getAllByTestId('polaroid-image');

      expect(polaroids[1]).toHaveAttribute('data-rotation', '3');
      expect(polaroids[1]).toHaveAttribute('data-tape-color', colors.cyan);
    });

    it('third polaroid has correct rotation and tape color', () => {
      render(<GallerySection />);
      const polaroids = screen.getAllByTestId('polaroid-image');

      expect(polaroids[2]).toHaveAttribute('data-rotation', '-2');
      expect(polaroids[2]).toHaveAttribute('data-tape-color', colors.green);
    });

    it('fourth polaroid has correct rotation and tape color', () => {
      render(<GallerySection />);
      const polaroids = screen.getAllByTestId('polaroid-image');

      expect(polaroids[3]).toHaveAttribute('data-rotation', '5');
      expect(polaroids[3]).toHaveAttribute('data-tape-color', colors.orange);
    });
  });

  describe('layout', () => {
    it('polaroids container uses flex layout', () => {
      const { container } = render(<GallerySection />);
      const polaroidsContainer = container.querySelector('.flex.flex-wrap.justify-center');

      expect(polaroidsContainer).toBeInTheDocument();
    });

    it('container has max width', () => {
      const { container } = render(<GallerySection />);
      const mainContainer = container.querySelector('.max-w-6xl.mx-auto');

      expect(mainContainer).toBeInTheDocument();
    });

    it('title section is centered', () => {
      const { container } = render(<GallerySection />);
      const titleSection = container.querySelector('.text-center.mb-16');

      expect(titleSection).toBeInTheDocument();
    });
  });

  describe('decorative elements', () => {
    it('top-left paw print is positioned correctly', () => {
      const { container } = render(<GallerySection />);
      const topPaw = container.querySelector('.absolute.top-10.left-10');

      expect(topPaw).toBeInTheDocument();
      expect(topPaw).toHaveClass('text-6xl');
    });

    it('bottom-right paw print is positioned correctly', () => {
      const { container } = render(<GallerySection />);
      const bottomPaw = container.querySelector('.absolute.bottom-10.right-10');

      expect(bottomPaw).toBeInTheDocument();
      expect(bottomPaw).toHaveClass('text-6xl');
    });
  });

  describe('SVG transition', () => {
    it('SVG path has cyan fill color', () => {
      const { container } = render(<GallerySection />);
      const path = container.querySelector('path');

      expect(path).toHaveAttribute('fill', colors.cyan);
    });

    it('SVG container has yellow background', () => {
      const { container } = render(<GallerySection />);
      const svgContainers = Array.from(container.querySelectorAll('div')).filter(
        div => div.style.backgroundColor === colors.yellow && div.querySelector('svg')
      );

      expect(svgContainers.length).toBeGreaterThan(0);
    });
  });
});
