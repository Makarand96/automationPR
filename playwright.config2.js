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
const config =
{
  testDir:'./tests',
  timeout:40*1000,
  expect:
  {
    timeout:5000
  },
  retries:1,
      use:
    {
    browserName:'chromium',
    headless:false,
    screenshot:'only-on-failure',
    trace:'on',
    ignoreHttpsErrors:true,
    permissions:['geolocation'],
    video:'on-first-retry',
    //...devices['iPhone 15 Pro Max'],
    viewport:{width:1000,height:800},
    }
  
  

}

 

module.exports = config  // export this config file so that it is available across your project

