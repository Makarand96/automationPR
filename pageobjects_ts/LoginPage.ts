import {Page,Locator,expect} from '@playwright/test';

export class LoginPage{

    page:Page;
    username:Locator;
    password:Locator;
    loginButton:Locator;

constructor(page:Page)
{
    this.page=page;

    this.username = page.getByRole("textbox", { name: "email@example.com" });
    this.password = page.getByRole("textbox", { name: "enter your passsword" });
    this.loginButton = page.locator("#login")
}

async OpenPageURL ()
{
   await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
}

async ValidLogin(username:string,password:string)
{
    await this.username.fill(username);
    await this.password.fill(password);
    await expect(this.loginButton).toBeEnabled();
    await this.loginButton.click();

}
}
