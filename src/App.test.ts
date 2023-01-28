import { test, expect } from './baseFixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('should be renderred', async ({ page }) => {
  await expect(page.getByText('Vite + React')).toBeVisible();
  await page.getByRole('button').click()
});
