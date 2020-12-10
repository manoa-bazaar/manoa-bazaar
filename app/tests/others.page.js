import { Selector } from 'testcafe';

class OthersPage {
  constructor() {
    this.pageId = '#others-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.wait(30000).expect(this.pageSelector.exists).ok();
  }

  async clickACard(testController) {
    await testController.click(Selector('.ui .card'));
  }
}

export const othersPage = new OthersPage();
