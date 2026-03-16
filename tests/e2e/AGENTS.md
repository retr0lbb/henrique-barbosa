# Playwright Tests para Bugs de Layout em Mobile

## Objetivo
Testar e verificar pulos de layout causados por alterações no Dynamic Viewport Height (100dvh) usando Playwright.

## Localização
Os testes se encontram na pasta `tests/e2e` para garantir que estão segregados do código de produção e focados em testes end-to-end (E2E).

## Testes

### 1. Funcionalidades testadas
- **Scroll nas seções:** Verificar o comportamento ao navegar entre `#about` e `#projects`.
- **Validação de altura:** Monitorar alterações da altura do viewport durante o scroll.
- **Captura visual:** Identificar alterações inesperadas através de screenshots.

### 2. Ferramentas
- **Dispositivo simulado:** Configurado como iPhone 12 com viewport dinâmico.
- **Teste automatizado:** Verificar a consistência da altura de tela durante o scroll.

### 3. Implementação

#### Código Base
```typescript
import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 390, height: 844 }, // Simula iPhone 12
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)...'
});

test('Testa scroll para detectar pulos de layout', async ({ page }) => {
  // Navega para o site
  await page.goto('http://localhost:3000');

  // Rola até a seção about
  await page.locator('#about').scrollIntoViewIfNeeded();
  const aboutHeight = await page.evaluate(() => window.innerHeight);

  // Rola até a seção projects
  await page.locator('#projects').scrollIntoViewIfNeeded();
  const projectsHeight = await page.evaluate(() => window.innerHeight);

  // Valida inconsistências
  expect(aboutHeight).toBeCloseTo(projectsHeight, 0);
});
```

### 4. Organização
- Criado no diretório `tests/e2e/layout-height.test.ts`.
- Logs disponíveis no terminal após execução.

### 5. Requisitos de Execução
Certifique-se de ter o Playwright instalado:
```bash
npm install @playwright/test
```
Rodar os testes:
```bash
npx playwright test
```

### Autor
Este documento foi gerado automaticamente para documentar os padrões e práticas implementadas com o Playwright.