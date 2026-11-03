import {
    Page,
    Locator
} from '@playwright/test';

export class TableUtils {

    constructor(private page: Page) {}

    getTable(selector: string): Locator {

        return this.page.locator(selector);
    }

    getRows(table: Locator): Locator {

        return table.locator('tbody tr');
    }

    async getRowCount(table: Locator): Promise<number> {

        return await this.getRows(table).count();
    }

    async getCellValue(
        table: Locator,
        rowIndex: number,
        columnIndex: number
    ): Promise<string> {

        const row = this.getRows(table).nth(rowIndex);

        return await row.locator('td')
            .nth(columnIndex)
            .innerText();
    }

    getRowByText(
        table: Locator,
        text: string
    ): Locator {

        return this.getRows(table).filter({
            hasText: text
        });
    }

    async verifyRowExists(
        table: Locator,
        text: string
    ): Promise<boolean> {

        return await this.getRowByText(
            table,
            text
        ).count() > 0;
    }
}