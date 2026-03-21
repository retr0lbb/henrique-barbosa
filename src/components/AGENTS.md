# Padrão de Componentes

## Estrutura

Cada componente deve seguir o padrão de barrel file (`index.ts`) exports.

### Estrutura de Arquivos

```
src/components/[nome-componente]/
├── index.ts           # Barrel file com exports
├── root.tsx           # Componente principal
└── [subcomponente].tsx # Subcomponentes opcionais
```

### Exemplo de Barrel File (`index.ts`)

```typescript
import { Root } from "./root";
import { Tags } from "./tags";

export const ProjectCard = { Root, Tag: Tags };
```

### Exemplo de Componente (`root.tsx`)

- Deve usar `"use client"` se usar hooks (useState, useEffect, useRef)
- Preferir functional components
- Usar TypeScript com interfaces para props
- Usar Tailwind CSS para estilos

## Regras

1. **GSAP ScrollTrigger**: Sempre usar `gsap.context()` para garantir cleanup adequado e evitar memory leaks
2. **Barrel files**: Sempre criar `index.ts` para exports organizados
3. **Nomenclatura**: PascalCase para componentes, camelCase para funções utilitárias
4. **Client Components**: Componentes que usam GSAP devem ter `"use client"` no topo do arquivo

## GSAP Pattern

```typescript
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function MyComponent() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // GSAP animations here
    }, ref);

    return () => ctx.revert();
  }, []);

  return <section ref={ref}>...</section>;
}
```
