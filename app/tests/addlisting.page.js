import { Selector } from 'testcafe';
import { navBar } from './navbar.component';

class AddListingPage {
  constructor() {
    this.pageId = '#add-listing-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.wait(30000).expect(this.pageSelector.exists).ok();
  }

  /** Fills out the Add Listing form, then checks to see that login was successful. */
  async addListing(testController) {
    const name = 'Phone Charger';
    const category = 'Other Items';
    const quantity = '1';
    const price = '15';
    const condition = 'lightly used';
    const brand = 'Apple';
    const description = 'USB phone charger for iPhone';
    const image = 'https://i.gyazo.com/7b42fa9d8da42de7a3357a38b227071a.png';
    await this.isDisplayed(testController);

    // Defining the new listing
    await testController.typeText('#name', name);
    await testController.typeText('#category', category);
    await testController.typeText('#quantity', quantity);
    await testController.typeText('#price', price);
    await testController.typeText('#condition', condition);
    await testController.typeText('#brand', brand);
    await testController.typeText('#description', description);
    await testController.typeText('#image', image);

    // Confirm the entry
    await testController.click('#add-listing-submit');
    await testController.click(Selector('.swal-button--confirm'));
  }
}

export const addListingPage = new AddListingPage();
