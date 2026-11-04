import { test, expect } from '../../fixtures/test.fixture';
test.describe('add element Testing', () => {

    test.beforeEach(async ({addelements}) => {
        await addelements.openaddelements();
    })


    test('Verify add element button functionality', async ({ addelements }) => {
        await addelements.clickAddElementButton();
        const isDeleteButtonVisible = await addelements.isVisible(addelements.deleteButton);
        expect(isDeleteButtonVisible).toBeTruthy();
    })

});
