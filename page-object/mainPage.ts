import { expect, type Locator, type Page } from '@playwright/test';

export class mainPage {
  readonly page: Page;

  readonly searchFieldonMain: Locator;
  readonly searchFieldonModal: Locator;
  // readonly wishList: Locator;
  readonly searchButton: Locator;
  readonly clearButton: Locator;
  readonly cookiesModalBtnAccept: Locator;
  readonly cookiesModalBtnRemember: Locator;



  constructor(page: Page) {
    this.page = page;

    this.searchFieldonMain = page.locator('//*[@class="header-search-modal-button navigation__link header__button button button--vertical button--mobile-only-icon header__button-alt-search"]');
    this.searchFieldonModal = page.locator('//*[@id="header-search-form-input"]');
    this.searchButton = page.locator('//*[@id="header-search-form-input"]');
    this.clearButton = page.locator('//*[@id="header-search-clear-button"]');
    this.cookiesModalBtnAccept = page.getByRole('button', { name: 'I agree' });
    this.cookiesModalBtnRemember = page.getByRole('button', { name: 'Remember my selection' });
  }

  async goto() {
    await this.page.goto('https://warsawsneakerstore.com/');
  }

  // async entertheWord() {
  //   await this.searchField.fill(this.randomWord);
  // }

}