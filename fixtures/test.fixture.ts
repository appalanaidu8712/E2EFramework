import {
    test as base,
    expect
} from '@playwright/test';

import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { TablePage } from '../pages/table.page';

type FrameworkFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    tablePage: TablePage;
};
export const test = base.extend<FrameworkFixtures>({
tablePage: async ({ page }, use) => {
    await use(new TablePage(page));
},
    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    dashboardPage: async ({ page }, use) => {

        const dashboardPage = new DashboardPage(page);

        await use(dashboardPage);
    }

});

export { expect };