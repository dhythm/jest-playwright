import { test } from './baseFixtures';

test.beforeEach(async ({ page }) => {
  // await page.goto("http://127.0.0.1:5173/")
  await page.goto("/")
})

test('should be renderred', async ({ page }) => {
  await page.waitForSelector(".App")
});

