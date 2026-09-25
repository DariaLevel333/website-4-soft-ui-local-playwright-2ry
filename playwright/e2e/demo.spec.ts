import { test, expect } from "@playwright/test";
import { levelAnalyze } from "@level-ci/a11y-playwright-test";

test('should have the right text in the headline', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('.navbar-brand')).toContainText(/Soft UI Dashboard/);
  
  await levelAnalyze(page
    )
});
