import { chromium, expect, test, webkit } from '@playwright/test'
test('RedBus In Edge', async () => {

    const browser = await chromium.launch({ headless: false, channel: 'msedge' })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.redbus.in/')
    await expect(page).toHaveTitle(await page.title())
    await expect(page).toHaveURL(page.url())
    await browser.close()

})
test.only('Flipkart In Webkit', async () => {
    const browser = await webkit.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.flipkart.com/')
    await expect(page).toHaveTitle(await page.title())
    await expect(page).toHaveURL(page.url())
    await browser.close()

})