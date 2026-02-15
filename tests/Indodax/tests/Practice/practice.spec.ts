import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto(process.env.PRACTICE_BASE_URL!);
    // Expect a title "to contain" a substring.
      await expect(page.getByRole('heading', { name: 'Hello' })).toBeVisible();
});
console.log('Base URL is:', process.env.PRACTICE_BASE_URL);

      test('successful login', async ({ page }) => {
        await page.goto(process.env.PRACTICE_BASE_URL! + process.env.PRACTICE_LOGIN_URL!);
          // Fill in username and password fields
            await page.getByLabel('Username').fill(process.env.PRACTICE_USERNAME!);
            await page.getByLabel('Password').fill(process.env.PRACTICE_PASSWORD!);

              // Click the submit button
                await page.getByRole('button', { name: 'Submit' }).click();

                  // Expects page to have a heading with the name of Logged In Successfully
                    await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
              })
      test('invalid user login', async ({ page }) => {
        await page.goto(process.env.PRACTICE_BASE_URL! + process.env.PRACTICE_LOGIN_URL!);

          // Fill in username and password fields with incorrect credentials
            await page.getByLabel('Username').fill(process.env.PRACTICE_INVALID_USERNAME!);
            await page.getByLabel('Password').fill(process.env.PRACTICE_INVALID_PASSWORD!);

              // Click the submit button
                await page.getByRole('button', { name: 'Submit' }).click();

                  // Expects an error message to be visible
                    await expect(page.locator('#error')).toBeVisible();
                  })