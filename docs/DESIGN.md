---
name: Verum Luxury FinTech
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#d0c4bf'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#998f8a'
  outline-variant: '#4d4541'
  surface-tint: '#cbc5c3'
  primary: '#cbc5c3'
  on-primary: '#33302e'
  primary-container: '#0d0b0a'
  on-primary-container: '#7e7977'
  inverse-primary: '#615d5c'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#ccc5c3'
  on-tertiary: '#342f2e'
  tertiary-container: '#0e0b0a'
  on-tertiary-container: '#7f7977'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e8e1df'
  primary-fixed-dim: '#cbc5c3'
  on-primary-fixed: '#1d1b1a'
  on-primary-fixed-variant: '#494645'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e9e1de'
  tertiary-fixed-dim: '#ccc5c3'
  on-tertiary-fixed: '#1e1b1a'
  on-tertiary-fixed-variant: '#4a4644'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
---

## Brand & Style
The brand personality is rooted in "Digital Sovereignty and Opulence." This design system targets high-net-worth individuals within the Web3 ecosystem, bridging the gap between traditional private banking and decentralized finance. The emotional response is one of absolute security, exclusivity, and quiet confidence.

The design style is a hybrid of **Glassmorphism** and **High-End Minimalism**. It utilizes deep, dark mahogany tones to provide a sense of stability, contrasted with ethereal, translucent glass layers that represent the transparency of the blockchain. Gold is used sparingly as a "high-yield" highlight, signifying value and premium status. The interface prioritizes depth and light-play to create a tactile, physical feeling in a digital environment.

## Colors
The palette is anchored in **Mahogany (#0D0B0A)** for the primary canvas, providing a richer, warmer depth than pure black. **Charcoal (#120F0E)** serves as the elevated surface color for containers and cards.

**Champagne Gold (#D4AF37)** is the primary accent, reserved for critical calls to action, active states, and success indicators. For the light-mode experience (or translucent overlays), a **Frosted White Glass** effect is employed to maintain legibility while allowing the dark background depth to bleed through. This creates a "monocle" effect where financial data feels projected onto a premium lens.

## Typography
Typography follows a "Classic Editorial" structure. **Playfair Display** provides an authoritative, literary feel for all major headings and financial milestones. To maintain modern utility and readability for complex transaction data, **Inter** is used for all body text and UI labels.

Large headlines should use tight letter-spacing to feel more "tailored." For wallet addresses and transaction hashes, use the `data-mono` style which utilizes Inter's high-legibility numerals to ensure financial precision.

## Layout & Spacing
The layout uses a **12-column fixed grid** on desktop to evoke the feeling of a structured financial ledger. Generous white space (or "empty mahogany space") is critical to the luxury aesthetic; content should never feel cramped.

- **Desktop:** 80px margins with 24px gutters. Content is centered within a 1440px container.
- **Tablet:** 40px margins, transitioning to an 8-column grid.
- **Mobile:** 20px margins, 4-column grid. Large serifs scale down significantly to ensure elegant line breaks.

Vertical rhythm is strictly based on 8px increments, ensuring that even complex data tables feel balanced and intentional.

## Elevation & Depth
This design system rejects traditional drop shadows in favor of **Tonal Layering** and **Backdrop Blurs**.

1.  **Base Layer:** Solid Mahogany (#0D0B0A).
2.  **Mid Layer (Plates):** Charcoal (#120F0E) with a subtle 1px inner gold stroke (10% opacity) to define edges.
3.  **Top Layer (Glass):** White glass (rgba(255,255,255, 0.05)) with a 12px backdrop blur and a crisp 1px border.

Depth is further enhanced by 3D micro-shadows on buttons, giving them a "pressed into the leather" or "raised from the glass" appearance.

## Shapes
Shapes are "Architectural Soft." We use a **Soft (0.25rem)** base radius for standard inputs and buttons to maintain a professional, sharp-edged finance look, while larger containers use **rounded-lg (0.5rem)** to prevent the UI from feeling too aggressive. Gold borders on interactive elements should be exactly 1px to maintain a "hairline" precision.

## Components
- **Buttons:** Primary buttons are Champagne Gold with black text. They feature a subtle metallic gradient and a slight outer glow on hover. Secondary buttons are "Ghost" style with 1px gold borders.
- **Frosted Glass Cards:** Used for portfolio summaries. They must have `backdrop-filter: blur(12px)` and a subtle 1px border (rgba(255,255,255,0.1)).
- **Lists & Data Rows:** Use thin Charcoal separators. On hover, rows should transition to a slightly lighter Mahogany to indicate interactivity.
- **Accordions:** FAQ and Detail sections use a minimalist chevron. When expanded, the container background shifts to the frosted glass style.
- **Inputs:** Dark backgrounds with bottom-only gold borders that "fill" across the X-axis when focused.
- **Wallet Status:** A custom component featuring a pulsing gold dot (online) or a dim gray dot (offline) housed in a glass pill.