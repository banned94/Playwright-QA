import { test, expect } from '@playwright/test';

const url = 'https://indodax.com/market';

test.beforeEach(async ({ page }) => {
  await page.goto(url);
  await expect(
    page.getByRole('textbox', { name: 'Cari Koin' })
  ).toBeVisible();
});

test('Search Coin', async ({ page }) => {
  const searchBox = page.getByRole('textbox', { name: 'Cari Koin' });

  await searchBox.fill('');
  await searchBox.fill('BTC');

  const count = await page.getByText(/BTC/i).count();
  expect(count).toBeGreaterThan(0);
});

test('Search Invalid Coin', async ({ page }) => {
  const searchBox = page.getByRole('textbox', { name: 'Cari Koin' });

  await searchBox.fill('');
  await searchBox.fill('KKK');

  await expect(
    page.getByText('Pencarian yang Anda cari tidak dapat ditemukan')
  ).toBeVisible();
});
