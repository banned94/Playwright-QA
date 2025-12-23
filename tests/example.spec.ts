import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://indodax.com/');

    // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/INDODAX/);
      });

      test('get started link', async ({ page }) => {
        await page.goto('https://indodax.com/');

          // Click the get started link.
            await page.getByRole('link', { name: 'Mulai Sekarang' }).click();

              // Expects page to have a heading with the name of Installation.
                await expect(page.getByRole('heading', { name: 'Daftar ke INDODAX' })).toBeVisible();
                });
                