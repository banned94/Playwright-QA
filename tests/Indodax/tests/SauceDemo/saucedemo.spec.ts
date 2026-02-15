import { test, expect } from '@playwright/test';

test('saucedemo login and add to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

    // Fill in username and password fields     
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
            // Click the login button   
                await page.getByRole('button', { name: 'Login' }).click();
                    // Expects the products page to be visible      
                        await expect(page.getByText('Products')).toBeVisible();
                        // Add the first item to the cart
                            await page.getByRole('button', { name: 'Add to cart', exact: true }).first().click();
                            // Navigate to the cart
                                await page.locator('[data-test="shopping-cart-link"]').click();
                                // Expects the item to be in the cart
                                    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});
