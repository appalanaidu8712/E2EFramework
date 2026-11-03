import {
    BrowserContext,
    Page
} from '@playwright/test';

export class WindowUtils {

    static async switchToNewWindow(
        context: BrowserContext,
        action: () => Promise<void>
    ): Promise<Page> {

        const [newPage] = await Promise.all([

            context.waitForEvent('page'),

            action()

        ]);

        await newPage.waitForLoadState(
            'domcontentloaded'
        );

        return newPage;
    }

    static async closeWindow(page: Page) {

        await page.close();
    }
}