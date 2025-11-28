import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
  });

  test('full homepage visual snapshot', async ({ page }) => {
    // Take a full page screenshot
    await expect(page).toHaveScreenshot('homepage-full.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('hero section visual snapshot', async ({ page }) => {
    const heroSection = page.locator('section').first();
    await expect(heroSection).toHaveScreenshot('hero-section.png', {
      animations: 'disabled',
    });
  });

  test('navigation visual snapshot', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toHaveScreenshot('navigation.png', {
      animations: 'disabled',
    });
  });

  test('services section visual snapshot', async ({ page }) => {
    await page.getByText('What we do best').scrollIntoViewIfNeeded();
    const servicesSection = page.locator('section', { has: page.getByText('What we do best') });
    await expect(servicesSection).toHaveScreenshot('services-section.png', {
      animations: 'disabled',
    });
  });

  test('testimonials section visual snapshot', async ({ page }) => {
    await page.getByText('What Our Pack Says').scrollIntoViewIfNeeded();
    const testimonialsSection = page.locator('section', { has: page.getByText('What Our Pack Says') });
    await expect(testimonialsSection).toHaveScreenshot('testimonials-section.png', {
      animations: 'disabled',
    });
  });

  test('footer visual snapshot', async ({ page }) => {
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toHaveScreenshot('footer.png', {
      animations: 'disabled',
    });
  });

  test('mobile viewport visual snapshot', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('tablet viewport visual snapshot', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page).toHaveScreenshot('homepage-tablet.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('hover state on Book Now button', async ({ page }) => {
    const bookButton = page.getByRole('button', { name: /Book Your Visit/i });
    await bookButton.scrollIntoViewIfNeeded();
    await bookButton.hover();
    await expect(bookButton).toHaveScreenshot('book-button-hover.png', {
      animations: 'disabled',
    });
  });

  test('hover state on service cards', async ({ page }) => {
    await page.getByText('Full Groom').scrollIntoViewIfNeeded();
    const serviceCard = page.locator('div', { has: page.getByText('Full Groom') }).first();
    await serviceCard.hover();
    await expect(serviceCard).toHaveScreenshot('service-card-hover.png', {
      animations: 'disabled',
    });
  });
});

test.describe('Visual Regression - Dark Mode', () => {
  test.skip('homepage in dark mode', async ({ page }) => {
    // Skip for now - can be implemented when dark mode is added
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');
    await expect(page).toHaveScreenshot('homepage-dark-mode.png', {
      fullPage: true,
    });
  });
});

test.describe('Visual Regression - Print View', () => {
  test('print view of homepage', async ({ page }) => {
    await page.emulateMedia({ media: 'print' });
    await expect(page).toHaveScreenshot('homepage-print.png', {
      fullPage: true,
    });
  });
});
