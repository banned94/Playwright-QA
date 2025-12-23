import { test, expect } from '@playwright/test';

test('saucedemo login and add to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

    // Fill in username and password fields     
        await page.getByPlaceholder('Username').fill('locked_out_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
            // Click the login button   
                await page.getByRole('button', { name: 'Login' }).click();
                    // Expects error to be visible      
                        await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});