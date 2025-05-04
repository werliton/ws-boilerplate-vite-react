import test, { expect } from "@playwright/test";

test('Carregar a home', async ({ page }) => {
    const header = {
        title: 'Patient Medical Records by HackerRank'
    }
    await page.goto('/')
    await expect(page).toHaveTitle('Boilerplate Vite + React')
    await expect(page.getByTestId('header')).toContainText(header.title)
})