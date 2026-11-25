export const SITE = {
  name: 'Shuntaro Nakanishi',
  nameJa: '中西 俊太郎',
  subtitle: 'Department of Aeronautics and Astronautics, Kyushu University',
  description:
    "Shuntaro Nakanishi's academic website. Undergraduate researcher at Kyushu University working on large-eddy simulation, data-driven turbulence modeling, and scientific machine learning.",
  location: 'Fukuoka, Japan',
  email: 'nakanishi.shuntaro.638@s.kyushu-u.ac.jp',
  ogImage: 'https://nakanishishuntaro.github.io/portfolio/assets/img/shuntaro-portrait.jpg',
  cvPdfPath: '/assets/pdf/Shuntaro_Nakanishi_CV.pdf',
  social: [
    { label: 'Email', href: 'mailto:nakanishi.shuntaro.638@s.kyushu-u.ac.jp', icon: 'email' },
    { label: 'GitHub', href: 'https://github.com/NakanishiShuntaro', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shuntaro-nakanishi-a44b55361', icon: 'linkedin' },
    { label: 'X', href: 'https://x.com/nakanishiS10651', icon: 'x' },
  ] as const,
  nav: [
    { label: 'About', path: '/' },
    { label: 'Publications', path: '/publications/' },
    { label: 'Projects', path: '/projects/' },
    { label: 'CV', path: '/cv/' },
  ] as const,
};

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
