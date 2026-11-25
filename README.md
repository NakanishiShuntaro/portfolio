# Shuntaro Nakanishi — Academic Portfolio

Academic website built with [Astro](https://astro.build/) and deployed to GitHub Pages (`https://nakanishishuntaro.github.io/portfolio/`).

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Output is generated in `dist/`.

## Updating Content

- **CV PDF**: Built locally from `/Users/a81802/Documents/30_Applications/graduate-school/cv/Shuntaro_Nakanishi_CV_updated_*.tex` and copied to `public/assets/pdf/Shuntaro_Nakanishi_CV.pdf` via:
  ```sh
  /Users/a81802/Documents/30_Applications/graduate-school/cv/publish_cv_to_portfolio.sh
  # or add --push to commit & push the updated PDF directly
  ```
- **Web CV**: `src/data/cv.json`
- **Publications / Presentations**: `src/data/publications.ts`
- **News**: `src/data/news.ts`
- **Projects**: `src/content/projects/*.md`
- **Research Slides**: `public/assets/slides/tbnn-les/research_slides.pdf`

## Deployment

Pushing to `main` triggers `.github/workflows/build.yml`, which builds `dist/` and deploys to GitHub Pages.
