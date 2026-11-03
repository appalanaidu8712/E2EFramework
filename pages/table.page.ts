import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class TablePage extends BasePage {

    readonly table: Locator;
    readonly tableRows: Locator;
    readonly tableHeaders: Locator;

    constructor(page: Page) {
        super(page);

        this.table = page.locator('#table1');
        this.tableRows = this.table.locator('tbody tr');
        this.tableHeaders = this.table.locator('thead th');
    }

    async openTablePage(): Promise<void> {
        await this.navigate('/tables');
    }

    async getTotalRows(): Promise<number> {
        return await this.tableRows.count();
    }

    async getHeaders(): Promise<string[]> {
        return await this.tableHeaders.allInnerTexts();
    }

    async getRowByName(name: string): Promise<Locator> {
        return this.tableRows.filter({
            hasText: name
        });
    }

    async getCellValue(
        row: Locator,
        columnIndex: number
    ): Promise<string> {

        return await row.locator('td')
            .nth(columnIndex)
            .innerText();
    }

    async isUserPresent(name: string): Promise<boolean> {
        const row = await this.getRowByName(name);
        return await row.count() > 0;
    }
}