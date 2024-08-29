import { test, expect } from "@playwright/test";

// temp test to do at least smth meaningfull
test("navigation to login page", async ({ page }) => {
  await page.goto("/");

  await page
    .getByRole("button", { name: "Continue without accepting" })
    .click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Log in" })
    .click();

  await expect(page).toHaveURL("https://accounts.evernote.com/login");
});
