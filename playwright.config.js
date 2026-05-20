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
  timeout: 30 * 1000,  //default provided by PW is 30 secs, 
  // Sets maximum time for each test to run, 
  // If a test takes longer, Playwright fails it.
  expect:
  {
    timeout: 5000, // timeout for assertion validations,
    // Sometimes the page takes a while to load or an element appears late.
  },
  reporter: 'html',
  // reporter: 
  // [
  // ['line'], ['allure-playwright']
  // ],

  retries:1,
 // workers:1,
  
  use: {
     browserName: 'chromium',
     headless:false,
     screenshot:'only-on-failure',
     trace:'retain-on-failure', //on
     //...devices['Galaxy S24'],
     //viewport:{width:1500,height:1000},   //set browser w & h
     ...devices['Desktop Chrome'],
     video:'on-first-retry',
       }
 
 

});

 

module.exports = config  // export this config file so that it is available across your project

