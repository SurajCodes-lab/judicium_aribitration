import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    // Small Laptop (1366x768)
    {
      name: 'Small Laptop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1366, height: 768 },
      },
    },
    // Medium Laptop (1500x1000) - The size you mentioned
    {
      name: 'Medium Laptop 1500x1000',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1500, height: 1000 },
      },
    },
    // Standard Laptop (1920x1080)
    {
      name: 'Full HD Laptop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    // Large Monitor (2560x1440)
    {
      name: 'QHD Monitor',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 2560, height: 1440 },
      },
    },
    // 4K / 50 inch TV (3840x2160)
    {
      name: '4K TV 50inch',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 3840, height: 2160 },
      },
    },
    // Mobile
    {
      name: 'Mobile',
      use: {
        ...devices['iPhone 14'],
      },
    },
    // Tablet
    {
      name: 'Tablet',
      use: {
        ...devices['iPad Pro 11'],
      },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
