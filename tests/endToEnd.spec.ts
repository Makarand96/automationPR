import { expect } from '@playwright/test';
import {test} from '../Fixtures/baseTest';
import { LoginPage } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { MyCartPage } from '../pages/MyCartPage';
//const data= JSON.parse(JSON.stringify(require('../Utils/testData.json')));
import testData from '../Utils/testData.json';

test.describe.configure({mode:'parallel'})
for(let data of testData)
{

test(`Add ${data.product_name} to cart`, async ({ page,loginpage,dashboardpage,cartpage }) => {

  await loginpage.OpenPageURL();
  await loginpage.ValidLogin(data.username,data.password);

  await dashboardpage.addProductToCart(data.product_name);
  await dashboardpage.navigateToCartPage();

  await cartpage.buyProduct(data.product_name);

});

}
