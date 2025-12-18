import { test, expect } from '@playwright/test';

// Quick spacing check across all screen sizes
test.describe('Quick Spacing Check', () => {

  const viewports = [
    { name: 'Small Laptop', width: 1366, height: 768 },
    { name: 'Medium 1500x1000', width: 1500, height: 1000 },
    { name: 'Full HD', width: 1920, height: 1080 },
    { name: 'QHD', width: 2560, height: 1440 },
    { name: '4K TV', width: 3840, height: 2160 },
  ];

  test('Check hero spacing on all screen sizes', async ({ browser }) => {
    const results: any[] = [];

    for (const vp of viewports) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height }
      });
      const page = await context.newPage();

      await page.goto('http://localhost:3000');
      await page.waitForLoadState('networkidle');

      // Get hero content
      const heroContent = page.locator('section').first().locator('div.relative.z-10');
      const heroBox = await heroContent.boundingBox();

      if (heroBox) {
        const leftGap = heroBox.x;
        const rightGap = vp.width - (heroBox.x + heroBox.width);
        const contentWidthPercent = (heroBox.width / vp.width) * 100;

        results.push({
          viewport: `${vp.name} (${vp.width}x${vp.height})`,
          contentWidth: `${heroBox.width.toFixed(0)}px (${contentWidthPercent.toFixed(1)}%)`,
          leftGap: `${leftGap.toFixed(0)}px`,
          rightGap: `${rightGap.toFixed(0)}px`,
          status: contentWidthPercent > 70 ? 'PASS' : 'FAIL'
        });

        // Take screenshot
        await page.screenshot({
          path: `./test-results/spacing-${vp.width}x${vp.height}.png`,
        });
      }

      await context.close();
    }

    // Print results table
    console.log('\n========== SPACING TEST RESULTS ==========\n');
    console.table(results);
    console.log('\n==========================================\n');

    // All should pass
    for (const r of results) {
      expect(r.status).toBe('PASS');
    }
  });

});
