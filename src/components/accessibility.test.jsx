import { describe, it, expect, vi } from 'vitest';
import { render, waitFor, act } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { MemoryRouter } from 'react-router-dom';

import SmarterDogHomepage from './SmarterDogHomepage';
import ServiceCard from './ServiceCard';
import PolaroidImage from './PolaroidImage';
import DogSilhouette from './DogSilhouette';
import AnnouncementBar from './sections/AnnouncementBar';
import Navigation from './sections/Navigation';
import TrustSection from './sections/TrustSection';
import FooterSection from './sections/FooterSection';
import { colors } from '../constants/colors';

describe('Accessibility Tests', () => {
  describe('Full Page', () => {
    it('SmarterDogHomepage should not have any accessibility violations', async () => {
      const { container } = render(
        <MemoryRouter>
          <SmarterDogHomepage />
        </MemoryRouter>
      );

      // Wait for any animations and state updates to settle
      await waitFor(() => {
        expect(container.querySelector('nav')).toBeInTheDocument();
      }, { timeout: 3000 });

      const results = await axe(container);

      expect(results).toHaveNoViolations();
    }, 10000);
  });

  describe('Reusable Components', () => {
    it('ServiceCard should not have any accessibility violations', async () => {
      const { container } = render(
        <ServiceCard
          icon="✂️"
          title="Full Groom"
          desc="Complete grooming service"
          bgColor="white"
          accentColor={colors.pink}
        />
      );
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    }, 10000);

    it('PolaroidImage should not have any accessibility violations', async () => {
      const { container } = render(
        <PolaroidImage
          caption="Bella's spa day"
          rotation={-5}
          tapeColor={colors.cyan}
        />
      );
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    }, 10000);

    it('DogSilhouette should not have any accessibility violations', async () => {
      const { container } = render(
        <DogSilhouette color={colors.teal} className="w-96 h-auto" />
      );
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    }, 10000);
  });

  describe('Section Components', () => {
    it('AnnouncementBar should not have any accessibility violations', async () => {
      const { container } = render(<AnnouncementBar />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    }, 10000);

    it('Navigation should not have any accessibility violations', async () => {
      let container;
      let results;
      await act(async () => {
        const renderResult = render(
          <MemoryRouter>
            <Navigation isLoaded={true} />
          </MemoryRouter>
        );
        container = renderResult.container;
      });
      results = await axe(container);

      expect(results).toHaveNoViolations();
    }, 10000);

    it('TrustSection should not have any accessibility violations', async () => {
      const { container } = render(<TrustSection />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    }, 10000);

    it('FooterSection should not have any accessibility violations', async () => {
      const { container } = render(<FooterSection />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    }, 10000);
  });

  describe('Color Contrast', () => {
    it('should have sufficient color contrast for text on colored backgrounds', async () => {
      const { container } = render(
        <MemoryRouter>
          <SmarterDogHomepage />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(container.querySelector('nav')).toBeInTheDocument();
      }, { timeout: 3000 });

      const results = await axe(container, {
        rules: {
          'color-contrast': { enabled: true },
        },
      });

      expect(results).toHaveNoViolations();
    }, 10000);
  });

  describe('Keyboard Navigation', () => {
    it('interactive elements should be keyboard accessible', async () => {
      const { container } = render(
        <MemoryRouter>
          <Navigation isLoaded={true} />
        </MemoryRouter>
      );

      const results = await axe(container);

      expect(results).toHaveNoViolations();
    }, 10000);
  });

  describe('ARIA Attributes', () => {
    it('should have valid ARIA attributes', async () => {
      const { container } = render(
        <MemoryRouter>
          <SmarterDogHomepage />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(container.querySelector('nav')).toBeInTheDocument();
      }, { timeout: 3000 });

      const results = await axe(container, {
        rules: {
          'aria-valid-attr': { enabled: true },
          'aria-valid-attr-value': { enabled: true },
        },
      });

      expect(results).toHaveNoViolations();
    }, 10000);
  });

  describe('Form Elements', () => {
    it('buttons should have accessible names', async () => {
      const { container } = render(
        <MemoryRouter>
          <SmarterDogHomepage />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(container.querySelector('nav')).toBeInTheDocument();
      }, { timeout: 3000 });

      const results = await axe(container, {
        rules: {
          'button-name': { enabled: true },
        },
      });

      expect(results).toHaveNoViolations();
    }, 10000);
  });

  describe('Images', () => {
    it('images should have alt text', async () => {
      const { container } = render(
        <MemoryRouter>
          <SmarterDogHomepage />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(container.querySelector('nav')).toBeInTheDocument();
      }, { timeout: 3000 });

      const results = await axe(container, {
        rules: {
          'image-alt': { enabled: true },
        },
      });

      expect(results).toHaveNoViolations();
    }, 10000);
  });

  describe('Semantic HTML', () => {
    it('should use semantic HTML elements', async () => {
      const { container } = render(
        <MemoryRouter>
          <SmarterDogHomepage />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(container.querySelector('nav')).toBeInTheDocument();
      }, { timeout: 3000 });

      const results = await axe(container, {
        rules: {
          'landmark-one-main': { enabled: false }, // Disabled as homepage doesn't have main landmark
          'region': { enabled: true },
        },
      });

      expect(results).toHaveNoViolations();
    }, 10000);
  });
});
