import { defineConfig, devices } from "@playwright/test";

export default defineConfig(
  {
    testDir: './tests',
    timeout: 30 * 1000,
    expect:
    {
      timeout: 5000,
    },
    retries: 1,
    reporter: 'html',
    workers: 3,
    fullyParallel: true,

    use:
    {
      ...devices['Desktop Chrome'],
      headless: false,
      screenshot: 'only-on-failure',
      video: 'off',
      trace: 'retain-on-failure'
    }

  }
)