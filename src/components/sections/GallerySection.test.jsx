import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import GallerySection from './GallerySection';

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
  });

  describe('styling', () => {
    it('applies yellow background color to section', () => {
      const { container } = render(<GallerySection />);
      const section = container.querySelector('section');

      expect(section.style.backgroundColor).toBe('rgb(255, 204, 0)');
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

      expect(badge).toHaveStyle({ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(42, 111, 107)' });
    });

    it('section title has teal color', () => {
      render(<GallerySection />);
      const title = screen.getByText('Fresh from the Salon');

      expect(title).toHaveStyle({ color: 'rgb(42, 111, 107)' });
      expect(title).toHaveClass('heading-font');
      expect(title).toHaveClass('font-bold');
    });
  });
});
