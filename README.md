# Silas Vale — Official Author Website

The official, highly immersive author website for **Silas Vale** — featuring dark psychological thrillers, intense medical dramas, and obsessive dark romance. 

This project goes beyond a standard landing page. It is a cinematic, editorial experience designed to pull readers into the dark, obsessive worlds of Silas Vale's books through high-end typography, dynamic scrolling, and ambient parallax effects.

## The Experience

- **Cinematic Hero Carousel**: A fixed, infinite-scrolling, dual-track marquee of book covers that operates entirely in the background, visible through the transparent Hero and Author sections.
- **Editorial Typography**: A striking visual balance using modern typographic scales, pairing *Cormorant Garamond* (serif) with *Jost* (sans-serif).
- **Responsive Layout Architecture**: 
  - **Desktop**: Features a gorgeous, overlapping cascading grid layout (a "card fan") for long series, allowing for premium visual density.
  - **Mobile**: Features a silky-smooth, native CSS horizontal scroll with scroll-snapping (`scroll-snap-type: x mandatory`), delivering a flawless and intuitive touch experience without relying on heavy JavaScript overrides.
- **Frosted Glass Navigation**: A sleek, dark navigation bar utilizing `backdrop-filter: blur()` for a premium frosted glass effect, complete with an elegant, responsive dropdown menu.
- **Direct Amazon Integration**: Every single book features an individual, highly visible purchase button linked directly to its specific Amazon ASIN.

## The Library

The site currently showcases all 15 of Silas Vale's published works:

### The Blackwood Saga (Psychological Thriller)
* *Induction: The Veritas Protocol*
* *The Blind Study: Isolation's Grip*
* *The Transference: The Crossing*
* *The Dissociation: The Fracture*
* *The Retrograde: The Mirror of Years*
* *The Rebellion: The Compliant Trap*
* *The Termination: The Escape*

### The Residency Triangle (Medical Drama)
* *The Blind Spot: The Residency Triangle: Book One*
* *The Night Shift: The Residency Triangle: Book Two*
* *The Triage: The Residency Triangle: Book Three*

### Eternal Claim (Dark Romance)
* *Veiled Obsession: Eternal Claim Book One*
* *Bound in Shadows: Eternal Claim Book Two*
* *Eternal Claim: Eternal Claim Book Three*

### The Sovereignty of the Flesh (Erotic Dark Romance)
* *Staycation: The Room Between Us*

### Standalone Books
* *Good Girl*

## Tech Stack

- **HTML5 & CSS3**: Utilizes advanced modern CSS features including CSS Grid, Flexbox, viewport clamps (`clamp()`), native scroll-snapping, and dynamic `z-index` and `order` layering.
- **Vanilla JavaScript**: Lightweight custom scripts for nav reveals and scroll triggers.
- **GSAP (GreenSock)**: The engine powering the infinite hero marquee and high-performance, hardware-accelerated animations.

## Inspiration & AI Agentic Skills

This project was engineered with the assistance of advanced agentic AI. To achieve this premium, anti-generic aesthetic, the AI was equipped with specialized design "skills" derived from the following industry-leading repositories:

- [**Taste Skill (`leonxlnx/taste-skill`)**](https://github.com/leonxlnx/taste-skill): Enforced the core high-end visual design principles, guaranteeing cinematic spacing, strict typography rules, and an elegant dark-mode aesthetic that refuses to look like a generic template.
- [**Impeccable (`pbakaus/impeccable`)**](https://github.com/pbakaus/impeccable): Provided the foundation for hardware-accelerated scrolling and performant animations.
- [**Design Skills (`emilkowalski/skills`)**](https://github.com/emilkowalski/skills): Influenced the UI polish, micro-animations, and the invisible details that make the interface feel incredibly responsive and premium.

## Getting Started

Because there is no build step or package bundler, the site can be run immediately on any local static server:

```bash
# Using Python
python3 -m http.server 8080

# Or using Node.js/npx
npx serve .
```

Then simply open `http://localhost:8080` in your browser.

## Connect

- [Amazon Author Store](https://www.amazon.com/stores/author/B0GTPD8S6P/allbooks)
- [Goodreads Author Page](https://www.goodreads.com/author/show/69683490.Silas_Vale)
- [Twitter / X](https://twitter.com/thesilasvale)
