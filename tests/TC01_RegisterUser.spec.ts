import { test, expect } from "@playwright/test";
test("TC01 - Register User", async ({ page }) => {
  const name = "Sreeja";
  const email = `sreeja${Date.now()}@test.com`;
  await page.goto("https://automationexercise.com");
  await expect(
    page.locator('img[alt="Website for automation practice"]'),
  ).toBeVisible();
  await page.locator('a[href="/login"]').click();
  await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();
  await page.fill('input[data-qa="signup-name"]', name);
  await page.fill('input[data-qa="signup-email"]', email);
  await page.locator('button[data-qa="signup-button"]').click();
  await expect(
    page.locator('b:has-text("Enter Account Information")'),
  ).toBeVisible();
  await page.check("#id_gender2");
  await page.fill("#password", "Password123");
  await page.selectOption("#days", "10");
  await page.selectOption("#months", "5");
  await page.selectOption("#years", "1998");
  await page.check("#newsletter");
  await page.check("#optin");
  await page.fill("#first_name", "Sreeja");
  await page.fill("#last_name", "Damera");
  await page.fill("#company", "Lavysoft");
  await page.fill("#address1", "123 xx yy");
  await page.fill("#address2", "230B");
  await page.selectOption("#country", "United States");
  await page.fill("#state", "Michigan");
  await page.fill("#city", "Canton");
  await page.fill("#zipcode", "48187");
  await page.fill("#mobile_number", "9876543210");
  await page.locator('button[data-qa="create-account"]').click();
  await expect(page.locator('b:has-text("Account Created!")')).toBeVisible();
  await page.locator('a[data-qa="continue-button"]').click();
  await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();
  await page.locator('a[href="/delete_account"]').click();
  await expect(page.locator('b:has-text("Account Deleted!")')).toBeVisible();
  await page.locator('a[data-qa="continue-button"]').click();
});
