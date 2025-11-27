import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AnnouncementBar from './AnnouncementBar';
import { colors } from '../../constants/colors';

describe('AnnouncementBar', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      render(<AnnouncementBar />);
    });

    it('renders announcement message', () => {
      render(<AnnouncementBar />);

      expect(screen.getByText(/Last-minute slots available this week!/i)).toBeInTheDocument();
    });

    it('renders dog emoji', () => {
      render(<AnnouncementBar />);

      expect(screen.getByText(/🐕/)).toBeInTheDocument();
    });

    it('renders "Book now" link', () => {
      render(<AnnouncementBar />);

      const link = screen.getByRole('link', { name: /Book now →/i });
      expect(link).toBeInTheDocument();
    });
  });

  describe('styling', () => {
    it('applies cyan background color', () => {
      const { container } = render(<AnnouncementBar />);
      const bar = container.firstChild;

      expect(bar).toHaveAttribute('style');
      expect(bar.style.backgroundColor).toBeTruthy();
    });

    it('applies white text color', () => {
      render(<AnnouncementBar />);
      const text = screen.getByText(/Last-minute slots available this week!/i);

      expect(text).toHaveAttribute('style');
      expect(text.style.color).toBeTruthy();
    });

    it('has proper padding and text alignment', () => {
      const { container } = render(<AnnouncementBar />);
      const bar = container.firstChild;

      expect(bar).toHaveClass('py-2');
      expect(bar).toHaveClass('px-4');
      expect(bar).toHaveClass('text-center');
    });

    it('uses body-font class', () => {
      render(<AnnouncementBar />);
      const text = screen.getByText(/Last-minute slots available this week!/i);

      expect(text).toHaveClass('body-font');
      expect(text).toHaveClass('text-sm');
      expect(text).toHaveClass('font-semibold');
    });
  });

  describe('link behavior', () => {
    it('link has underline class', () => {
      render(<AnnouncementBar />);
      const link = screen.getByRole('link', { name: /Book now →/i });

      expect(link).toHaveClass('underline');
    });

    it('link has correct href', () => {
      render(<AnnouncementBar />);
      const link = screen.getByRole('link', { name: /Book now →/i });

      expect(link).toHaveAttribute('href', '#');
    });
  });
});
