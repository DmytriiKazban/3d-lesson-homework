import { expect, type Locator, type Page } from '@playwright/test';

export class product_page {
  readonly page: Page;

  readonly gramicciCorduraBag: Locator;
  readonly productWrapCard: Locator;
  readonly sizeUS: Locator;
  readonly sizeAvailability: Locator;
  readonly nikeACGWaterProof: Locator;
  readonly exceededSize: Locator;
 



  constructor(page: Page) {
    this.page = page;

    this.gramicciCorduraBag = page.locator('//*[@href="https://warsawsneakerstore.com/gramicci-cordura-wallet-black-g3fb-113-black.html"]');
    this.productWrapCard = page.locator('//*[@class="product__basic-info-wrap product__basic-info-wrap--main"]');
    this.sizeUS = page.getByRole('button', { name: 'US', exact: true });
    this.sizeAvailability = page.locator('//*[@data-id="221857"]');
    this.nikeACGWaterProof = page.locator('.listing-product__image-block').first();
    this.exceededSize = page.locator('//*[@data-sizeus="6.0"]');
  }

}