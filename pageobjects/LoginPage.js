export class LoginPage{

constructor(page)
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

async ValidLogin(username,password)
{
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();

}
}
module.exports={LoginPage};