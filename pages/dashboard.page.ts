import {
    Page,
    Locator
} from '@playwright/test';

import { BasePage } from './base.page';

export class DashboardPage extends BasePage {

    readonly heading: Locator;
    readonly logoutButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.heading = page.getByText("You logged into a secure area!");


        this.logoutButton = page.getByRole('link', {
            name: 'Logout'
        });

        this.successMessage = page.locator('#flash');
    }

    async verifyDashboard() {

        await this.heading.waitFor({
            state: 'visible'
        });
    }

    async logout() {

        await this.logoutButton.click();
    }

    async getSuccessMessage(): Promise<string> {

        return await this.successMessage.innerText();
    }
}