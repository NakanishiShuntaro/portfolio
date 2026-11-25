---
title: TBNN / LES
description: Data-driven nonlinear subgrid-scale models for turbulent flows
img: /assets/img/turbulence.svg
importance: 1
selected: true
period: April 2026 – Present
affiliation: Kyushu University · Undergraduate Researcher
advisor: Prof. Kenichi Abe
---

## Learning turbulence

I investigate nonlinear subgrid-scale (SGS) models for large-eddy simulation (LES) using tensor basis neural networks (TBNNs).

In *a posteriori* simulations of channel flow at Re<sub>τ</sub> = 395, using the first four of Pope's tensor bases achieved accuracy comparable to using all ten, reducing velocity overprediction primarily in the buffer and outer layers relative to conventional isotropic models.

I am investigating T<sup>(6)</sup> as a potential extension of conventional strain-rate-tensor-based SGS models, motivated by its linear dependence on the strain-rate tensor in laminar channel flow.

By learning only the coefficient of the isotropic tensor T<sup>(6)</sup> with a composite loss that equally evaluates normalized anisotropy and physical stress scale, mean-velocity relative L<sub>2</sub> error against DNS was reduced from **19.54% to 3.73%**, without incorporating anisotropic tensor terms.

### Conference presentation

*A Study on Nonlinear SGS Models for LES Based on the Tensor Basis Neural Network Using Machine Learning*, JSASS Western Branch Conference, Fukuoka, 20 November 2026 (Oral presentation).

<div class="btn-row">
  <a class="btn" href="https://branch.jsass.or.jp/west/?p=1919" target="_blank" rel="noopener noreferrer">Conference</a>
  <a class="btn" href="/portfolio/publications/">Presentations</a>
</div>

### Research slides

<div class="btn-row">
  <a class="btn btn-primary" href="/portfolio/assets/slides/tbnn-les/research_slides.pdf" target="_blank" rel="noopener noreferrer">View PDF</a>
</div>

<figure class="project-figure">
  <img src="/portfolio/assets/img/turbulence.svg" alt="Conceptual project schematic" loading="lazy" />
  <figcaption>Conceptual schematic; not a simulation result or experimental measurement.</figcaption>
</figure>
