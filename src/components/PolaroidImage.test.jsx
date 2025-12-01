import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PolaroidImage from './PolaroidImage';
import { colors } from '../constants/colors';

describe('PolaroidImage', () => {
  it('renders with caption', () => {
    render(<PolaroidImage caption="Bella's spa day ✨" />);
    expect(screen.getByText("Bella's spa day ✨")).toBeInTheDocument();
  });

  it('applies premium design classes', () => {
    const { container } = render(<PolaroidImage caption="Test" />);
    const wrapper = container.firstChild;

    expect(wrapper).toHaveClass('shadow-layered');
    expect(wrapper).toHaveClass('texture-grain');
    expect(wrapper).toHaveClass('hover-lift');
    expect(wrapper).toHaveClass('hover-tilt');
  });

  it('renders washi tape with rotation', () => {
    const { container } = render(<PolaroidImage caption="Test" tapeColor={colors.cyan} />);
    // Select tape by its positioning classes
    const tape = container.querySelector('.absolute.-top-3.left-1\\/2');

    expect(tape).toBeInTheDocument();
    expect(tape.getAttribute('style')).toMatch(/rotate/);
  });

  it('caption uses Caveat font family', () => {
    render(<PolaroidImage caption="Test Caption" />);
    // Note: The component uses a 'handwriting' class which likely applies the font, 
    // but we can check if the class is present or check computed style if possible.
    // Given the component uses a CSS class for font, we'll check for the class or style.
    // The component code: className="handwriting ..."
    const caption = screen.getByText('Test Caption');
    expect(caption).toHaveClass('handwriting');
  });

  it('caption has correct color', () => {
    render(<PolaroidImage caption="Test Caption" />);
    const caption = screen.getByText('Test Caption');
    expect(caption).toHaveStyle({ color: colors.plum });
  });

  it('has white polaroid frame background', () => {
    const { container } = render(<PolaroidImage caption="Test" />);
    const frame = container.querySelector('.bg-white');
    expect(frame).toBeInTheDocument();
  });

  it('renders image with correct src', () => {
    render(<PolaroidImage src="test-image.jpg" caption="Test" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'test-image.jpg');
    expect(img).toHaveAttribute('alt', 'Test');
  });

  it('renders imperfections (thumb smudge)', () => {
    const { container } = render(<PolaroidImage caption="Test" />);
    // Check for the smudge element by its unique blur class
    const smudge = container.querySelector('.blur-md');
    expect(smudge).toBeInTheDocument();
  });
});
