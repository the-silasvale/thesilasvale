# Silas Vale — Official Author Website

The official, highly immersive author website for **Silas Vale** — featuring dark psychological thrillers, intense medical dramas, and obsessive dark romance. 

This project goes beyond a standard landing page. It is a cinematic, editorial experience designed to pull readers into the dark, obsessive worlds of Silas Vale's books through high-end typography, dynamic scrolling, and ambient parallax effects.

## The Experience

- **Cinematic Hero Carousel**: A fixed, infinite-scrolling, dual-track marquee of book covers that operates entirely in the background, visible through the transparent Hero and Author sections.
- **Editorial Typography**: A striking visual balance using modern typographic scales, pairing *Cormorant Garamond* (serif) with *Jost* (sans-serif).
- **The Blackwood Saga (Horizontal Scroll)**: An immersive horizontal pinning scroll section powered by GSAP, allowing users to scroll sideways through the sprawling 7-book thriller saga.
- **Dynamic Series Grouping**: Trilogy collections (like *The Residency Triangle* and *Eternal Claim*) are displayed using a staggered, overlapping grid layout that scales beautifully.
- **Direct Amazon Integration**: Every single book features an individual, highly visible purchase button linked directly to its specific Amazon ASIN.

## The Library

The site currently showcases all 15 of Silas Vale's published works:

- **The Blackwood Saga** (7 Books) — Psychological Thriller
- **The Residency Triangle** (3 Books) — Medical Drama
- **Eternal Claim** (3 Books) — Dark Romance
- **The Sovereignty of the Flesh** (1 Book) — Erotic Dark Romance
- **Standalone Works** — *Good Girl*

## Tech Stack

- **HTML5 & CSS3**: Utilizes advanced CSS features like CSS Grid, custom properties, viewport clamps (`clamp()`), and dynamic `z-index` layering.
- **Vanilla JavaScript**: Lightweight custom scripts for nav reveals and scroll triggers.
- **GSAP (GreenSock)**: The engine behind the horizontal scrolling track, the infinite hero marquee, and the precise scroll-based triggers.

## Inspiration & AI Agentic Skills

This project was engineered with the assistance of advanced agentic AI. To achieve this premium, anti-generic aesthetic, the AI was equipped with specialized design "skills" derived from the following industry-leading repositories:

- [**Taste Skill (`leonxlnx/taste-skill`)**](https://github.com/leonxlnx/taste-skill): Enforced the core high-end visual design principles, guaranteeing cinematic spacing, strict typography rules, and an elegant dark-mode aesthetic that refuses to look like a generic template.
- [**Impeccable (`pbakaus/impeccable`)**](https://github.com/pbakaus/impeccable): Provided the foundation for hardware-accelerated scroll physics, ensuring the background marquee and horizontal scroll remain flawlessly smooth.
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
