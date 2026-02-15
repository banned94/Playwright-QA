import { test, expect } from '@playwright/test';

test('saucedemo login and add to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

    // Fill in username and password fields     
        await page.getByPlaceholder('Username').fill('problem_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
            // Click the login button   
                await page.getByRole('button', { name: 'Login' }).click();
                    // Expects the products image to be broken     
                const image = page.locator('img[src="/static/media/sl-404.168b1cce10384b857a6f.jpg"]');
                await expect(image).toHaveCount(6);
});
