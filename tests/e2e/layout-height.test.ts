import { test, expect } from "@playwright/test";

test.use({
  viewport: { width: 390, height: 844 }, // Simula iPhone 12
  userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)...",
});

test("Testa scroll para detectar pulos de layout", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Rola até a seção about
  await page.locator("#about").scrollIntoViewIfNeeded();
  const aboutHeight = await page.evaluate(() => window.innerHeight);

  // Rola até a seção projects
  await page.locator("#projects").scrollIntoViewIfNeeded();
  const projectsHeight = await page.evaluate(() => window.innerHeight);

  // Valida inconsistências
  expect(aboutHeight).toBeCloseTo(projectsHeight, 0);
});

test("Testa scroll para baixo e depois para cima no layout", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");

  // Rola para baixo até a seção projects
  await page.locator("#projects").scrollIntoViewIfNeeded();
  const projectsHeight = await page.evaluate(() => window.innerHeight);

  // Rola para cima até a seção about
  await page.locator("#about").scrollIntoViewIfNeeded();
  const aboutHeight = await page.evaluate(() => window.innerHeight);

  // Valida inconsistências
  expect(projectsHeight).toBeCloseTo(aboutHeight, 0);
});
