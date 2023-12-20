import { expect, type Locator, type Page } from '@playwright/test';

export class productGramicci {
  readonly page: Page;

  readonly gramicciCorduraBag: Locator;
 



  constructor(page: Page) {
    this.page = page;

    this.gramicciCorduraBag = page.locator('//*[@href="https://warsawsneakerstore.com/gramicci-cordura-wallet-black-g3fb-113-black.html"]');
  }

}