import { expect, test } from "@playwright/test";
import { paths } from "../paths";

for (const path of paths) {
  test(`VRT on ${path} page`, async ({ page }) => {
    await page.goto(path);
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
}
