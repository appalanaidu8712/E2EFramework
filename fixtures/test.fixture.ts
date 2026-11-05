import {
    test as base,
    expect
} from '@playwright/test';

import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { TablePage } from '../pages/table.page';
import { addelements } from '../pages/addelements.page';
import { UploadPage } from '../pages/upload.page';
type FrameworkFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    tablePage: TablePage;
    addelements: addelements;
    uploadPage: UploadPage;
};
export const test = base.extend<FrameworkFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },

    uploadPage: async ({ page }, use) => {
        await use(new UploadPage(page));
    },

    addelements: async ({ page }, use) => {
        await use(new addelements(page));
    },

    tablePage: async ({ page }, use) => {
        await use(new TablePage(page));
    },
});

export { expect };