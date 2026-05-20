const base = require('@playwright/test');

exports.customTest = base.test.extend(


    {
        testDataFixture :
        {
             username:"mak7796@yopmail.com",
             password:"Satara@12345",
             product_name:"iphone 13 pro"
        }
    }
)

