import {
    Page,
    Locator
} from '@playwright/test';

import { BasePage } from './base.page';

export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.username = page.locator('#username');

        this.password = page.locator('#password');

        this.loginButton = page.locator(
            'button[type="submit"]'
        );

        this.errorMessage = page.locator('#flash');
    }

    async openLoginPage() {

        await this.navigate('/login');
    }

    async login(
        username: string,
        password: string
    ) {

        await this.username.fill(username);

        await this.password.fill(password);

        await this.loginButton.click();
    }

    async getLoginMessage(): Promise<string> {

        return await this.errorMessage.innerText();
    }
}