import { Selector } from 'testcafe';

class BedroomItemsPage {
  constructor() {
    this.pageId = '#bedroomitems-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.wait(30000).expect(this.pageSelector.exists).ok();
  }
}

export const bedroomItemsPage = new BedroomItemsPage();
