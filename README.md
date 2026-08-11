# Silas Vale — Author Website

The official author website for **Silas Vale** — dark psychological thrillers, intense medical dramas, and obsessive dark romance.

## Overview

A single-page static site built with vanilla HTML, CSS, and JavaScript. It showcases all 15 of Silas Vale's published works across four series, links every book to its Amazon product page, and provides Goodreads and social connections.

## Features

- **Hero** — name, tagline, and quick links to Goodreads and Amazon
- **About** — author bio featuring the Silas Vale logo
- **Series** — explore the four worlds: The Blackwood Saga, The Residency Triangle, Eternal Claim, and The Sovereignty of the Flesh
- **Library** — all 15 books grouped by series, each with a synopsis hook, its cover, and a **Buy on Amazon** button
- **Connect** — Goodreads, Amazon Author Page, and Twitter links
- **Responsive** — fluid layout with breakpoints at 1020px, 820px, and 520px
- **Interactions** — scroll-aware nav, mobile menu, and scroll-reveal animations

## Series

| Series | Books | Genre |
| --- | --- | --- |
| Eternal Claim | 3 | Dark Romance |
| The Sovereignty of the Flesh | 1 (+ standalone) | Erotic Dark Romance |
| The Residency Triangle | 3 | Medical Drama |
| The Blackwood Saga | 7 | Psychological Thriller |

## Tech Stack

- Plain HTML5, CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (no frameworks, no build step)
- Google Fonts: Cormorant Garamond + Jost

## Project Structure

```
.
├── index.html          # Single-page site markup
├── css/
│   └── styles.css      # All styling (dark theme, responsive)
├── js/
│   └── main.js         # Nav, mobile menu, reveal-on-scroll
└── assets/
    └── covers/         # Book cover images and logo
```

## Getting Started

Serve the folder with any static file server:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Links

- [Goodreads Author Page](https://www.goodreads.com/author/show/69683490.Silas_Vale)
- [Amazon Author Store](https://www.amazon.com/stores/author/B0GTPD8S6P/allbooks)
- [Twitter — @thesilasvale](https://twitter.com/thesilasvale)
