export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  location: string;
  date: string;
  year: number;
  type: string;
  preview: string;
  links: { label: string; href: string; isLocal?: boolean }[];
  selected?: boolean;
}

export const PUBLICATIONS: Publication[] = [
  {
    id: 'nakanishi2026tbnn',
    title: 'A Study on Nonlinear SGS Models for LES Based on the Tensor Basis Neural Network Using Machine Learning',
    authors: ['Shuntaro Nakanishi', 'H. Kihara', 'Kenichi Abe'],
    venue: 'The Japan Society for Aeronautical and Space Sciences (JSASS) Western Branch Conference',
    location: 'Fukuoka, Japan',
    date: '20 Nov 2026',
    year: 2026,
    type: 'Oral presentation',
    preview: '/assets/img/tbnn-profiles.png',
    links: [
      { label: 'Conference', href: 'https://branch.jsass.or.jp/west/?p=1919' },
      { label: 'Slides (PDF)', href: '/assets/slides/tbnn-les/research_slides.pdf', isLocal: true },
    ],
    selected: true,
  },
  {
    id: 'nakanishi2025agriculture',
    title: "Development of an AI to Support Beginner Farmers by Integrating Environmental Data and Farmers' Insights",
    authors: ['Shuntaro Nakanishi', 'S. Sato', 'Takashi Okayasu', 'K. Mochida'],
    venue: 'Annual Conference of the Japanese Society of Agricultural Informatics',
    location: 'Kyoto, Japan',
    date: '25 May 2025',
    year: 2025,
    type: 'Oral presentation',
    preview: '/assets/img/tellmee-overview.png',
    links: [
      { label: 'Conference', href: 'https://www.jsai.or.jp/%E5%B9%B4%E6%AC%A1%E5%A4%A7%E4%BC%9A%E7%AD%89/%E5%B9%B4%E6%AC%A1%E5%A4%A7%E4%BC%9A' },
      { label: 'Slides (PDF)', href: '/assets/slides/tellmee/research_slides.pdf', isLocal: true },
    ],
    selected: true,
  },
];
