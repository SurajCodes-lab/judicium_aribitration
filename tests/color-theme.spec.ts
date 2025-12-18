import { test, expect } from '@playwright/test';

// Expected color values from the theme
const COLORS = {
  goldPrimary: 'rgb(212, 175, 55)', // #D4AF37
  goldSecondary: 'rgb(201, 160, 64)', // #C9A040
  bgDark: 'rgb(26, 26, 26)', // #1A1A1A
  bgAltDark: 'rgb(34, 34, 34)', // #222222
  foreground: 'rgb(245, 245, 245)', // #F5F5F5
};

// Helper to convert rgb to hex
function rgbToHex(rgb: string): string {
  const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) return rgb;
  const r = parseInt(match[1]).toString(16).padStart(2, '0');
  const g = parseInt(match[2]).toString(16).padStart(2, '0');
  const b = parseInt(match[3]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`.toUpperCase();
}

test.describe('Color Theme Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('JUDICIUM heading should use gold primary color', async ({ page }) => {
    const heading = page.locator('h1:has-text("JUDICIUM")');
    await expect(heading).toBeVisible();

    const color = await heading.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });

    console.log(`JUDICIUM heading color: ${color} (${rgbToHex(color)})`);
    console.log(`Expected: ${COLORS.goldPrimary} (#D4AF37)`);

    // Check if it's the gold primary color
    expect(color).toBe(COLORS.goldPrimary);
  });

  test('ARBITRATION subheading should use gold secondary color', async ({ page }) => {
    const subheading = page.locator('h2:has-text("ARBITRATION")');
    await expect(subheading).toBeVisible();

    const color = await subheading.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });

    console.log(`ARBITRATION subheading color: ${color} (${rgbToHex(color)})`);
    console.log(`Expected: ${COLORS.goldSecondary} (#C9A040)`);

    expect(color).toBe(COLORS.goldSecondary);
  });

  test('Stat numbers should use gold primary color', async ({ page }) => {
    const stats = page.locator('.text-gold-primary').first();
    await expect(stats).toBeVisible();

    const color = await stats.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });

    console.log(`Stats color: ${color} (${rgbToHex(color)})`);

    expect(color).toBe(COLORS.goldPrimary);
  });

  test('Body/main content should have dark background', async ({ page }) => {
    const main = page.locator('main');

    const bgColor = await main.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    console.log(`Main background: ${bgColor}`);

    // Background should be dark (close to #1A1A1A or transparent)
    const isValid = bgColor === COLORS.bgDark ||
                   bgColor === 'rgba(0, 0, 0, 0)' ||
                   bgColor.includes('26, 26, 26');
    expect(isValid).toBeTruthy();
  });

  test('All gold-primary elements have correct color', async ({ page }) => {
    const goldElements = page.locator('.text-gold-primary');
    const count = await goldElements.count();

    console.log(`Found ${count} elements with text-gold-primary class`);

    for (let i = 0; i < Math.min(count, 5); i++) {
      const el = goldElements.nth(i);
      const color = await el.evaluate((e) => window.getComputedStyle(e).color);
      console.log(`Element ${i + 1} color: ${color}`);
      expect(color).toBe(COLORS.goldPrimary);
    }
  });

  test('All gold-secondary elements have correct color', async ({ page }) => {
    const goldElements = page.locator('.text-gold-secondary');
    const count = await goldElements.count();

    console.log(`Found ${count} elements with text-gold-secondary class`);

    for (let i = 0; i < Math.min(count, 5); i++) {
      const el = goldElements.nth(i);
      const color = await el.evaluate((e) => window.getComputedStyle(e).color);
      console.log(`Element ${i + 1} color: ${color}`);
      expect(color).toBe(COLORS.goldSecondary);
    }
  });

  test('CTA buttons have correct styling', async ({ page }) => {
    const primaryBtn = page.locator('a:has-text("Explore Our Services")');
    await expect(primaryBtn).toBeVisible();

    const bgColor = await primaryBtn.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    const textColor = await primaryBtn.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });

    console.log(`Primary button - BG: ${bgColor}, Text: ${textColor}`);

    // Button should have gold background or border
    const hasGoldStyling = bgColor.includes('212, 175, 55') ||
                          bgColor.includes('201, 160, 64');
    expect(hasGoldStyling).toBeTruthy();
  });

});

test.describe('Color Consistency Across Pages', () => {

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Contact', path: '/contact' },
  ];

  for (const pg of pages) {
    test(`${pg.name} page should have consistent color theme`, async ({ page }) => {
      await page.goto(pg.path);
      await page.waitForLoadState('networkidle');

      // Check for gold primary elements
      const goldPrimaryElements = page.locator('.text-gold-primary');
      const goldPrimaryCount = await goldPrimaryElements.count();

      console.log(`${pg.name}: ${goldPrimaryCount} gold-primary elements`);

      if (goldPrimaryCount > 0) {
        const firstColor = await goldPrimaryElements.first().evaluate((el) => {
          return window.getComputedStyle(el).color;
        });
        expect(firstColor).toBe(COLORS.goldPrimary);
      }

      // Check for gold secondary elements
      const goldSecondaryElements = page.locator('.text-gold-secondary');
      const goldSecondaryCount = await goldSecondaryElements.count();

      console.log(`${pg.name}: ${goldSecondaryCount} gold-secondary elements`);

      if (goldSecondaryCount > 0) {
        const firstColor = await goldSecondaryElements.first().evaluate((el) => {
          return window.getComputedStyle(el).color;
        });
        expect(firstColor).toBe(COLORS.goldSecondary);
      }

      // Take screenshot for visual verification
      await page.screenshot({
        path: `./test-results/color-${pg.name.toLowerCase().replace(' ', '-')}.png`,
      });
    });
  }

});

test.describe('Contrast & Accessibility Tests', () => {

  test('Text should have sufficient contrast against background', async ({ page }) => {
    await page.goto('/');

    // Get hero text color and background
    const heroSection = page.locator('section').first();

    const styles = await heroSection.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        bg: computed.backgroundColor,
        color: computed.color,
      };
    });

    console.log('Hero section styles:', styles);

    // Visual check - take screenshot
    await page.screenshot({
      path: './test-results/contrast-check.png',
    });
  });

  test('Links should be distinguishable', async ({ page }) => {
    await page.goto('/');

    const links = page.locator('a');
    const linkCount = await links.count();

    console.log(`Found ${linkCount} links on the page`);

    // Check that links have proper styling
    for (let i = 0; i < Math.min(linkCount, 5); i++) {
      const link = links.nth(i);
      const isVisible = await link.isVisible();
      if (isVisible) {
        const styles = await link.evaluate((el) => ({
          color: window.getComputedStyle(el).color,
          textDecoration: window.getComputedStyle(el).textDecoration,
        }));
        console.log(`Link ${i + 1}: color=${styles.color}`);
      }
    }
  });

});
