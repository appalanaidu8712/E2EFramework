import {
    Page,
    Locator
} from '@playwright/test';

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(path: string = '/') {
        await this.page.goto(path);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(
        locator: Locator,
        value: string
    ) {
        await locator.fill(value);
    }

    async getText(locator: Locator): Promise<string> {
        return await locator.innerText();
    }

    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    async waitForElement(locator: Locator) {
        await locator.waitFor({
            state: 'visible'
        });
    }

    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }

    async getCurrentURL(): Promise<string> {
        return this.page.url();
    }

    async takeScreenshot(name: string) {
        await this.page.screenshot({
            path: `test-results/${name}.png`,
            fullPage: true
        });
        
    }
    
}