import {
    Page,
    Locator
} from '@playwright/test';

import { BasePage } from './base.page';

export class addelements extends BasePage {
        readonly addElementButton: Locator;
        readonly deleteButtons: Locator;
        constructor(page: Page) {
        super(page);
        this.addElementButton = page.getByRole('button', { name: 'Add Element' });
        this.deleteButtons = page.getByRole('button', { name: 'Delete' });
        }

    async openaddelements(): Promise<void> {
        await this.navigate('/add_remove_elements/');
    }

    async clickAddElementButton(): Promise<void> {
        await this.addElementButton.dblclick();
    }

     async deleteElementByIndex(index: number): Promise<void> {
        await this.deleteButtons.nth(index).click();
    }

    async getDeleteButtonCount(): Promise<number> {
        return await this.deleteButtons.count();
    }
        }