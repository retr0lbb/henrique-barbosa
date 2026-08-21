# Tutorial: Google Tag Manager + Google Ads em Next.js (App Router)

## Requisitos

* Next.js App Router (qualquer versão recente)

---

## 1. Instalar o container do GTM

**Use apenas o GTM**, não o `gtag.js` direto — o GTM carrega GA4 e Google Ads internamente, configurados pela interface web, sem precisar mexer em código depois.

```tsx
// src/app/layout.tsx
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXX');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
```

> Substitua `GTM-XXXXXX` pelo container ID fornecido pela equipe de marketing/analytics.

---

## 2. Content Security Policy via `next.config.ts`

Dá sim para fazer sem middleware — só que sem middleware você abre mão do **nonce dinâmico por requisição** (isso exige algo gerado a cada request, e `next.config.ts` é estático, resolvido uma vez no build/start).

A alternativa simples e comum para GTM é uma **CSP por whitelist de domínio**, sem nonce. Menos "moderna" que nonce, mas funciona bem e é o suficiente pra a maioria dos sites — o GTM só consegue carregar recursos dos domínios do Google mesmo assim.

```typescript
// next.config.ts
import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://googleads.g.doubleclick.net;
  img-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://googleads.g.doubleclick.net;
  frame-src https://www.googletagmanager.com;
`.replace(/\n/g, " ").trim();

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  compiler: {
    removeConsole: false,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

**Domínios liberados e por quê:**

| Diretiva | Domínio | Motivo |
|---|---|---|
| `script-src` | `www.googletagmanager.com` | carrega o container e as tags configuradas nele |
| `connect-src` | `www.google-analytics.com`, `analytics.google.com` | envio de eventos do GA4 |
| `connect-src` / `img-src` | `googleads.g.doubleclick.net` | conversões do Google Ads |
| `img-src` | `www.google.com` | pixel de conversão do Google Ads |
| `frame-src` | `www.googletagmanager.com` | iframe do `<noscript>` |

⚠️ **Nota sobre `'unsafe-inline'`:** o script do GTM acima é inline (não vem de um arquivo `.js` externo), então sem nonce o `script-src` precisa de `'unsafe-inline'` para deixá-lo rodar. Isso enfraquece um pouco a CSP contra XSS via script inline injetado. Se isso for uma preocupação de segurança real pro projeto, aí sim vale migrar para nonce + middleware depois — mas para começar e não travar a implementação, essa abordagem funciona.

Se o site não usa CSP hoje, pule esta seção.

---

## 3. Função utilitária para disparar eventos

```ts
// src/lib/analytics.ts
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function trackEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}
```

O desenvolvedor só trabalha com **nomes de eventos**, nunca com IDs de GA4/Ads:

```
generate_lead
begin_checkout
purchase
subscription
view_project
```

---

## 4. Usando nos pontos de conversão

**Formulário:**

```tsx
"use client";
import { trackEvent } from "@/lib/analytics";

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  // ...envia o formulário...
  trackEvent("generate_lead", { form: "contact" });
}
```

**Compra / assinatura:**

```ts
trackEvent("purchase", {
  transaction_id: order.id, // único por transação
  value: order.total,
  currency: "BRL",
});
```

> Dispare `purchase`/`subscription` **só depois da confirmação do pagamento pelo servidor** — nunca no clique do botão "Comprar" ou "Assinar".

```
Next.js → dataLayer → Google Tag Manager → GA4 / Google Ads / outras ferramentas
```

---

## 5. Responsabilidades

**Desenvolvimento:**
- Instalar o container do GTM
- Configurar CSP no `next.config.ts`, se aplicável
- Criar e disparar eventos com `trackEvent`
- Garantir que `purchase`/`subscription` só disparem após confirmação no servidor

**Marketing / Analytics:**
- Configurar GA4 e Google Ads dentro do GTM
- Criar triggers a partir dos eventos do `dataLayer`
- Configurar valores de conversão e campanhas

**Regra principal:** dev implementa eventos; marketing decide para onde eles vão.