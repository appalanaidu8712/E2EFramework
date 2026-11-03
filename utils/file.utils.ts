import {
    Page,
    Locator,
    Download
} from '@playwright/test';

export class FileUtils {

    static async uploadFile(
        locator: Locator,
        filePath: string
    ) {

        await locator.setInputFiles(filePath);
    }

    static async uploadMultipleFiles(
        locator: Locator,
        filePaths: string[]
    ) {

        await locator.setInputFiles(filePaths);
    }

    static async downloadFile(
        page: Page,
        action: () => Promise<void>,
        savePath: string
    ): Promise<Download> {

        const [download] = await Promise.all([

            page.waitForEvent('download'),

            action()

        ]);

        await download.saveAs(savePath);

        return download;
    }
}