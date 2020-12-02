import { Selector } from 'testcafe';

class CategoriesPage {
  constructor() {
    this.pageId = '#categories-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoTextbooksPage(testController) {
    await testController.click('#textbooks-link');
  }

  async gotoKitchenwarePage(testController) {
    await testController.click('#kitchenware-link');
  }

  async gotoBedroomItemsPage(testController) {
    await testController.click('#bedroom-link');
  }

  async gotoSchoolItemsPage(testController) {
    await testController.click('#school-link');
  }

  async gotoOthersPage(testController) {
    await testController.click('#other-link');
  }
}

export const categoriesPage = new CategoriesPage();
