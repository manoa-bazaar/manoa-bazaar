import { Selector } from 'testcafe';

class SchoolitemsPage {
  constructor() {
    this.pageId = '#schoolitems-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const schoolitemsPage = new SchoolitemsPage();
