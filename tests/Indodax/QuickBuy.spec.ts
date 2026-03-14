import { test, expect, Page, Locator } from '@playwright/test';
import { QuickbuyAssets as MyPage } from './data/Indodax_assets';
const url = 'https://indodax.com/quick_buy';

let quickbuy: MyPage;
let estRecieved: Locator;

test.beforeEach(async ({ page }) => {
  quickbuy = new MyPage(page);
  estRecieved = quickbuy.EstRecieved;
  await page.goto(url);
});

test.beforeEach(async ({ page }) => {
  await page.goto(url);
  const quickbuy = new MyPage(page);
  const cobaBtn = quickbuy.ButtonCobaSekarang;
  if (await cobaBtn.isVisible) {
    await cobaBtn.click();
  }
  const lewatiBtn = quickbuy.ButtonLewati;
  if (await lewatiBtn.isVisible()) {
    await lewatiBtn.click();
  } 
});

test('Verify amount is shown correctly', async ({ page }) => {
  const quickbuy = new MyPage(page);
  await quickbuy.Button100.click();
  const amountshow = page.getByRole('textbox', { name: 'Nominal Pembelian' });
  await expect(amountshow).toBeVisible();
  await expect(amountshow).toBeDisabled();
  await expect(amountshow).toHaveValue('100.000');
  await quickbuy.Button250.click();
  await expect(amountshow).toHaveValue('250.000');
  await quickbuy.Button500.click();
  await expect(amountshow).toHaveValue('500.000');
  await quickbuy.Button1000.click();
  await expect(amountshow).toHaveValue('1.000.000');  
});

async function getUsdtPrice(page: Page) {
  const priceLine = page.getByText(/IDR.*Nominal Pembelian/);
  await expect(priceLine).toBeVisible();
  const text = await priceLine.innerText();
  const match = text.match(/([\d.]+)\s*IDR/);
  return Number(match![1].replace('.', ''));
}

test('Calculate USDT price 1.000.000 ', async ({ page }) => {
  const getPrice = await getUsdtPrice(page);
  const estRecieved = new MyPage(page).EstRecieved;
  console.log('FIRST PRICE:', getPrice); 
  const calculatedPrice = Number(((1000000 / getPrice) * 100) / 100);
  const formatted = (Math.floor(calculatedPrice * 1e8) / 1e8)
  .toFixed(8)
  .replace('.', ',');
  console.log('CALCULATED PRICE:', formatted);

  await page.getByRole('button', { name: '1.000.000' }).click();
  expect(await estRecieved.inputValue()).toBe(formatted);
  console.log('DISPLAYED PRICE:', await estRecieved.inputValue());
} );

test('Calculate USDT price 500.000 ', async ({ page }) => {
  const getPrice = await getUsdtPrice(page);
  console.log('FIRST PRICE:', getPrice); 
  const calculatedPrice = Number(((500000 / getPrice) * 100) / 100);
  const formatted = (Math.floor(calculatedPrice * 1e8) / 1e8)
  .toFixed(8)
  .replace('.', ',');
  console.log('CALCULATED PRICE:', formatted);
  await page.getByRole('button', { name: '500.000' }).click();
  expect(await estRecieved.inputValue()).toBe(formatted);
  console.log('DISPLAYED PRICE:', await estRecieved.inputValue());
});

test('Calculate USDT price 250.000 ', async ({ page }) => {
  const getPrice = await getUsdtPrice(page);
  console.log('FIRST PRICE:', getPrice); 
  const calculatedPrice = Number(((250000 / getPrice) * 100) / 100);
  const formatted = (Math.floor(calculatedPrice * 1e8) / 1e8)
  .toFixed(8)
  .replace('.', ',');
  console.log('CALCULATED PRICE:', formatted);
  await page.getByRole('button', { name: '250.000' }).click();
  expect(await estRecieved.inputValue()).toBe(formatted);
  console.log('DISPLAYED PRICE:', await estRecieved.inputValue());
} );

test('Calculate USDT price 100.000 ', async ({ page }) => {
  const getPrice = await getUsdtPrice(page);
  console.log('FIRST PRICE:', getPrice);  
  const calculatedPrice = Number(((100000 / getPrice) * 100) / 100);
  const formatted = (Math.floor(calculatedPrice * 1e8) / 1e8)
  .toFixed(8)
  .replace('.', ',');
  console.log('CALCULATED PRICE:', formatted);
  await page.getByRole('button', { name: '100.000' }).click();
  expect(await estRecieved.inputValue()).toBe(formatted);
  console.log('DISPLAYED PRICE:', await estRecieved.inputValue());
} );