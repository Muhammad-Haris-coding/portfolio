# Muhammad Haris — Portfolio

Personal portfolio of **Muhammad Haris**, an AI undergraduate at UET Mardan working in
**Computer Vision & Machine Learning** (Python, PyTorch, OpenCV, YOLO).

- GitHub: https://github.com/Muhammad-Haris-coding
- LinkedIn: https://www.linkedin.com/in/muhammadharisyousafzai

## About this site

A single-page portfolio presenting verified information only: education at UET Mardan,
a Deep Learning internship at AlgoHub SMC Pvt. Ltd., and six real projects from my
public GitHub repositories — CLIP visual search with FAISS, a smart agriculture
monitoring system, 3D-aware visual spatial analysis, Depth Anything V2 inference,
the AlgoHub internship project collection, and DETR object detection.

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion

## Run locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production (outputs to dist/)
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Structure

- `src/data/portfolio.ts` — all personal content (profile, experience, education,
  skills, projects, links) in one place
- `src/components/sections/` — page sections: Hero, About, Experience, Education,
  Skills, Projects, Contact
- `src/components/layout/` — Navbar and loading screen
- `public/Muhammad-Haris-CV.txt` — downloadable plain-text CV (served at
  `/Muhammad-Haris-CV.txt`)

## Deployment

The site is a standard Vite production build. Build with `npm run build` and serve the
`dist/` folder with any static host. No environment variables are required, and all
routes are in-page anchors (`#about`, `#experience`, `#education`, `#skills`,
`#projects`, `#contact`) on the single page.
