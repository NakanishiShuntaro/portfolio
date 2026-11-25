export interface NewsItem {
  date: string;
  displayDate: string;
  html: string;
}

export const NEWS: NewsItem[] = [
  {
    date: '2026-11-20',
    displayDate: 'Nov 20, 2026',
    html: 'Presented my TBNN-based SGS modeling research at the <a href="https://branch.jsass.or.jp/west/?p=1919" target="_blank" rel="noopener noreferrer">JSASS Western Branch Conference</a> in Fukuoka (oral presentation).',
  },
  {
    date: '2026-04-01',
    displayDate: 'Apr 1, 2026',
    html: 'Started undergraduate research on turbulence modeling with Prof. Kenichi Abe at Kyushu University.',
  },
  {
    date: '2025-05-25',
    displayDate: 'May 25, 2025',
    html: 'Presented our agricultural AI assistant at the Annual Conference of the Japanese Society of Agricultural Informatics.',
  },
  {
    date: '2025-02-01',
    displayDate: 'Feb 1, 2025',
    html: 'Received <a href="https://mitou-fukuoka.org/2025/02/10/2024-250201-seikahokokukai/" target="_blank" rel="noopener noreferrer">“Yoka Creator” certification</a> from the Fukuoka Mitou Program.',
  },
];
