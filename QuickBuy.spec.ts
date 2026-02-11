import { test, expect, Page } from '@playwright/test';
import { QuickbuyAssets as MyPage, QuickbuyAssets } from '../Indodax/data/quickbuy_assets';
const url = 'https://indodax.com/quick_buy';

test.beforeEach(async ({ page }) => {
 
  await page.goto(url);
  await page.waitForTimeout(6000);
  const cobaBtn = page.getByRole('button', { name: 'Coba Sekarang' });
  if (await cobaBtn.isVisible()) {
    await cobaBtn.click();
  }

  const lewatiBtn = page.getByRole('button', { name: 'Lewati' });
  if (await lewatiBtn.isVisible()) {
    await lewatiBtn.click();
  } 
});

test('Verify amount is shown correctly', async ({ page }) => {
  const quickbuy = new MyPage(page);
  await page.goto(url); 
  await quickbuy.Button100.waitFor({state: 'visible'})
  await quickbuy.Button100.click();
  const amountshow = page.getByRole('textbox', { name: 'Nominal Pembelian' });
  await expect(amountshow).toBeVisible();
  await expect(amountshow).toBeDisabled();
  await expect(amountshow).toHaveValue('100.000');
  await quickbuy.Button250.click();
  await expect(amountshow).toHaveValue('250.000');
  await quickbuy.Button500.click();
  await expect(amountshow).toHaveValue('500.000');
  await quickbuy.Button1000. click();
  await expect(amountshow).toHaveValue('1.000.000');  
});

async function getUsdtPrice(page: Page) {
  const priceLine = page.getByText(/IDR.*Nominal Pembelian/);
  await expect(priceLine).toBeVisible();
  const text = await priceLine.innerText();
  const match = text.match(/([\d.]+)\s*IDR/);
  return Number(match![1].replace('.', ''));
}

test('Calculate USDT price ', async ({ page }) => {
  await page.waitForTimeout(5000);
  const getPrice = await getUsdtPrice(page);
  console.log('FIRST PRICE:', getPrice);

  const calculatedPrice =Number((1000000 / getPrice) * 100) / 100;
  const formatted = calculatedPrice.toFixed(8).replace('.', ',');
  console.log('CALCULATED PRICE:', formatted);

  await page.getByRole('button', { name: '1.000.000' }).click();
  expect(await page.getByRole('textbox', { name: 'Total Aset' }).inputValue()).toBe(formatted);
  console.log('DISPLAYED PRICE:', formatted);


});