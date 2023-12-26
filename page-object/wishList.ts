import { expect, type Locator, type Page } from '@playwright/test';

export class wishList {
  readonly page: Page;

  readonly wishListBtn: Locator;
  readonly saleProducts: Locator;
  readonly addToWishListBtn: Locator;



  constructor(page: Page) {
    this.page = page;

    this.wishListBtn = page.getByRole('link', { name: 'heart icon' });
    this.saleProducts = page.getByRole('button', { name: 'Wszystkie produkty' });
    this.addToWishListBtn = page.locator('//*[@class="button listing-product__add-to-favorite favorite-button"]');
 
  }

}