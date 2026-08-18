# Tutorial 


## Requisitos
- nextjs v 16.0.x ou superior (tambem funciona em nextjs v.15.0.x com app router)
- nodejs lts ou node v 24.0.x


# App router v16

## 1. Crie o script em posição global
procure em sua aplicação um ponto de carregamento global geralmente o arquivo `src/app/layout.tsx`. mas em casos de por exemplo internacionalização usando directory-based-translation podem se ter uma pasta de pivos como `[lang]`.

### 1.1 Colar o script
ao estar em um ponto de carregamento global podemos carregar esse script usando a tag `<Script>` do nextjs isso garante a melhor integração possivel e permite tambem não deixar mais pesado o content-paint
Também é recomendado separar os 2 codigos pois um requer um src externo e é de boa pratica separar isso em 2 tags scripts
```tsx
        <Script
          id="google-adds-init"
          async
          src="https://www.googletagmanager.com/gtag/js?id=SUA_CHAVE"
          strategy="afterInteractive"
        />

        <Script id="google-adds-tags" strategy="afterInteractive">
          {`
          <!-- Google tag (gtag.js) -->
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'SUA CHAVE');
            </script>
          `}
        </Script>
```

> Lembre-se de substituir SUA_CHAVE pela sua chave do google adds que iremos disponibilizar.

### 1.2 Criar função para disparar eventos.
Apos carregar o script globalmente vamos criar uma util para facilitar a criação de tags para o google tags. É preferivel criar um arquivo dentro de libs para assim depois re-usar de forma eficiente.

```tsx
//src/lib/google-ads.ts
```
