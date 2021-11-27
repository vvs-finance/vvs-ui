import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Cronos Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.vvs.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'CRO', alt: 'CRO token' },
      { src: 'ETH', alt: 'ETH token' },
      { src: 'VVS', alt: 'VVS token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'VVS makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.vvs.finance/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const vvsSectionData: SalesSectionProps = {
  headingText: 'VVS makes our world go round.',
  bodyText:
    'VVS token is at the heart of the VVS ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    text: 'Buy VVS',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.vvs.finance/tokenomics/vvs',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/vvs/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d vvs' },
      { src: 'top-right', alt: 'Small 3d vvs' },
      { src: 'coin', alt: 'VVS token' },
      { src: 'top-left', alt: 'Small 3d vvs' },
    ],
  },
}
