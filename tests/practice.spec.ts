import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Test Login/);
      });

      test('successful login', async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/');

          // Fill in username and password fields
            await page.getByLabel('Username').fill('student');
            await page.getByLabel('Password').fill('Password123');

              // Click the submit button
                await page.getByRole('button', { name: 'Submit' }).click();

                  // Expects page to have a heading with the name of Logged In Successfully
                    await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
                    })
test('invalid user login', async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/');

          // Fill in username and password fields with incorrect credentials
            await page.getByLabel('Username').fill('wronguser');
            await page.getByLabel('Password').fill('wrongpassword');

              // Click the submit button
                await page.getByRole('button', { name: 'Submit' }).click();

                  // Expects an error message to be visible
                    await expect(page.locator('#error')).toBeVisible();
                    })