import {chromium, test, webkit} from '@playwright/test'
test('RedBus In Edge',async () => {

    let browser=await chromium.launch({headless:false,channel:'msedge'})
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto('https://www.redbus.in/')
    //await page.waitForTimeout(50000)
    let title=await page.title()
    let url=await page.url()
    console.log("Redbus Title:",title)
    console.log("Redbus URL:",url)

})
test('RedBus In Webkit',async () => {

    let browser=await webkit.launch()
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto('https://www.flipkart.com/')
    //await page.waitForTimeout(50000)
    let title=await page.title()
    let url=await page.url()
    console.log("Flipkart Title:",title)
    console.log("Flipkart URL:",url)

})