import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CTASection from './CTASection';
import { colors } from '../../constants/colors';

describe('CTASection', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      render(<CTASection />);
    });

    it('renders handwriting style text', () => {
      render(<CTASection />);

      expect(screen.getByText('Ready for their pamper?')).toBeInTheDocument();
    });

    it('renders main heading', () => {
      render(<CTASection />);

      expect(screen.getByText(/Book your dog's VIP experience today/i)).toBeInTheDocument();
    });

    it('renders opening hours information', () => {
      render(<CTASection />);

      expect(screen.getByText(/Open Monday–Wednesday, 8:30am–3:00pm/i)).toBeInTheDocument();
    });

    it('renders urgency message', () => {
      render(<CTASection />);

      expect(screen.getByText(/Limited slots available/i)).toBeInTheDocument();
    });

    it('renders "Request Appointment" button', () => {
      render(<CTASection />);

      expect(screen.getByRole('button', { name: 'Request Appointment' })).toBeInTheDocument();
    });

    it('renders phone button with number', () => {
      render(<CTASection />);

      expect(screen.getByRole('button', { name: /0161 XXX XXXX/i })).toBeInTheDocument();
    });

    it('renders phone emoji', () => {
      render(<CTASection />);

      expect(screen.getByText('📞')).toBeInTheDocument();
    });

    it('renders SVG transition', () => {
      const { container } = render(<CTASection />);
      const svg = container.querySelector('svg');

      expect(svg).toBeInTheDocument();
    });
  });

  describe('styling', () => {
    it('applies pink background color to section', () => {
      const { container } = render(<CTASection />);
      const section = container.querySelector('section');

      expect(section.style.backgroundColor).toBe('rgb(255, 46, 99)');
    });

    it('has proper padding classes', () => {
      const { container } = render(<CTASection />);
      const section = container.querySelector('section');

      expect(section).toHaveClass('py-20');
      expect(section).toHaveClass('relative');
      expect(section).toHaveClass('overflow-hidden');
    });

    it('handwriting text has white color and uses handwriting font', () => {
      render(<CTASection />);
      const handwritingText = screen.getByText('Ready for their pamper?');

      expect(handwritingText).toHaveStyle({ color: 'rgb(255, 255, 255)' });
      expect(handwritingText).toHaveClass('handwriting');
      expect(handwritingText).toHaveClass('text-3xl');
    });

    it('main heading has white color', () => {
      render(<CTASection />);
      const heading = screen.getByText(/Book your dog's VIP experience today/i);

      expect(heading).toHaveStyle({ color: 'rgb(255, 255, 255)' });
      expect(heading).toHaveClass('heading-font');
      expect(heading).toHaveClass('font-bold');
    });

    it('description has semi-transparent white color', () => {
      render(<CTASection />);
      const description = screen.getByText(/Open Monday–Wednesday/i);

      expect(description).toHaveStyle({ color: 'rgba(255, 255, 255, 0.9)' });
    });

    it('"Request Appointment" button has white background and pink text', () => {
      render(<CTASection />);
      const button = screen.getByRole('button', { name: 'Request Appointment' });

      expect(button.style.backgroundColor).toBe('white');
      expect(button.style.color).toBe('rgb(255, 46, 99)');
    });

    it('calls onBookClick when "Request Appointment" button is clicked', () => {
      const handleBookClick = vi.fn();
      render(<CTASection onBookClick={handleBookClick} />);

      const button = screen.getByRole('button', { name: 'Request Appointment' });
      fireEvent.click(button);

      expect(handleBookClick).toHaveBeenCalledTimes(1);
    });

    it('phone button has transparent background and white border', () => {
      render(<CTASection />);
      const phoneButton = screen.getByRole('button', { name: /0161 XXX XXXX/i });

      expect(phoneButton.style.borderColor).toBe('white');
      expect(phoneButton.style.color).toBe('white');
      expect(phoneButton.style.backgroundColor).toBe('transparent');
    });
  });

  describe('button styling', () => {
    it('"Request Appointment" button has correct classes', () => {
      render(<CTASection />);
      const button = screen.getByRole('button', { name: 'Request Appointment' });

      expect(button).toHaveClass('px-10');
      expect(button).toHaveClass('py-4');
      expect(button).toHaveClass('rounded-full');
      expect(button).toHaveClass('font-bold');
      expect(button).toHaveClass('text-lg');
      expect(button).toHaveClass('hover:scale-105');
      expect(button).toHaveClass('hover:shadow-xl');
    });

    it('phone button has border', () => {
      render(<CTASection />);
      const phoneButton = screen.getByRole('button', { name: /0161 XXX XXXX/i });

      expect(phoneButton).toHaveClass('border-2');
    });

    it('phone button has flex layout for icon and text', () => {
      render(<CTASection />);
      const phoneButton = screen.getByRole('button', { name: /0161 XXX XXXX/i });

      expect(phoneButton).toHaveClass('flex');
      expect(phoneButton).toHaveClass('items-center');
      expect(phoneButton).toHaveClass('gap-2');
    });
  });

  describe('layout', () => {
    it('content container is centered', () => {
      const { container } = render(<CTASection />);
      const contentContainer = container.querySelector('.text-center');

      expect(contentContainer).toBeInTheDocument();
    });

    it('container has max width', () => {
      const { container } = render(<CTASection />);
      const mainContainer = container.querySelector('.max-w-3xl.mx-auto');

      expect(mainContainer).toBeInTheDocument();
    });

    it('buttons container uses flex layout', () => {
      const { container } = render(<CTASection />);
      const buttonsContainer = container.querySelector('.flex.flex-wrap.justify-center');

      expect(buttonsContainer).toBeInTheDocument();
    });

    it('buttons have proper gap', () => {
      const { container } = render(<CTASection />);
      const buttonsContainer = container.querySelector('.flex.gap-4');

      expect(buttonsContainer).toBeInTheDocument();
    });
  });

  describe('decorative elements', () => {
    it('renders top-left decorative circle', () => {
      const { container } = render(<CTASection />);
      const topCircle = container.querySelector('.absolute.-top-20.-left-20');

      expect(topCircle).toBeInTheDocument();
      expect(topCircle).toHaveClass('rounded-full');
      expect(topCircle).toHaveClass('opacity-10');
    });

    it('renders bottom-right decorative circle', () => {
      const { container } = render(<CTASection />);
      const bottomCircle = container.querySelector('.absolute.-bottom-20.-right-20');

      expect(bottomCircle).toBeInTheDocument();
      expect(bottomCircle).toHaveClass('rounded-full');
      expect(bottomCircle).toHaveClass('opacity-10');
    });

    it('decorative circles have white background', () => {
      const { container } = render(<CTASection />);
      const circles = container.querySelectorAll('.rounded-full.opacity-10');

      circles.forEach(circle => {
        expect(circle.style.backgroundColor).toBe('white');
      });
    });
  });

  describe('SVG transition', () => {
    it('SVG path has yellow fill color', () => {
      const { container } = render(<CTASection />);
      const path = container.querySelector('path');

      expect(path).toHaveAttribute('fill', colors.yellow);
    });

    it('SVG container has pink background', () => {
      const { container } = render(<CTASection />);
      const svgContainers = Array.from(container.querySelectorAll('div')).filter(
        div => div.style.backgroundColor === 'rgb(255, 46, 99)' && div.querySelector('svg')
      );

      expect(svgContainers.length).toBeGreaterThan(0);
    });

    it('SVG has correct viewBox', () => {
      const { container } = render(<CTASection />);
      const svg = container.querySelector('svg');

      expect(svg).toHaveAttribute('viewBox', '0 0 1440 120');
    });
  });

  describe('accessibility', () => {
    it('both buttons are accessible via role', () => {
      render(<CTASection />);

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2);
    });

    it('buttons have descriptive text', () => {
      render(<CTASection />);

      expect(screen.getByRole('button', { name: 'Request Appointment' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /0161 XXX XXXX/i })).toBeInTheDocument();
    });
  });
});
