import { Page, BrowserContext, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class MultipleWindowsPage extends BasePage {

    readonly clickHereLink: Locator;

    constructor(page: Page) {
        super(page);

        this.clickHereLink = page.getByRole('link', {
            name: 'Click Here'
        });
    }

    async openPage(): Promise<void> {
        await this.navigate('/windows');
    }

    async openNewWindow(context: BrowserContext): Promise<Page> {

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            this.clickHereLink.click()
        ]);

        await newPage.waitForLoadState();

        return newPage;
    }

    async getNewWindowText(newPage: Page): Promise<string> {
        return await newPage.locator('h3').innerText();
    }

    async closeNewWindow(newPage: Page): Promise<void> {
        await newPage.close();
    }
}