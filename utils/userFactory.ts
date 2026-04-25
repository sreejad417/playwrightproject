import { Page } from "@playwright/test";

export async function createUser(
  page: Page,
  email: string,
  password: string,
  name: string,
) {
  await page.goto("https://automationexercise.com");

  await page.locator('a[href="/login"]').click();

  await page.fill('input[data-qa="signup-name"]', name);
  await page.fill('input[data-qa="signup-email"]', email);

  await page.locator('button[data-qa="signup-button"]').click();

  await page.check("#id_gender2");
  await page.fill("#password", password);
  await page.selectOption("#days", "10");
  await page.selectOption("#months", "5");
  await page.selectOption("#years", "1998");

  await page.check("#newsletter");
  await page.check("#optin");

  await page.fill("#first_name", name);
  await page.fill("#last_name", "Test");
  await page.fill("#address1", "123 Street");
  await page.selectOption("#country", "United States");
  await page.fill("#state", "MI");
  await page.fill("#city", "Canton");
  await page.fill("#zipcode", "48187");
  await page.fill("#mobile_number", "9876543210");

  await page.locator('button[data-qa="create-account"]').click();

  await page.locator('a[data-qa="continue-button"]').click();
}
