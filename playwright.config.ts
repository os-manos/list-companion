import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },

  projects: process.env.CI
    ? undefined
    : [
        {
          name: "firefox",
          use: { ...devices["Desktop Firefox"] },
        },

        {
          name: "webkit",
          use: { ...devices["Desktop Safari"] },
        },

        {
          name: "chromium",
          use: {
            browserName: "chromium",
            channel: "chrome", // Specifies the chrome
          },
        },
      ],

  webServer: {
    command: "pnpm build && pnpm start",
    port: 3000,
    env: { SERVICE_ENV: "test" },
    stdout: "pipe",
    stderr: "pipe",
  },
});
