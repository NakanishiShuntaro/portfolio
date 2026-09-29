---
layout: page
title: TBNN / LES
description: data-driven nonlinear subgrid-scale models for turbulent flows
img: assets/img/turbulence.svg
importance: 1
category: research
selected: true
---

## Learning turbulence

**Kyushu University · Undergraduate Researcher · April 2026–present**
Advisor: Prof. Kenichi Abe

I investigate nonlinear subgrid-scale (SGS) models for large-eddy simulation (LES) using tensor basis neural networks (TBNNs).

In *a posteriori* simulations of channel flow at Re<sub>τ</sub> = 395, using the first four of Pope's tensor bases achieved accuracy comparable to using all ten, reducing velocity overprediction primarily in the buffer and outer layers relative to conventional isotropic models.

I am investigating T<sup>(6)</sup> as a potential extension of conventional strain-rate-tensor-based SGS models, motivated by its linear dependence on the strain-rate tensor in laminar channel flow.

By learning only the coefficient of the isotropic tensor T<sup>(6)</sup> with a composite loss that equally evaluates normalized anisotropy and physical stress scale, mean-velocity relative L<sub>2</sub> error against DNS was reduced from **19.54% to 3.73%**, without incorporating anisotropic tensor terms.

### Conference presentation

*A Study on Nonlinear SGS Models for LES Based on the Tensor Basis Neural Network Using Machine Learning*, JSASS Western Branch Conference, Fukuoka, November 2026 — **scheduled for oral presentation**.

[Conference](https://branch.jsass.or.jp/west/?p=1919){: .btn}
[Presentations]({{ '/publications/' | relative_url }}){: .btn}

{% include figure.html path="assets/img/turbulence.svg" class="img-fluid rounded" alt="Conceptual project schematic" caption="Conceptual schematic; not a simulation result or experimental measurement." %}
