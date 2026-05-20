import {test,expect} from '@playwright/test';
import {POManager} from '../pageobjects_ts/POManager';

import {customTest} from '../Utils_ts/test-base';

const dataset = JSON.parse(JSON.stringify(require('../Utils_ts/placeorderTestData.json')));

test.describe.configure({mode:"parallel",retries:1})
for (const data of dataset)
{

test(`@Web End to End Test for ${data.product_name}`, async ({ page }) => {

  const pom = new POManager(page);
  const countryName ='India';
  const loginPage = pom.loginPageOject();
  await loginPage.OpenPageURL();
  await loginPage.ValidLogin(data.username,data.password);


  const dashboard =pom.dashboardPageObject();
  await dashboard.selectIphone(data.product_name);
  await dashboard.NavigateToCartsPage();

  const cartPage = pom.cartPageObject();
  await cartPage.checkoutProduct(data.product_name);

  const paymentPage = pom.paymentPageObject();
  await paymentPage.PlaceOrder(countryName);
   

});

}


customTest('@Smoke End to End Test for Custom data in fixture', async ({ page,testDataFixture }) => {

  const pom = new POManager(page);
  const countryName ='India';
  const loginPage = pom.loginPageOject();
  await loginPage.OpenPageURL();
  await loginPage.ValidLogin(testDataFixture.username,testDataFixture.password);


  const dashboard =pom.dashboardPageObject();
  await dashboard.selectIphone(testDataFixture.product_name);
  await dashboard.NavigateToCartsPage();

  const cartPage = pom.cartPageObject();
  await cartPage.checkoutProduct(testDataFixture.product_name);  //deliberately passing password instaed of product_name to fail tc

  const paymentPage = pom.paymentPageObject();
  await paymentPage.PlaceOrder(countryName);
   

});

