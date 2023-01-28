import { test } from './baseFixtures';

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test('use Turquoise as a default background color', async ({ page }) => {
  await page.waitForSelector(".App")
});

