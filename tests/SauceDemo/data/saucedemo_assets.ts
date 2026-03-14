import { Page, Locator } from '@playwright/test';

export class SauceDemoAssets {
  readonly page: Page;
  readonly ButtonAddToCart: Locator;
  readonly ButtonRemove: Locator;
  readonly CartBadge: Locator;
  readonly LoginButton: Locator;
  readonly UsernameField: Locator;
  readonly PasswordField: Locator;
  readonly shoppingCartLink: Locator;
  readonly checkoutButton: Locator;
  readonly url = process.env.BASE_URL!;


  constructor(page: Page) {
    this.page = page;
    // Store buttons as locators
    this.ButtonAddToCart = page.getByRole('button', { name: 'Add to cart' });
    this.ButtonRemove = page.getByRole('button', { name: 'Remove' });
    this.CartBadge = page.locator('.shopping_cart_badge');
    this.LoginButton = page.getByRole('button', { name: 'Login' });
    this.UsernameField = page.getByPlaceholder('Username');
    this.PasswordField = page.getByPlaceholder('Password');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]'); 
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }
}