# GSAP Implementation Plan - Henrique's Portfolio

## Overview

Replace **framer-motion** with **GSAP** for animations in this Next.js 16 / React 19 portfolio. GSAP handles micro-interactions, scroll-triggered animations, and page transitions.

---

## Phase 1: Installation & Setup ✅

### 1.1 Install GSAP ✅
```bash
npm install gsap
```

### 1.2 Create Plugin Setup ✅
**File:** `src/utils/gsap-setup.ts`
```ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
```

### 1.3 Create React Hook ✅
**File:** `src/hooks/use-gsap.ts`
- Wrapper hook for GSAP + ScrollTrigger integration with React
- Handles cleanup on unmount
- Provides context-aware animations

---

## Phase 2: Reusable Animation Utilities ✅

### 2.1 Core Animations ✅
**File:** `src/utils/animations.ts`

| Function | Description |
|----------|-------------|
| `fadeIn()` | Opacity transition (0 → 1) |
| `slideIn()` | Directional slide with fade |
| `staggerReveal()` | Sequential reveals for lists/cards |
| `scaleIn()` | Scale animation (0.8 → 1) with fade |

### 2.2 Micro-interaction Helpers ✅
- `hoverScale()` - Button/card hover effects
- `pressEffect()` - Click/active states

---

## Phase 3: Section-by-Section Migration ✅

### 3.1 Hero Section (`hero-section.tsx`) ✅
- **Priority:** High ✅
- **Animations:** 
  - Timeline-based entrance with orchestrated delays ✅
  - Name → divider → subtitle sequence ✅

### 3.2 About Section (`about-section.tsx`) ✅
- **Priority:** Medium ✅
- **Animations:**
  - Scroll-triggered content reveals ✅
  - Staggered text blocks ✅

### 3.3 Projects Section (`projects-section.tsx`) ✅
- **Priority:** Medium ✅
- **Animations:**
  - Card hover effects (scale) ✅
  - Staggered grid reveal on scroll ✅
  - Image reveal on hover ✅

### 3.4 Contact Section (`contact-section.tsx`) ✅
- **Priority:** Low ✅
- **Animations:**
  - Contact item hover effects ✅
  - Slide-in reveal on scroll ✅

### Component Updates ✅
- **Button** (`src/components/button/index.tsx`) - Press effect with GSAP
- **ProjectCard** (`src/components/projectCard/root.tsx`) - Hover scale effect
- **ContactItem** (`src/components/contactItem/index.tsx`) - Animated hover states

---

## Phase 4: Page Transitions ✅

Page transitions are handled via Next.js View Transitions API (enabled in `next.config.ts`).

### 4.1 Route Transitions
- Uses native browser View Transitions API
- Configured in `next.config.ts`:
```ts
experimental: {
  viewTransition: true,
}
```

---

## Phase 5: Cleanup ✅

### 5.1 Remove framer-motion ✅
```bash
npm uninstall framer-motion
```

### 5.2 Updated Documentation ✅
- Updated `src/components/AGENTS.md` to reflect GSAP patterns
- Removed framer-motion references from component guidelines

---

## File Structure (Final)

```
src/
├── hooks/
│   └── use-gsap.ts          # ✅ NEW: React GSAP hook
├── utils/
│   ├── gsap-setup.ts       # ✅ NEW: Plugin registration
│   └── animations.ts       # ✅ NEW: Reusable animations
├── components/
│   ├── button/             # ✅ MODIFIED: GSAP press effects
│   ├── projectCard/        # ✅ MODIFIED: GSAP hover effects
│   └── contactItem/        # ✅ MODIFIED: GSAP hover effects
├── sections/
│   ├── hero-section.tsx    # ✅ MODIFIED
│   ├── about-section.tsx    # ✅ MODIFIED
│   ├── projects-section.tsx # ✅ MODIFIED
│   └── contact-section.tsx  # ✅ MODIFIED
```

---

## Installed GSAP Plugins

| Plugin | License | Status |
|--------|---------|--------|
| **ScrollTrigger** | Free | ✅ Installed |
| **Core** | Free | ✅ Installed |

---

## Animation Style Guide

- **Entrance timing:** 0.4s - 0.8s duration
- **Easing:** `power2.out` for entrances, `power2.inOut` for exits
- **Stagger:** 0.05s - 0.15s between elements
- **Scroll triggers:** Start at 80% viewport, end at 20%

---

## Implementation Complete ✅

1. ✅ Install GSAP
2. ✅ Create setup files (gsap-setup.ts, use-gsap.ts)
3. ✅ Build animation utilities
4. ✅ Migrate Hero section
5. ✅ Migrate About section
6. ✅ Migrate Projects section
7. ✅ Migrate Contact section
8. ✅ Migrate component animations (Button, ProjectCard, ContactItem)
9. ✅ Configure page transitions (View Transitions API)
10. ✅ Remove framer-motion
