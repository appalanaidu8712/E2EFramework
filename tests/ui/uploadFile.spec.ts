import { test, expect } from '../../fixtures/test.fixture';
import path from 'path';

test('Verify file upload functionality', async ({ uploadPage }) => {

    const filePath = path.resolve(
        process.cwd(),
        'test-data',
        'sample.txt'
    );

    // Navigate to upload page
    await uploadPage.openUploadPage();

    // Upload file
    await uploadPage.uploadFile(filePath);

    // Validate successful upload
    await expect(uploadPage.uploadedMessage)
        .toHaveText('File Uploaded!');

    // Validate uploaded file name
    await expect(uploadPage.uploadedFileName)
        .toHaveText('sample.txt');

});