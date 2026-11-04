import {
    Page,
    Locator
} from '@playwright/test';

import { BasePage } from './base.page';

export class addelements extends BasePage {
        readonly addElementButton: Locator;
        readonly deleteButton: Locator;
        constructor(page: Page) {
        super(page);
        this.addElementButton = page.getByRole('button', { name: 'Add Element' });
        this.deleteButton = page.getByRole('button', { name: 'Delete' });
        }

    async openaddelements(): Promise<void> {
        await this.navigate('/add_remove_elements/');
    }

    async clickAddElementButton(): Promise<void> {
        await this.addElementButton.click();
    }

    async clickDeleteButton(): Promise<void> {
        await this.deleteButton.click();
    }

        }