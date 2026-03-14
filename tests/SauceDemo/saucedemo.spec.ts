import { test, expect } from '@playwright/test';
import {SauceDemoAssets as MyPage } from './data/saucedemo_assets';
import { credentials } from '../config/credential';
import { login } from './helper/login';
import dotenv from 'dotenv';
dotenv.config();

test('Checkout', async ({ page }) => {
const saucedemo = new MyPage(page);
await login(page);
await expect(page.getByText('Products')).toBeVisible();
await saucedemo.ButtonAddToCart.first().click();
await saucedemo.shoppingCartLink.click();
await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
await saucedemo.checkoutButton.click();
await page.locator('[data-test="firstName"]').click();
await page.locator('[data-test="firstName"]').fill('Testing');
await page.locator('[data-test="firstName"]').press('Tab');
await page.locator('[data-test="lastName"]').fill('Testing');
await page.locator('[data-test="lastName"]').press('Tab');
await page.locator('[data-test="postalCode"]').fill('Testing');
await page.locator('[data-test="continue"]').click();
await page.locator('[data-test="finish"]').click();
await page.locator('[data-test="back-to-products"]').click();
});


