import { test, expect } from '@playwright/test';
import {SauceDemoAssets as MyPage } from './data/saucedemo_assets';
import { credentials } from '../../../config/credential';
import dotenv from 'dotenv';

dotenv.config();

test('saucedemo login and add to cart', async ({ page }) => {
const saucedemo = new MyPage(page);
await page.goto(saucedemo.url);  
await saucedemo.UsernameField.fill(credentials.username);
await saucedemo.PasswordField.fill(credentials.password);
await saucedemo.LoginButton.click();
await expect(page.getByText('Products')).toBeVisible();
await saucedemo.ButtonAddToCart.first().click();
await page.locator('[data-test="shopping-cart-link"]').click();
await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});

