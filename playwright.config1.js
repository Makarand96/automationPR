// @ts-check
import { chromium, defineConfig, devices, expect } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({

  testDir: './tests',
  timeout: 40 * 1000,  //default provided by PW is 30 secs, 
  // Sets maximum time for each test to run, 
  // If a test takes longer, Playwright fails it.
  expect:
  {
    timeout: 5000, // timeout for assertion validations,
    // Sometimes the page takes a while to load or an element appears late.
  },
  reporter: 'html',
  retries:1,
  //workers:3,
  projects:[

    {
      name:'chrome',
      use: {
      browserName: 'chromium',
      headless:false,
      screenshot:'on',
      trace:'retain-on-failure',  //on
      viewport:{width:1500,height:1000} ,//consistency across ALL browsers:
      //viewport: null,   //till args , Works perfectly with Chromium, Google Chrome, Microsoft Edge
     // launchOptions: {
     // args: ['--start-maximized']}    
          }
    },
    {
      name:'safari',
      use: {
      browserName: 'webkit',
      headless:false,
      screenshot:'only-on-failure',
      trace:'retain-on-failure', //on
      //...devices['iPhone 15 Pro Max'],
      video:'retain-on-failure',
          }
    }
  ]

  

});

 

module.exports = config  // export this config file so that it is available across your project

