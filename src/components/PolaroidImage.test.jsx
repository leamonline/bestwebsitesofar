import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PolaroidImage from './PolaroidImage';
import { colors } from '../constants/colors';

describe('PolaroidImage', () => {
  it('renders with caption', () => {
    render(<PolaroidImage caption="Bella's spa day ✨" />);

    expect(screen.getByText("Bella's spa day ✨")).toBeInTheDocument();
  });

  it('applies default rotation of 0 degrees when not specified', () => {
    const { container } = render(<PolaroidImage caption="Test" />);
    const wrapper = container.firstChild;

    expect(wrapper).toHaveStyle({ transform: 'rotate(0deg)' });
  });

  it('applies custom rotation when specified', () => {
    const { container } = render(<PolaroidImage caption="Test" rotation={-5} />);
    const wrapper = container.firstChild;

    expect(wrapper).toHaveStyle({ transform: 'rotate(-5deg)' });
  });

  it('applies positive rotation correctly', () => {
    const { container } = render(<PolaroidImage caption="Test" rotation={4} />);
    const wrapper = container.firstChild;

    expect(wrapper).toHaveStyle({ transform: 'rotate(4deg)' });
  });

  it('does NOT render washi tape when tapeColor is null', () => {
    const { container } = render(<PolaroidImage caption="Test" tapeColor={null} />);
    const tape = container.querySelector('.absolute.-top-2.left-1\\/4');

    expect(tape).not.toBeInTheDocument();
  });

  it('does NOT render washi tape when tapeColor is not provided', () => {
    const { container } = render(<PolaroidImage caption="Test" />);
    const tape = container.querySelector('.absolute.-top-2.left-1\\/4');

    expect(tape).not.toBeInTheDocument();
  });

  it('renders washi tape when tapeColor is provided', () => {
    const { container } = render(<PolaroidImage caption="Test" tapeColor={colors.cyan} />);
    const tape = container.querySelector('.absolute.-top-2.left-1\\/4');

    expect(tape).toBeInTheDocument();
  });

  it('applies correct tape color', () => {
    const { container } = render(<PolaroidImage caption="Test" tapeColor={colors.pink} />);
    const tape = container.querySelector('.absolute.-top-2.left-1\\/4');

    expect(tape).toHaveStyle({ backgroundColor: colors.pink });
  });

  it('tape has correct opacity', () => {
    const { container } = render(<PolaroidImage caption="Test" tapeColor={colors.cyan} />);
    const tape = container.querySelector('.absolute.-top-2.left-1\\/4');

    expect(tape).toHaveStyle({ opacity: '0.85' });
  });

  it('tape has slight rotation', () => {
    const { container } = render(<PolaroidImage caption="Test" tapeColor={colors.cyan} />);
    const tape = container.querySelector('.absolute.-top-2.left-1\\/4');

    expect(tape).toHaveStyle({ transform: 'rotate(-5deg)' });
  });

  it('contains SVG paw icon', () => {
    const { container } = render(<PolaroidImage caption="Test" />);
    const svg = container.querySelector('svg');

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 512 512');
  });

  it('SVG paw icon has correct styling', () => {
    const { container } = render(<PolaroidImage caption="Test" />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveClass('w-16');
    expect(svg).toHaveClass('h-16');
    expect(svg).toHaveClass('opacity-30');
    expect(svg).toHaveStyle({ color: colors.teal });
  });

  it('caption uses Caveat font family', () => {
    render(<PolaroidImage caption="Test Caption" />);
    const caption = screen.getByText('Test Caption');

    expect(caption).toHaveStyle({ fontFamily: "'Caveat', cursive" });
  });

  it('caption has correct color', () => {
    render(<PolaroidImage caption="Test Caption" />);
    const caption = screen.getByText('Test Caption');

    expect(caption).toHaveStyle({ color: colors.teal });
  });

  it('caption has correct font size and weight', () => {
    render(<PolaroidImage caption="Test Caption" />);
    const caption = screen.getByText('Test Caption');

    expect(caption).toHaveStyle({
      fontSize: '20px',
      fontWeight: '500',
    });
  });

  it('has white polaroid frame background', () => {
    const { container } = render(<PolaroidImage caption="Test" />);
    const frame = container.querySelector('.bg-white.p-3.pb-14');

    expect(frame).toBeInTheDocument();
  });

  it('has gradient background for image area', () => {
    const { container } = render(<PolaroidImage caption="Test" />);
    const imageArea = container.querySelector('.w-48.h-48');

    expect(imageArea).toHaveStyle({
      background: `linear-gradient(135deg, ${colors.cyanLight} 0%, ${colors.greenLight} 100%)`,
    });
  });

  it('has group and cursor-pointer classes for interactivity', () => {
    const { container } = render(<PolaroidImage caption="Test" />);
    const wrapper = container.firstChild;

    expect(wrapper).toHaveClass('group');
    expect(wrapper).toHaveClass('cursor-pointer');
  });

  it('has hover effect classes on frame', () => {
    const { container } = render(<PolaroidImage caption="Test" />);
    const frame = container.querySelector('.bg-white');

    expect(frame).toHaveClass('hover:shadow-xl');
    expect(frame).toHaveClass('group-hover:rotate-0');
    expect(frame).toHaveClass('group-hover:scale-105');
  });

  it('has correct transition timing', () => {
    const { container } = render(<PolaroidImage caption="Test" />);
    const wrapper = container.firstChild;

    expect(wrapper).toHaveStyle({
      transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    });
  });

  it('tape has z-index for proper layering', () => {
    const { container } = render(<PolaroidImage caption="Test" tapeColor={colors.cyan} />);
    const tape = container.querySelector('.absolute.-top-2.left-1\\/4');

    expect(tape).toHaveClass('z-10');
  });

  it('renders with different caption text', () => {
    render(<PolaroidImage caption="Looking dapper!" />);

    expect(screen.getByText('Looking dapper!')).toBeInTheDocument();
  });

  it('renders with emoji in caption', () => {
    render(<PolaroidImage caption="Fresh & fluffy 🛁" />);

    expect(screen.getByText('Fresh & fluffy 🛁')).toBeInTheDocument();
  });
});
