import { test, expect } from "@playwright/test"

test("verifies checkout button is present and clickable", async ({ page }) => {
  await page.goto("./")

  const checkoutButton = page.locator('button:has-text("checkout")')
  expect(await checkoutButton.isVisible()).toBe(true)

  await checkoutButton.click()
})
