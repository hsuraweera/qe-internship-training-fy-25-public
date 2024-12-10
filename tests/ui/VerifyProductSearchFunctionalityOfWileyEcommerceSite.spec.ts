import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test("VerifyAccessibilityOnEcommerceSearchResultsPage", async ({ page }) => {

  await test.step("Open the browser", async () => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
  });

  await test.step('Click on the search button', async () => {
    await page.locator("//button[@class='DocSearch DocSearch-Button']").click();
  });

  await test.step('Click on the seach filed and enter some value', async () => {
    await page.locator("//input[@class='DocSearch-Input']").pressSequentially("Iframes", {delay: 100});
  });

  await test.step('click enter key', async () => {
    await page.keyboard.press('Enter');
    await expect(page.locator('//*[@id="frame-locator-frame-locator"]')).toBeVisible({timeout: 15000});
  });

  await test.step('Run accessibility test', async () => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });


});
