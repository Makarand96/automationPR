import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { MyCartPage } from '../pages/MyCartPage';
import { PaymentsPage } from '../pages/MyCartPage';

interface pageObjects
{
    loginpage:LoginPage;
    dashboardpage:Dashboard;
    cartpage:MyCartPage;
    paymentspage:PaymentsPage;
}

export const test =base.extend<pageObjects>({

    loginpage:async ({page},use) =>
    {
        const loginpage = new LoginPage(page);
        await use(loginpage);
    },

    dashboardpage: async ({page},use)=>{
        const dashboardpage= new Dashboard(page);
        await use(dashboardpage);
    },

    cartpage: async ({page},use)=>
    {
        const cartpage=new MyCartPage(page);
        await use(cartpage);
    }

})