import { test, expect } from "@playwright/test";
import { createUser } from "../utils/userFactory";

test("TC04 - Logout User", async ({ page }) => {
  const email = `sreeja${Date.now()}@test.com`;
  const password = "Password123";
  const name = "Sreeja";

  // 1–7: Create user (already logs in)
  await createUser(page, email, password, name);

  // 8. Verify logged in
  await expect(page.getByText("Logged in as")).toBeVisible();

  // 9. Click Logout
  await page.locator('a[href="/logout"]').click();

  // 10. Verify navigation to login page
  await expect(page).toHaveURL(/login/);
  await expect(page.getByText("Login to your account")).toBeVisible();
});
