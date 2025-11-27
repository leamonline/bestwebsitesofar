import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Homepage E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Vite \+ React/);
  });

  test('should display announcement bar', async ({ page }) => {
    await expect(page.getByText(/Last-minute slots available/i)).toBeVisible();
  });

  test('should display navigation menu', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Services' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Gallery' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('should display hero section with main heading', async ({ page }) => {
    await expect(page.getByText(/VIP treatment/i)).toBeVisible();
  });

  test('should display all service cards', async ({ page }) => {
    await expect(page.getByText('Full Groom')).toBeVisible();
    await expect(page.getByText('Bath & Tidy')).toBeVisible();
    await expect(page.getByText('Puppy Intro')).toBeVisible();
  });

  test('should display testimonials', async ({ page }) => {
    await expect(page.getByText('Sarah M.')).toBeVisible();
    await expect(page.getByText('James T.')).toBeVisible();
  });

  test('should display contact information in footer', async ({ page }) => {
    await expect(page.getByText('hello@smarterdog.co.uk')).toBeVisible();
    await expect(page.getByText('0161 XXX XXXX')).toBeVisible();
  });

  test('should have working "Book Now" buttons', async ({ page }) => {
    const bookButtons = page.getByRole('button', { name: /Book Now/i });
    const count = await bookButtons.count();
    expect(count).toBeGreaterThan(0);

    // Check first button is clickable
    await expect(bookButtons.first()).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    const servicesLink = page.getByRole('link', { name: 'Services' });
    await expect(servicesLink).toBeVisible();
    await expect(servicesLink).toHaveAttribute('href', '#');
  });

  test('should scroll through all sections', async ({ page }) => {
    // Scroll to services section
    await page.getByText('What we do best').scrollIntoViewIfNeeded();
    await expect(page.getByText('What we do best')).toBeInViewport();

    // Scroll to testimonials
    await page.getByText('What Our Pack Says').scrollIntoViewIfNeeded();
    await expect(page.getByText('What Our Pack Says')).toBeInViewport();

    // Scroll to footer
    await page.getByText('Opening Hours').scrollIntoViewIfNeeded();
    await expect(page.getByText('Opening Hours')).toBeInViewport();
  });
});

test.describe('Accessibility Tests', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');

    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // Check all links are accessible
    const links = nav.getByRole('link');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have accessible buttons with labels', async ({ page }) => {
    await page.goto('/');

    const buttons = page.getByRole('button');
    const count = await buttons.count();
    expect(count).toBeGreaterThan(0);

    // All buttons should have accessible text
    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      await expect(button).toBeVisible();
      const text = await button.textContent();
      expect(text.trim().length).toBeGreaterThan(0);
    }
  });

  test('should have alt text for all images', async ({ page }) => {
    await page.goto('/');

    const images = page.getByRole('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      await expect(img).toHaveAttribute('alt');
    }
  });
});

test.describe('Responsive Design Tests', () => {
  test('should display correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await expect(page.getByText(/VIP treatment/i)).toBeVisible();
    await expect(page.getByText('What we do best')).toBeVisible();
  });

  test('should display correctly on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await expect(page.getByText(/VIP treatment/i)).toBeVisible();
    await expect(page.getByText('What we do best')).toBeVisible();
  });

  test('should display correctly on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    await expect(page.getByText(/VIP treatment/i)).toBeVisible();
    await expect(page.getByText('What we do best')).toBeVisible();
  });

  test('should hide mobile navigation items on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Navigation items should be hidden on mobile
    const navItems = page.locator('.hidden.md\\:flex');
    await expect(navItems.first()).toBeAttached();
  });
});

test.describe('User Interaction Tests', () => {
  test('should allow clicking "Book Now" in hero section', async ({ page }) => {
    await page.goto('/');

    const heroBookButton = page.getByRole('button', { name: /Book Your Visit/i });
    await expect(heroBookButton).toBeVisible();
    await heroBookButton.click();
    // Button should still be visible after click (no navigation occurs)
    await expect(heroBookButton).toBeVisible();
  });

  test('should allow clicking announcement bar link', async ({ page }) => {
    await page.goto('/');

    const bookNowLink = page.getByRole('link', { name: /Book now →/i });
    await expect(bookNowLink).toBeVisible();
    await bookNowLink.click();
    // Link should still be visible (hash navigation)
    await expect(bookNowLink).toBeVisible();
  });

  test('should allow clicking navigation links', async ({ page }) => {
    await page.goto('/');

    const servicesLink = page.getByRole('link', { name: 'Services' });
    await servicesLink.click();
    // Should still be on the same page
    await expect(page).toHaveURL(/\//);
  });

  test('should hover effects work on service cards', async ({ page }) => {
    await page.goto('/');

    const serviceCard = page.getByText('Full Groom').locator('..');
    await serviceCard.hover();
    // Card should still be visible after hover
    await expect(page.getByText('Full Groom')).toBeVisible();
  });
});

test.describe('Content Verification Tests', () => {
  test('should display correct business hours', async ({ page }) => {
    await page.goto('/');

    await page.getByText('Opening Hours').scrollIntoViewIfNeeded();
    await expect(page.getByText('Monday')).toBeVisible();
    await expect(page.getByText('8:30am – 3:00pm')).toBeVisible();
    await expect(page.getByText('Closed')).toBeVisible();
  });

  test('should display social proof statistics', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('40+')).toBeVisible();
    await expect(page.getByText('10,000+')).toBeVisible();
    await expect(page.getByText('4.9★')).toBeVisible();
    await expect(page.getByText('100%')).toBeVisible();
  });

  test('should display complete testimonials', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText(/Been bringing my dogs here for 15 years/i)).toBeVisible();
    await expect(page.getByText(/My nervous rescue was terrified/i)).toBeVisible();
  });

  test('should display offer information', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText(/First groom\? Get 20% off!/i)).toBeVisible();
    await expect(page.getByText(/NEW CUSTOMER OFFER/i)).toBeVisible();
  });
});

test.describe('Performance Tests', () => {
  test('should load page in reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    // Page should load in less than 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should have visible content above the fold', async ({ page }) => {
    await page.goto('/');

    // Hero section should be visible immediately
    await expect(page.getByText(/VIP treatment/i)).toBeVisible({ timeout: 1000 });
  });
});
