import { test, expect } from "@playwright/test";
import { createUser } from "../utils/userFactory";

test("TC02 - Login User with correct email and password", async ({ page }) => {
  const email = `sreeja${Date.now()}@test.com`;
  const password = "Password123";
  const name = "Sreeja";

  // Step 1: Create user (independent of TC01)
  await createUser(page, email, password, name);

  // Step 2: Logout (optional but recommended)
  await page.locator('a[href="/logout"]').click();

  // Step 3: Login
  await page.locator('a[href="/login"]').click();

  await page.fill('input[data-qa="login-email"]', email);
  await page.fill('input[data-qa="login-password"]', password);

  await page.locator('button[data-qa="login-button"]').click();

  await expect(page.getByText("Logged in as")).toBeVisible();
});
