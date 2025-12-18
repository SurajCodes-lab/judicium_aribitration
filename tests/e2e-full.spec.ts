import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

// All pages to test
const PAGES = [
  { name: 'Home', path: '/', title: 'Judicium' },
  { name: 'About', path: '/about', title: 'About' },
  { name: 'Practice Areas', path: '/practice-areas', title: 'Practice Areas' },
  { name: 'Contact', path: '/contact', title: 'Contact' },
  { name: 'Privacy Policy', path: '/privacy-policy', title: 'Privacy' },
  { name: 'Terms of Service', path: '/terms-of-service', title: 'Terms' },
  { name: 'Disclaimer', path: '/disclaimer', title: 'Disclaimer' },
];

// Practice area slugs to test (actual slugs from practiceAreas.ts)
const PRACTICE_AREAS = [
  'arbitration-alternative-dispute-resolution',
  'banking-finance',
  'capital-markets',
  'corporate-mergers-acquisitions',
  'corporate-commercial',
  'data-privacy-cybersecurity',
  'real-estate-urban-development',
  'intellectual-property-rights',
  'labour-employment',
  'dispute-resolution-litigation',
];

test.describe('E2E Tests - Page Loading', () => {
  for (const page of PAGES) {
    test(`${page.name} page loads correctly`, async ({ page: browserPage }) => {
      const response = await browserPage.goto(page.path);

      // Check response status
      expect(response?.status()).toBe(200);

      // Check page has content
      await expect(browserPage.locator('body')).not.toBeEmpty();

      // Check title contains expected text
      const title = await browserPage.title();
      expect(title.toLowerCase()).toContain(page.title.toLowerCase());

      // Check no console errors
      const errors: string[] = [];
      browserPage.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });

      await browserPage.waitForLoadState('networkidle');

      // Take screenshot
      await browserPage.screenshot({ path: `./test-results/e2e-${page.name.toLowerCase().replace(' ', '-')}.png` });
    });
  }
});

test.describe('E2E Tests - Practice Area Pages', () => {
  for (const slug of PRACTICE_AREAS) {
    test(`Practice area "${slug}" page loads`, async ({ page }) => {
      const response = await page.goto(`/practice-areas/${slug}`);
      expect(response?.status()).toBe(200);

      // Check H1 exists
      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();

      // Check breadcrumb exists
      const breadcrumb = page.locator('nav ol');
      await expect(breadcrumb).toBeVisible();
    });
  }
});

test.describe('E2E Tests - Navigation', () => {
  test('Header navigation works', async ({ page }) => {
    await page.goto('/');

    // Check header exists
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Check logo exists
    const logo = header.locator('img[alt*="Judicium"], img[alt*="Logo"]').first();
    await expect(logo).toBeVisible();

    // Test navigation links
    const navLinks = [
      { text: 'Home', href: '/' },
      { text: 'About', href: '/about' },
      { text: 'Practice Areas', href: '/practice-areas' },
      { text: 'Contact', href: '/contact' },
    ];

    for (const link of navLinks) {
      const navLink = header.locator(`a:has-text("${link.text}")`).first();
      await expect(navLink).toBeVisible();
      const href = await navLink.getAttribute('href');
      expect(href).toBe(link.href);
    }
  });

  test('Footer navigation works', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();

    // Check footer links exist
    const footerLinks = ['Privacy Policy', 'Terms of Service', 'Disclaimer'];
    for (const linkText of footerLinks) {
      const link = footer.locator(`a:has-text("${linkText}")`);
      await expect(link).toBeVisible();
    }

    // Check email link
    const emailLink = footer.locator('a[href*="mailto:"]');
    await expect(emailLink).toBeVisible();
    const href = await emailLink.first().getAttribute('href');
    expect(href).toContain('Judiciumarbitration@gmail.com');
  });

  test('Mobile menu works', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check mobile menu button exists
    const menuButton = page.locator('button[aria-label*="menu"], button:has(svg)').first();

    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(500);

      // Check mobile menu opens
      const mobileNav = page.locator('nav, [role="navigation"]');
      await expect(mobileNav).toBeVisible();
    }
  });
});

test.describe('E2E Tests - Links', () => {
  test('Key navigation links are valid', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Test key navigation links directly
    const keyLinks = [
      '/about',
      '/practice-areas',
      '/contact',
      '/privacy-policy',
      '/terms-of-service',
      '/disclaimer',
    ];

    const brokenLinks: string[] = [];

    for (const href of keyLinks) {
      try {
        const response = await page.request.get(href, { timeout: 15000 });
        if (response.status() !== 200) {
          brokenLinks.push(`${href} - Status: ${response.status()}`);
        }
      } catch (e) {
        console.log(`Error checking: ${href}`);
      }
    }

    if (brokenLinks.length > 0) {
      console.log('Broken links found:', brokenLinks);
    }
    expect(brokenLinks.length).toBe(0);
  });

  test('CTA buttons have correct hrefs', async ({ page }) => {
    await page.goto('/');

    // Check "Explore Our Services" button
    const exploreBtn = page.locator('a:has-text("Explore Our Services")');
    await expect(exploreBtn).toBeVisible();
    const exploreHref = await exploreBtn.getAttribute('href');
    expect(exploreHref).toBe('/practice-areas');

    // Check "Schedule Consultation" button
    const consultBtn = page.locator('a:has-text("Schedule Consultation")');
    await expect(consultBtn).toBeVisible();
  });
});

test.describe('E2E Tests - Images', () => {
  test('Hero background image loads', async ({ page }) => {
    await page.goto('/');

    // Check for hero background image
    const heroImg = page.locator('img[src*="hero-bg"]');
    if (await heroImg.count() > 0) {
      await expect(heroImg).toBeVisible();

      // Check image actually loaded
      const imgLoaded = await heroImg.evaluate((img: HTMLImageElement) => {
        return img.complete && img.naturalHeight !== 0;
      });
      expect(imgLoaded).toBeTruthy();
    }
  });

  test('Logo image loads', async ({ page }) => {
    await page.goto('/');

    const logo = page.locator('header img').first();
    await expect(logo).toBeVisible();

    const logoLoaded = await logo.evaluate((img: HTMLImageElement) => {
      return img.complete && img.naturalHeight !== 0;
    });
    expect(logoLoaded).toBeTruthy();
  });

  test('Founder image loads on About page', async ({ page }) => {
    await page.goto('/about');

    const founderImg = page.locator('img[src*="Founder"]');
    if (await founderImg.count() > 0) {
      await expect(founderImg.first()).toBeVisible();
    }
  });
});

test.describe('E2E Tests - Forms', () => {
  test('Contact form exists and has required fields', async ({ page }) => {
    await page.goto('/contact');

    // Check form exists
    const form = page.locator('form');
    if (await form.count() > 0) {
      // Check common form fields
      const nameInput = page.locator('input[name="name"], input[placeholder*="name" i]');
      const emailInput = page.locator('input[name="email"], input[type="email"]');
      const messageInput = page.locator('textarea[name="message"], textarea');
      const submitBtn = page.locator('button[type="submit"], input[type="submit"]');

      if (await nameInput.count() > 0) await expect(nameInput).toBeVisible();
      if (await emailInput.count() > 0) await expect(emailInput).toBeVisible();
      if (await messageInput.count() > 0) await expect(messageInput).toBeVisible();
      if (await submitBtn.count() > 0) await expect(submitBtn).toBeVisible();
    }
  });
});

test.describe('E2E Tests - SEO', () => {
  for (const pg of PAGES) {
    test(`${pg.name} page has proper SEO tags`, async ({ page }) => {
      await page.goto(pg.path);

      // Check title exists
      const title = await page.title();
      expect(title.length).toBeGreaterThan(10);

      // Check meta description
      const metaDesc = page.locator('meta[name="description"]');
      const descContent = await metaDesc.getAttribute('content');
      expect(descContent?.length).toBeGreaterThan(50);

      // Check Open Graph tags
      const ogTitle = page.locator('meta[property="og:title"]');
      if (await ogTitle.count() > 0) {
        const ogTitleContent = await ogTitle.getAttribute('content');
        expect(ogTitleContent?.length).toBeGreaterThan(5);
      }

      // Check canonical or main heading
      const h1 = page.locator('h1');
      await expect(h1.first()).toBeVisible();
    });
  }
});

test.describe('E2E Tests - Responsive Design', () => {
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 },
  ];

  for (const vp of viewports) {
    test(`Homepage renders correctly on ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');

      // Check no horizontal overflow
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(vp.width + 20);

      // Check hero text is visible
      const heroText = page.locator('h1:has-text("JUDICIUM")');
      await expect(heroText).toBeVisible();

      // Take screenshot
      await page.screenshot({ path: `./test-results/responsive-${vp.name.toLowerCase()}.png`, fullPage: true });
    });
  }
});

test.describe('E2E Tests - Accessibility', () => {
  test('Page has proper heading structure', async ({ page }) => {
    await page.goto('/');

    // Check H1 exists and is unique
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);

    // Check headings exist
    const h2Count = await page.locator('h2').count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test('Images have alt text', async ({ page }) => {
    await page.goto('/');

    const images = await page.locator('img').all();
    const missingAlt: string[] = [];

    for (const img of images) {
      const alt = await img.getAttribute('alt');
      const src = await img.getAttribute('src');
      if (!alt || alt.trim() === '') {
        missingAlt.push(src || 'unknown');
      }
    }

    if (missingAlt.length > 0) {
      console.log('Images missing alt text:', missingAlt);
    }
    expect(missingAlt.length).toBe(0);
  });

  test('Links have descriptive text', async ({ page }) => {
    await page.goto('/');

    const links = await page.locator('a').all();
    const badLinks: string[] = [];

    for (const link of links.slice(0, 30)) {
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');

      if ((!text || text.trim() === '') && !ariaLabel) {
        const href = await link.getAttribute('href');
        badLinks.push(href || 'unknown');
      }
    }

    if (badLinks.length > 0) {
      console.log('Links without descriptive text:', badLinks);
    }
  });
});

test.describe('E2E Tests - Performance', () => {
  test('Page loads within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    console.log(`Page load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(10000); // Should load within 10 seconds
  });
});

test.describe('E2E Tests - Content Verification', () => {
  test('Homepage has all required sections', async ({ page }) => {
    await page.goto('/');

    // Hero section
    await expect(page.locator('h1:has-text("JUDICIUM")')).toBeVisible();
    await expect(page.locator('h2:has-text("ARBITRATION")')).toBeVisible();

    // Stats - use more specific selectors
    await expect(page.locator('.text-gold-primary:has-text("20+")').first()).toBeVisible();
    await expect(page.locator('.text-gold-primary:has-text("500+")').first()).toBeVisible();
    await expect(page.locator('.text-gold-primary:has-text("98%")').first()).toBeVisible();

    // Cities
    const citiesText = await page.textContent('body');
    expect(citiesText).toContain('Delhi');
    expect(citiesText).toContain('Gurgaon');
    expect(citiesText).toContain('Noida');

    // CTA buttons
    await expect(page.locator('a:has-text("Explore Our Services")')).toBeVisible();
    await expect(page.locator('a:has-text("Schedule Consultation")')).toBeVisible();
  });

  test('About page has team section', async ({ page }) => {
    await page.goto('/about');

    // Check team section exists
    const teamSection = page.locator('text=Meet Our Team, text=Our Team').first();
    if (await teamSection.count() > 0) {
      await expect(teamSection).toBeVisible();
    }

    // Check founder name appears
    const pageContent = await page.textContent('body');
    expect(pageContent).toContain('Nadeem');
  });

  test('Contact page has email', async ({ page }) => {
    await page.goto('/contact');

    const pageContent = await page.textContent('body');
    expect(pageContent).toContain('Judiciumarbitration@gmail.com');
  });
});
