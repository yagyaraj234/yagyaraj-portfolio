import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://127.0.0.1:31783",
    browserName: "chromium",
  },
  webServer: {
    command: "npm run start -- --hostname 127.0.0.1 --port 31783",
    url: "http://127.0.0.1:31783/rr",
    reuseExistingServer: false,
  },
})
