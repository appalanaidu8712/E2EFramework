import {
    test,
    expect
} from '../../fixtures/test.fixture';

import { Logger } from '../../utils/logger';

test.describe('Login Module', () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.openLoginPage();

        Logger.info('Opened application login page');
    });

    test('@smoke @regression Verify successful login', async ({
        loginPage,
        dashboardPage
    }) => {

        const username = process.env.LOGIN_USERNAME!;
        const password = process.env.LOGIN_PASSWORD!;

        await loginPage.login(username, password);

        await dashboardPage.verifyDashboard();

        await expect(dashboardPage.heading).toBeVisible();

        await expect(dashboardPage.successMessage)
            .toContainText('You logged into a secure area!');

        Logger.success('Login successful');
    });

    test('@regression Verify invalid login', async ({
        loginPage
    }) => {

        await loginPage.login(
            'invalid_user',
            'invalid_password'
        );

        await expect(loginPage.errorMessage)
            .toContainText('Your username is invalid!');

        Logger.success('Invalid login validation successful');
    });

    test('@regression Verify logout', async ({
        loginPage,
        dashboardPage,
        page
    }) => {

        await loginPage.login(
            process.env.LOGIN_USERNAME!,
            process.env.LOGIN_PASSWORD!
        );

        await dashboardPage.verifyDashboard();

        await dashboardPage.logout();

        await expect(page).toHaveURL(/login/);

        await expect(loginPage.errorMessage)
            .toContainText('You logged out of the secure area!');

        Logger.success('Logout successful');
    });

});