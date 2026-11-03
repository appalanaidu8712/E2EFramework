import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Environment selection
const environment = process.env.TEST_ENV || 'qa';

// Load environment configuration
dotenv.config({
    path: `./config/${environment}.env`,
    override: false
});

// Validate required environment variables
const requiredVariables = [
    'BASE_URL',
    'LOGIN_USERNAME',
    'LOGIN_PASSWORD'
];

for (const variable of requiredVariables) {
    if (!process.env[variable]) {
        throw new Error(
            `Missing environment variable: ${variable}`
        );
    }
}

export default defineConfig({

    testDir: './tests',

    timeout: 60000,

    expect: {
        timeout: 10000
    },

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 2 : undefined,

    reporter: [
        ['list'],

        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }],

        ['allure-playwright', {
            resultsDir: 'allure-results'
        }]
    ],

    use: {

        baseURL: process.env.BASE_URL,

        headless: true,

        actionTimeout: 15000,

        navigationTimeout: 30000,

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'retain-on-failure',

        ignoreHTTPSErrors: false
    },

    projects: [

        {
            name: 'chromium',

            use: {
                ...devices['Desktop Chrome']
            }
        },

        {
            name: 'firefox',

            use: {
                ...devices['Desktop Firefox']
            }
        },

        {
            name: 'webkit',

            use: {
                ...devices['Desktop Safari']
            }
        }

    ],

    outputDir: 'test-results/'

});