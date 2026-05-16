const { test, expect } = require('@playwright/test');
const path = require('path');

test('login success test', async ({ page }) => {
    //open local html file
    const filePath = path.join(__dirname, '..', 'login.html');
    await page.goto('file://' + filePath);

    //perform action
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password');
    await page.click('button');

    //assertion
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.locator('#message')).toHaveText('Login successful!');
});