import { test, expect } from "@playwright/test";

test("create & delete course", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("name...").click();
  await page.getByPlaceholder("name...").fill("name");
  await page.getByPlaceholder("description...").click();
  await page.getByPlaceholder("description...").fill("any desck");
  await page.getByRole("button", { name: "Add" }).click();
  await expect(page.getByText("nameany desckDelete")).toBeVisible();
  await page.getByRole("button", { name: "Delete" }).click();
});
