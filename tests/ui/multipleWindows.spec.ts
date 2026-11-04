import { test, expect } from '@playwright/test';
import { MultipleWindowsPage } from '../../pages/multipleWindows.page';

test('Verify multiple browser windows', async ({ page }) => {

    const windowsPage = new MultipleWindowsPage(page);
    const context = page.context();

    // Open parent window
    await windowsPage.openPage();

    // Capture newly opened child window
    const newPage = await windowsPage.openNewWindow(context);

    // Validate child window
    await expect(newPage.locator('h3')).toHaveText('New Window');

    console.log('Child window URL:', newPage.url());
    console.log('Child window title:', await newPage.title());

    // Close child window
    await windowsPage.closeNewWindow(newPage);

    // Verify parent window is still available
    await expect(page.locator('h3')).toHaveText('Opening a new window');

    console.log('Parent window URL:', page.url());
});