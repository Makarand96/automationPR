import {LoginPage} from '../pageobjects_ts/LoginPage';
import {DashboardPage} from '../pageobjects_ts/DashboardPage';
import {MyCartPage} from '../pageobjects_ts/MyCartPage';
import {PaymentsPage} from '../pageobjects_ts/PaymentsPage';
import {Page} from '@playwright/test';

export class POManager
{
    page:Page;
    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    cartPage:MyCartPage;
    paymentPage:PaymentsPage;

    constructor(page:Page)
    {
        this.page=page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new MyCartPage(this.page);
        this.paymentPage = new PaymentsPage(this.page);
    }

    loginPageOject()
    {
        return this.loginPage;
    }

    dashboardPageObject()
    {
        return this.dashboardPage;
    }

    cartPageObject()
    {
        return this.cartPage;
    }
    paymentPageObject()
    {
        return this.paymentPage;
    }
}

