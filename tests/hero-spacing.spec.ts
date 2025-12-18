import { test, expect } from '@playwright/test';

test.describe('Hero Section Spacing Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Hero section should have proper spacing on left and right', async ({ page, viewport }) => {
    // Get the hero content container
    const heroContent = page.locator('section').first().locator('div.relative.z-10');

    // Wait for hero to be visible
    await expect(heroContent).toBeVisible();

    // Get bounding box of hero content
    const heroBox = await heroContent.boundingBox();

    if (heroBox && viewport) {
      const leftGap = heroBox.x;
      const rightGap = viewport.width - (heroBox.x + heroBox.width);

      // Calculate gap percentage
      const leftGapPercent = (leftGap / viewport.width) * 100;
      const rightGapPercent = (rightGap / viewport.width) * 100;

      console.log(`Viewport: ${viewport.width}x${viewport.height}`);
      console.log(`Left gap: ${leftGap}px (${leftGapPercent.toFixed(1)}%)`);
      console.log(`Right gap: ${rightGap}px (${rightGapPercent.toFixed(1)}%)`);
      console.log(`Content width: ${heroBox.width}px`);

      // Assert gaps are reasonable (not more than 15% on each side)
      expect(leftGapPercent).toBeLessThan(15);
      expect(rightGapPercent).toBeLessThan(15);

      // Assert left and right gaps are roughly equal (centered)
      const gapDifference = Math.abs(leftGap - rightGap);
      expect(gapDifference).toBeLessThan(20); // Should be within 20px
    }

    // Take screenshot for visual verification
    await page.screenshot({
      path: `./test-results/hero-spacing-${viewport?.width}x${viewport?.height}.png`,
      fullPage: false
    });
  });

  test('Hero background image should not overlap header', async ({ page }) => {
    // Get header element
    const header = page.locator('header');
    await expect(header).toBeVisible();

    const headerBox = await header.boundingBox();

    // Get hero background container
    const heroBg = page.locator('section').first().locator('div.absolute').first();
    const heroBgBox = await heroBg.boundingBox();

    if (headerBox && heroBgBox) {
      console.log(`Header bottom: ${headerBox.y + headerBox.height}px`);
      console.log(`Hero bg top: ${heroBgBox.y}px`);

      // Hero background should start at or below header bottom
      expect(heroBgBox.y).toBeGreaterThanOrEqual(headerBox.y + headerBox.height - 5); // 5px tolerance
    }
  });

  test('JUDICIUM text should be visible and centered', async ({ page, viewport }) => {
    const judiciumText = page.locator('h1:has-text("JUDICIUM")');
    await expect(judiciumText).toBeVisible();

    const textBox = await judiciumText.boundingBox();

    if (textBox && viewport) {
      // Check if text is roughly centered
      const textCenter = textBox.x + (textBox.width / 2);
      const viewportCenter = viewport.width / 2;
      const centerOffset = Math.abs(textCenter - viewportCenter);

      console.log(`Text center: ${textCenter}px, Viewport center: ${viewportCenter}px, Offset: ${centerOffset}px`);

      // Text should be within 50px of center
      expect(centerOffset).toBeLessThan(50);
    }
  });

  test('Hero section should fill viewport height', async ({ page, viewport }) => {
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();

    const sectionBox = await heroSection.boundingBox();

    if (sectionBox && viewport) {
      console.log(`Hero height: ${sectionBox.height}px, Viewport height: ${viewport.height}px`);

      // Hero should be at least 90% of viewport height
      expect(sectionBox.height).toBeGreaterThanOrEqual(viewport.height * 0.9);
    }
  });

  test('Stats section should be visible and properly spaced', async ({ page }) => {
    // Check for the stats (20+, 500+, 98%)
    const yearsExp = page.locator('text=20+').first();
    const casesResolved = page.locator('text=500+').first();
    const successRate = page.locator('text=98%').first();

    await expect(yearsExp).toBeVisible();
    await expect(casesResolved).toBeVisible();
    await expect(successRate).toBeVisible();
  });

  test('CTA buttons should be visible', async ({ page }) => {
    const exploreBtn = page.locator('a:has-text("Explore Our Services")');
    const consultBtn = page.locator('a:has-text("Schedule Consultation")');

    await expect(exploreBtn).toBeVisible();
    await expect(consultBtn).toBeVisible();
  });

});

test.describe('Visual Regression Tests', () => {

  test('Take full page screenshots for all viewports', async ({ page, viewport }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Wait for any animations to complete
    await page.waitForTimeout(1000);

    // Take hero section screenshot
    await page.screenshot({
      path: `./test-results/homepage-${viewport?.width}x${viewport?.height}.png`,
      fullPage: false,
    });

    // Take full page screenshot
    await page.screenshot({
      path: `./test-results/homepage-full-${viewport?.width}x${viewport?.height}.png`,
      fullPage: true,
    });
  });

});

test.describe('Responsive Layout Tests', () => {

  const viewports = [
    { name: 'Small Laptop', width: 1366, height: 768 },
    { name: 'Medium 1500x1000', width: 1500, height: 1000 },
    { name: 'Full HD', width: 1920, height: 1080 },
    { name: 'QHD', width: 2560, height: 1440 },
    { name: '4K TV', width: 3840, height: 2160 },
  ];

  for (const vp of viewports) {
    test(`Layout check at ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Get hero content
      const heroContent = page.locator('section').first().locator('div.relative.z-10');
      const heroBox = await heroContent.boundingBox();

      if (heroBox) {
        const leftGap = heroBox.x;
        const rightGap = vp.width - (heroBox.x + heroBox.width);
        const contentWidthPercent = (heroBox.width / vp.width) * 100;

        console.log(`\n=== ${vp.name} (${vp.width}x${vp.height}) ===`);
        console.log(`Content width: ${heroBox.width}px (${contentWidthPercent.toFixed(1)}%)`);
        console.log(`Left gap: ${leftGap}px`);
        console.log(`Right gap: ${rightGap}px`);

        // Content should use at least 70% of viewport width
        expect(contentWidthPercent).toBeGreaterThan(70);

        // Gaps should be roughly equal (centered)
        expect(Math.abs(leftGap - rightGap)).toBeLessThan(30);
      }

      // Take screenshot
      await page.screenshot({
        path: `./test-results/responsive-${vp.width}x${vp.height}.png`,
      });
    });
  }

});
