---
title: TBNN / LES
description: Data-driven nonlinear subgrid-scale models for turbulent channel-flow LES
img: /assets/img/tbnn-profiles.png
importance: 1
selected: true
period: April 2026 – Present
affiliation: Kyushu University · Undergraduate Researcher
advisor: Prof. Kenichi Abe
---

<figure class="project-figure">
  <img src="/portfolio/assets/img/tbnn-results.png" alt="A posteriori channel-flow LES profiles at Re_tau = 395 comparing T^(1), T^(1)–T^(4), T^(1)–T^(10), and DNS reference data" />
  <figcaption><em>A posteriori</em> turbulent channel-flow LES at Re<sub>τ</sub> = 395 comparing TBNN basis configurations against DNS (Moser, Kim &amp; Mansour, 1999).</figcaption>
</figure>

## Learning turbulence

I investigate nonlinear subgrid-scale (SGS) models for large-eddy simulation (LES) using tensor basis neural networks (TBNNs) trained in PyTorch and coupled into OpenFOAM (C++) via LibTorch.

In *a posteriori* simulations of channel flow at Re<sub>τ</sub> = 395, using the first four of Pope's tensor bases achieved mean velocity and total Reynolds shear stress profiles comparable to using all ten, reducing velocity overprediction primarily in the buffer and outer layers relative to conventional isotropic models.

Using a physical-role grouping analysis of the basis tensors, dominant groups maintained closely aligned time-averaged contributions across both bases (cosine similarity 0.984–0.998) despite substantial variations in individual learned coefficients.

### Conference presentation

*A Study on Nonlinear SGS Models for LES Based on the Tensor Basis Neural Network Using Machine Learning*, JSASS Western Branch Conference, Fukuoka, 20 November 2026 (Oral presentation).

<div class="btn-row">
  <a class="btn btn-primary" href="/portfolio/assets/slides/tbnn-les/research_slides.pdf" target="_blank" rel="noopener noreferrer">Research Slides (PDF)</a>
  <a class="btn" href="https://branch.jsass.or.jp/west/?p=1919" target="_blank" rel="noopener noreferrer">Conference</a>
  <a class="btn" href="/portfolio/publications/">Presentations</a>
</div>
