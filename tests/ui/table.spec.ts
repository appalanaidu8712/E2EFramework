import { test, expect } from '../../fixtures/test.fixture';

test.describe('Dynamic Table Testing', () => {

    test.beforeEach(async ({ tablePage }) => {
        await tablePage.openTablePage();
    });

    test('Verify table headers', async ({ tablePage }) => {

        const headers = await tablePage.getHeaders();

        console.log('Table Headers:', headers);

        expect(headers).toContain('Last Name');
        expect(headers).toContain('First Name');
        expect(headers).toContain('Email');
    });

    test('Verify total number of rows', async ({ tablePage }) => {

        const totalRows = await tablePage.getTotalRows();

        console.log('Total Rows:', totalRows);

        expect(totalRows).toBeGreaterThan(0);
    });

    test('Verify user exists in table', async ({ tablePage }) => {

        const isPresent =
            await tablePage.isUserPresent('Smith');

        expect(isPresent).toBeTruthy();
    });

    test('Get specific user details', async ({ tablePage }) => {

        const row = await tablePage.getRowByName('Smith');

        const email = await tablePage.getCellValue(row, 2);

        console.log('User Email:', email);

        expect(email).toContain('@');
    });
});