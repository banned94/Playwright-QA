import { test, expect } from '@playwright/test';
import { QuickbuyAssets as MyPage } from './data/Indodax_assets';

const url = 'https://indodax.com/market';

test.beforeEach(async ({ page }) => {
  await page.goto(url);
  const myPage = new MyPage(page);
  await expect(myPage.CariKoin).toBeVisible();  
});

test('Search Coin', async ({ page }) => {
  const myPage = new MyPage(page);
  await myPage.CariKoin.fill('BTC');
  const count = await page.getByText(/BTC/i).count();
  expect(count).toBeGreaterThan(0);
});

test('Search Invalid Coin', async ({ page }) => {
  const myPage = new MyPage(page);
  await myPage.CariKoin.fill('ZZZ');
  await expect(
    page.getByText('Pencarian yang Anda cari tidak dapat ditemukan')
  ).toBeVisible();
});
