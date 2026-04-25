import { test, expect } from "@playwright/test";

test("TC03 - Login with incorrect email and password", async ({ page }) => {
  const invalidEmail = "wrong@test.com";
  const invalidPassword = "WrongPassword123";

  await page.goto("https://automationexercise.com");

  await expect(page).toHaveURL("https://automationexercise.com/");

  await page.locator('a[href="/login"]').click();

  await expect(page.getByText("Login to your account")).toBeVisible();

  await page.fill('input[data-qa="login-email"]', invalidEmail);
  await page.fill('input[data-qa="login-password"]', invalidPassword);

  await page.locator('button[data-qa="login-button"]').click();

  await expect(
    page.locator('p:has-text("Your email or password is incorrect!")'),
  ).toBeVisible();
});
