import { Page, Locator } from '@playwright/test';

export class QuickbuyAssets {
  readonly page: Page;
  readonly Button100: Locator;
  readonly Button250: Locator;
  readonly Button500: Locator;
  readonly Button1000: Locator;
  readonly ButtonCobaSekarang: Locator;
  readonly ButtonLewati: Locator;
  readonly EstRecieved: Locator;
  readonly CariKoin: Locator;

  constructor(page: Page) {
    this.page = page;
    // Store buttons as locators
    this.Button100 =  page.getByRole('button', { name: '100.000' })
    this.Button250 =  page.getByRole('button', { name: '250.000' })
    this.Button500 =  page.getByRole('button', { name: '500.000' })
    this.Button1000 =  page.getByRole('button', { name: '1.000.000' })
    this.ButtonCobaSekarang = page.getByRole('button', { name: 'Coba Sekarang' });
    this.ButtonLewati = page.getByRole('button', { name: 'Lewati' });
    this.EstRecieved = page.getByRole('textbox', { name: 'Total Aset' });
    this.CariKoin = page.getByRole('textbox', { name: 'Cari Koin' });
  }
}