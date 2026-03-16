# Padrão de Seções

## Estrutura

Cada seção é um arquivo único que exporta um componente React.

### Estrutura de Arquivos

```
src/sections/
├── hero-section.tsx
├── about-section.tsx
├── projects-section.tsx
└── contact-section.tsx
```

### Exemplo de Seção

```tsx
import type { Dicitionary } from "@/app/[lang]/dictionaries";
import type { ColorOfDivision } from "@/components/divider";

interface SectionProps {
  dict: Dicitionary;
  color: ColorOfDivision;
}

export async function SectionName({ dict, color }: SectionProps) {
  return (
    <section id="section-id" className="...">
      {/* conteúdo */}
    </section>
  );
}
```

## Regras

1. **Nome do arquivo**: `[nome]-section.tsx` (kebab-case)
2. **ID da section**: Sempre adicionar `id="nome-da-section"` no elemento `<section>`
3. **Props padrão**:
   - `dict`: Dicionário de internacionalização
   - `color`: Cor do divisor (para uso com componente `Divider`)
4. **Server vs Client**:
   - Usar `async function` se não houver estado (server component)
   - Adicionar `"use client"` se usar hooks ou estado
5. **Estilização**: Usar Tailwind CSS com classes de cores `zinc-*`
6. **Altura mínima**: Usar `min-h-svh` para seções que devem ter pelo menos a altura da viewport
