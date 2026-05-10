const { defineConfig } = require('@playwright/test');
    module.exports = defineConfig({
    use: {
        headless: true,
        screenshot: 'on',
        video: 'on',
        trace:'on'
    },
    reporter: [
        ['list'],
        ['junit', { outputFile: 'results.xml' }],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['allure-playwright', { outputFolder: 'allure-results' }]
    ],
    });