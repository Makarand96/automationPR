const {LoginPage} =require('../pageobjects/LoginPage');
const {DashboardPage} =require('../pageobjects/DashboardPage');
const {MyCartPage} =require('../pageobjects/MyCartPage');
const {PaymentsPage} = require('../pageobjects/PaymentsPage');


class POManager
{
    constructor(page)
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

module.exports={POManager}