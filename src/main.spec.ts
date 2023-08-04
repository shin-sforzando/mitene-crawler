// @ts-check

import { expect, test } from "@playwright/test";

test("has URL", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveURL("https://mitene.us/");
});
