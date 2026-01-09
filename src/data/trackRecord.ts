
export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  highlightColor?: string;
}

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: '1',
    year: '1995',
    title: 'Founding',
    description: 'Trans-Quebec Security Inc. is founded by Stephan Crétier with an initial investment of $25,000. The company completed its first year of operations with C$600,000+ in revenue.',
    highlightColor: '#d4af37'
  },
  {
    id: '2',
    year: '1999',
    title: 'Canadian Expansion',
    description: 'Rapid organic growth leads to the expansion of operations across all major Canadian provinces, establishing a truly national footprint for security services.',
    highlightColor: '#d4af37'
  },
  {
    id: '3',
    year: '1999',
    title: 'Renamed GardaWorld',
    description: 'The company undergoes a strategic rebranding to GardaWorld, reflecting its global ambitions and commitment to world-class security standards.',
    highlightColor: '#d4af37'
  },
  {
    id: '4',
    year: '2003',
    title: 'Initial Public Offering',
    description: 'GardaWorld successfully lists on the Toronto Stock Exchange, marking a major milestone in its corporate evolution and capital structure.',
    highlightColor: '#d4af37'
  },
  {
    id: '5',
    year: '2003',
    title: 'GardaWorld Cash is created',
    description: 'Launch of the specialized cash services division, providing high-security logistics and currency processing solutions for financial institutions.',
    highlightColor: '#d4af37'
  },
  {
    id: '6',
    year: '2004',
    title: 'GardaWorld Aviation is created',
    description: 'Formation of the aviation security division, partnering with major airports to provide passenger screening and specialized ground services.',
    highlightColor: '#d4af37'
  },
  {
    id: '7',
    year: '2006',
    title: 'Expansion into the Middle East',
    description: 'Strategic move into international markets with the establishment of operations in the Middle East, serving high-profile corporate and diplomatic clients.',
    highlightColor: '#d4af37'
  },
  {
    id: '8',
    year: '2010',
    title: 'Founding signatory of ICoC charter',
    description: 'GardaWorld becomes a founding signatory of the International Code of Conduct for Private Security Service Providers, emphasizing ethical operations.',
    highlightColor: '#d4af37'
  },
  {
    id: '9',
    year: '2012',
    title: 'Privatization of GardaWorld',
    description: 'Successful transition back to a private company in partnership with global investment firms to accelerate long-term growth strategies.',
    highlightColor: '#d4af37'
  },
  {
    id: '10',
    year: '2013',
    title: 'Acquisitions and consolidation',
    description: 'Major series of strategic acquisitions across North America and Europe, consolidating its position as a global leader in the security industry.',
    highlightColor: '#d4af37'
  }
];
