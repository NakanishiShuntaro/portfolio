# Shuntaro Nakanishi — academic website prototype

Adapted from https://github.com/kotakondo/kotakondo.github.io (source commit `39d0e23f2d5974aca30bef3a13522c4c833e0ee3`), using its Jekyll/al-folio layouts, styles, and scripts. Theme license: [LICENSE](LICENSE).

This prototype lives on `prototype/academic-homepage`. Personal content is based on the existing portfolio and the September 28, 2026 CV in the adjacent `cv` folder. It includes About, Projects, Publications (conference presentations), CV, and news. Upcoming work is explicitly labeled. Project diagrams are conceptual illustrations.

## Preview

Use Ruby 3.3 or newer with Bundler. On this Mac, Homebrew Ruby is available in `/opt/homebrew/opt/ruby/bin`; add it to `PATH` before running these commands:

```sh
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 8843
```

Open http://127.0.0.1:8843/portfolio/ . The configured `/portfolio` base path matches the existing GitHub Pages repository.

## Edit content

- `_pages/about.md`: introduction and profile
- `_config.yml`: name, contact links, theme and site URL
- `_projects/*.md`: project pages
- `_news/*.md`: updates
- `_bibliography/papers.bib`: presentations; keep scheduled status in `note`
- `_data/cv.yml`: CV content
- `assets/pdf/Shuntaro_Nakanishi_CV.pdf`: downloadable CV

## Build

```sh
bundle exec jekyll build
```

The GitHub workflow only validates and uploads a build artifact. It does not publish the prototype. Publishing this Jekyll site with custom plugins will require a GitHub Pages Actions deployment workflow; the default GitHub Pages Jekyll build does not run the full theme plugin set.
