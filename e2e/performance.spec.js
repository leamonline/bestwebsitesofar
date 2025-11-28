import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('Core Web Vitals - Largest Contentful Paint (LCP)', async ({ page }) => {
    await page.goto('/');

    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.renderTime || lastEntry.loadTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Fallback timeout
        setTimeout(() => resolve(null), 5000);
      });
    });

    console.log(`LCP: ${lcp}ms`);
    // LCP should be under 2.5 seconds (2500ms) for good performance
    expect(lcp).toBeLessThan(2500);
  });

  test('Core Web Vitals - First Input Delay (FID) simulation', async ({ page }) => {
    await page.goto('/');

    // Simulate user interaction
    const startTime = Date.now();
    await page.click('button >> nth=0');
    const endTime = Date.now();
    const interactionTime = endTime - startTime;

    console.log(`Interaction time: ${interactionTime}ms`);
    // Should respond to interactions quickly (under 100ms is good)
    expect(interactionTime).toBeLessThan(100);
  });

  test('Core Web Vitals - Cumulative Layout Shift (CLS)', async ({ page }) => {
    await page.goto('/');

    // Wait for page to stabilize
    await page.waitForLoadState('networkidle');

    const cls = await page.evaluate(() => {
      return new Promise((resolve) => {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          resolve(clsValue);
        }).observe({ entryTypes: ['layout-shift'] });

        // Fallback timeout
        setTimeout(() => resolve(clsValue), 3000);
      });
    });

    console.log(`CLS: ${cls}`);
    // CLS should be under 0.1 for good performance
    expect(cls).toBeLessThan(0.1);
  });

  test('Time to Interactive (TTI)', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Ensure interactive elements are ready
    await page.waitForSelector('button', { state: 'visible' });
    const tti = Date.now() - startTime;

    console.log(`TTI: ${tti}ms`);
    // TTI should be under 3.8 seconds for good performance
    expect(tti).toBeLessThan(3800);
  });

  test('First Contentful Paint (FCP)', async ({ page }) => {
    await page.goto('/');

    const fcp = await page.evaluate(() => {
      return performance.getEntriesByType('paint')
        .find(entry => entry.name === 'first-contentful-paint')?.startTime;
    });

    console.log(`FCP: ${fcp}ms`);
    // FCP should be under 1.8 seconds for good performance
    expect(fcp).toBeLessThan(1800);
  });

  test('Total Page Weight', async ({ page }) => {
    await page.goto('/');

    // Get all network requests
    const resources = await page.evaluate(() => {
      return performance.getEntriesByType('resource').reduce((total, resource) => {
        return total + (resource.transferSize || 0);
      }, 0);
    });

    const totalMB = resources / (1024 * 1024);
    console.log(`Total page weight: ${totalMB.toFixed(2)}MB`);

    // Total page size should be reasonable (under 3MB is good)
    expect(totalMB).toBeLessThan(3);
  });

  test('Number of HTTP Requests', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const requestCount = await page.evaluate(() => {
      return performance.getEntriesByType('resource').length;
    });

    console.log(`Number of requests: ${requestCount}`);
    // Should minimize number of requests (under 50 is good)
    expect(requestCount).toBeLessThan(50);
  });

  test('JavaScript Bundle Size', async ({ page }) => {
    await page.goto('/');

    const jsSize = await page.evaluate(() => {
      return performance.getEntriesByType('resource')
        .filter(resource => resource.name.includes('.js'))
        .reduce((total, resource) => total + (resource.transferSize || 0), 0);
    });

    const jsMB = jsSize / (1024 * 1024);
    console.log(`JS bundle size: ${jsMB.toFixed(2)}MB`);

    // JS bundle should be under 500KB for good performance
    expect(jsMB).toBeLessThan(0.5);
  });

  test('CSS Bundle Size', async ({ page }) => {
    await page.goto('/');

    const cssSize = await page.evaluate(() => {
      return performance.getEntriesByType('resource')
        .filter(resource => resource.name.includes('.css'))
        .reduce((total, resource) => total + (resource.transferSize || 0), 0);
    });

    const cssMB = cssSize / (1024 * 1024);
    console.log(`CSS bundle size: ${cssMB.toFixed(2)}MB`);

    // CSS bundle should be reasonable (under 100KB)
    expect(cssMB).toBeLessThan(0.1);
  });

  test('Image Optimization', async ({ page }) => {
    await page.goto('/');

    const imageData = await page.evaluate(() => {
      return performance.getEntriesByType('resource')
        .filter(resource => {
          return resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i);
        })
        .map(img => ({
          url: img.name,
          size: img.transferSize || 0
        }));
    });

    const totalImageSize = imageData.reduce((total, img) => total + img.size, 0);
    const totalImageMB = totalImageSize / (1024 * 1024);

    console.log(`Total image size: ${totalImageMB.toFixed(2)}MB`);
    console.log(`Number of images: ${imageData.length}`);

    // Check that individual images aren't too large
    const largeImages = imageData.filter(img => img.size > 200 * 1024); // Over 200KB
    if (largeImages.length > 0) {
      console.warn('Large images detected:', largeImages);
    }

    // Total image size should be reasonable
    expect(totalImageMB).toBeLessThan(2);
  });

  test('Memory Usage', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Get memory usage if available
    const memoryUsage = await page.evaluate(() => {
      if (performance.memory) {
        return {
          usedJSHeapSize: performance.memory.usedJSHeapSize / (1024 * 1024),
          totalJSHeapSize: performance.memory.totalJSHeapSize / (1024 * 1024),
          jsHeapSizeLimit: performance.memory.jsHeapSizeLimit / (1024 * 1024)
        };
      }
      return null;
    });

    if (memoryUsage) {
      console.log(`Memory usage: ${JSON.stringify(memoryUsage, null, 2)}MB`);
      // Used heap should be reasonable
      expect(memoryUsage.usedJSHeapSize).toBeLessThan(50);
    }
  });

  test('Scroll Performance', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const startTime = Date.now();

    // Scroll through the page
    await page.evaluate(() => {
      return new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= document.body.scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 50);
      });
    });

    const scrollTime = Date.now() - startTime;
    console.log(`Scroll time: ${scrollTime}ms`);

    // Scrolling should be smooth and not take too long
    expect(scrollTime).toBeLessThan(5000);
  });

  test('Animation Performance', async ({ page }) => {
    await page.goto('/');

    // Measure FPS during animation
    const fps = await page.evaluate(() => {
      return new Promise((resolve) => {
        let frames = 0;
        const startTime = performance.now();
        const duration = 1000; // 1 second

        function countFrame() {
          frames++;
          if (performance.now() - startTime < duration) {
            requestAnimationFrame(countFrame);
          } else {
            resolve(frames);
          }
        }

        requestAnimationFrame(countFrame);
      });
    });

    console.log(`FPS: ${fps}`);
    // Should maintain at least 30 FPS, ideally 60
    expect(fps).toBeGreaterThan(30);
  });
});

test.describe('Performance - Lighthouse Metrics', () => {
  test('Run Lighthouse audit', async ({ page }) => {
    // This is a placeholder for Lighthouse integration
    // In a real scenario, you would use @playwright/lighthouse or similar
    await page.goto('/');

    // Ensure page is loaded
    await page.waitForLoadState('networkidle');

    // Manual metrics check
    const metrics = await page.evaluate(() => ({
      domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
      load: performance.timing.loadEventEnd - performance.timing.navigationStart,
      ready: document.readyState
    }));

    console.log('Performance metrics:', metrics);

    expect(metrics.ready).toBe('complete');
    expect(metrics.domContentLoaded).toBeLessThan(2000);
    expect(metrics.load).toBeLessThan(3000);
  });
});
