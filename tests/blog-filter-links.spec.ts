import { test, expect } from "@playwright/test";

const BASE = process.env.PW_BASE_URL || "http://localhost:4173";

test("blog article links work after applying a category filter", async ({ page }) => {
  await page.goto(`${BASE}/blog`, { waitUntil: "domcontentloaded" });

  // Apply a category filter (should exist thanks to grammar blog posts)
  await page.getByRole("button", { name: "Grammaire - Temps" }).click();

  // Click a non-featured article card (the grid card wrapper link)
  const firstCardLink = page.locator("a[aria-label^=\"Lire l'article :\"]").first();
  await expect(firstCardLink).toBeVisible();
  await firstCardLink.click();

  await expect(page).toHaveURL(/\/blog\//);
  // Should render an article page, not the "not found" fallback
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByText("Article non trouvé")).toHaveCount(0);
});
