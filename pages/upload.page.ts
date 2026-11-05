import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { FileUtils } from '../utils/file.utils';

export class UploadPage extends BasePage {

    readonly chooseFile: Locator;
    readonly uploadButton: Locator;
    readonly uploadedMessage: Locator;
    readonly uploadedFileName: Locator;

    constructor(page: Page) {
        super(page);

        this.chooseFile = page.locator('#file-upload');
        this.uploadButton = page.locator('#file-submit');
        this.uploadedMessage = page.locator('h3');
        this.uploadedFileName = page.locator('#uploaded-files');
    }

    async openUploadPage(): Promise<void> {
        await this.navigate('/upload');
    }

    async uploadFile(filePath: string): Promise<void> {
        await FileUtils.uploadFile(this.chooseFile, filePath);
        await this.uploadButton.click();
    }

    async getUploadedFileName(): Promise<string> {
        return await this.uploadedFileName.innerText();
    }
}