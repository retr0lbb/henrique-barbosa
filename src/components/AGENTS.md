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

1. **useInView**: Ao usar `framer-motion` com `useInView`, sempre usar `once: true` para evitar pulos de layout quando elementos saem da viewport
2. **Barrel files**: Sempre criar `index.ts` para exports organizados
3. **Nomenclatura**: PascalCase para componentes, camelCase para funções utilitárias
