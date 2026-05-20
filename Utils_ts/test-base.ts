//const base = require('@playwright/test');

import {test as baseTest} from '@playwright/test';

interface TestDataFixture {
             username:string;
             password:string;
             product_name:string;
}

export const customTest = baseTest.extend<{testDataFixture:TestDataFixture}>(


    {
        testDataFixture :
        {
             username:"mak7796@yopmail.com",
             password:"Satara@12345",
             product_name:"iphone 13 pro"
        }
    }
)

