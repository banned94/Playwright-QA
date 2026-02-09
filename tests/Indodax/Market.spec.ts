import { test, expect } from '@playwright/test';
const url = 'https://indodax.com/';

test('Verify Main Page', async ({ page }) => {
  await page.goto(url);
    // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/INDODAX/);
      });

test('Verify market page', async ({ page }) => {
  await page.goto(url);
          // Click Market link.
            await page.getByRole('link', { name: 'Market', exact: true }).click();
            // Verify Market page elements.
                await expect(page.getByRole('heading', { name: 'INDODAX Info' })).toBeVisible();
                await expect(page.locator('[id="list-coin-tab"]')).toBeVisible();
                await expect(page.locator('[id="category_FAVORITES"]')).toBeVisible();
                await expect(page.getByRole('textbox', { name: 'Cari Koin' })).toBeVisible();
 });  


