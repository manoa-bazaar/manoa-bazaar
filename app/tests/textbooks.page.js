import { Selector } from 'testcafe';

class TextbooksPage {
  constructor() {
    this.pageId = '#textbooks-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const textbooksPage = new TextbooksPage();
