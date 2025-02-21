// tests/about.spec.js
const { test, expect } = require('@playwright/test');

test('should load the About page', async ({ page }) => {
  await page.goto('/about'); // Rutas relativas a la baseURL configurada
  const title = await page.textContent('h1');
  expect(title).toBe('About Us');
});