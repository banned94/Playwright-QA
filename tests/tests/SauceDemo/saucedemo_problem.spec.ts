import { test, expect } from '@playwright/test';
import {SauceDemoAssets as MyPage} from './data/saucedemo_assets';
import { users } from './data/user_data';


test('saucedemo login and add to cart', async ({ page }) => {
const saucedemo = new MyPage(page);
await page.goto(saucedemo.url);  
await saucedemo.UsernameField.fill(users.standard.username);
await saucedemo.PasswordField.fill(users.standard.password);
await saucedemo.LoginButton.click();
// Expects the products image to be broken     
const image = page.locator('img[src="/static/media/sl-404.168b1cce10384b857a6f.jpg"]');
await expect(image).toHaveCount(6);
});
