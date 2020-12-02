import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { userProfilePage } from './userprofile.page';
import { categoriesPage } from './categories.page';
import { textbooksPage } from './textbooks.page';
import { kitchenitemsPage } from './kitchenware.page';
import { bedroomItemsPage } from './bedroomitems.page';
import { schoolitemsPage } from './schoolitems.page';
import { othersPage } from './others.page';
import { adminPage } from './admin.page';
import { addListingPage } from './addlisting.page';
import { viewItemPage } from './viewitem.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const adminCredentials = { username: 'admin@foo.com', password: 'changeme' };

fixture('manoa-bazaar localhost test with default db')
    .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the Add Listing page and add listing function', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoAddListingPage(testController);
  await addListingPage.isDisplayed(testController);
  await addListingPage.addListing(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that the user profile page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoUserProfilePage(testController);
  await userProfilePage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the categories page', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoriesPage(testController);
  await categoriesPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the Textbooks page', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoriesPage(testController);
  await categoriesPage.gotoTextbooksPage(testController);
  await textbooksPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the Kitchen items page', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoriesPage(testController);
  await categoriesPage.gotoKitchenwarePage(testController);
  await kitchenitemsPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the Bedroom items page', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoriesPage(testController);
  await categoriesPage.gotoBedroomItemsPage(testController);
  await bedroomItemsPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the School items page', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoriesPage(testController);
  await categoriesPage.gotoSchoolItemsPage(testController);
  await schoolitemsPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the Admin page', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, adminCredentials.username, adminCredentials.password);
  await navBar.gotoAdminPage(testController);
  await adminPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the Other items page', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoriesPage(testController);
  await categoriesPage.gotoOthersPage(testController);
  await othersPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

/** implement this test after ViewItems page is working
test('Test the View items page', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoriesPage(testController);
  await categoriesPage.gotoOthersPage(testController);
  await othersPage.clickACard(testController);
  await viewItemPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});**/
