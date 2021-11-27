import { FooterLinkType } from 'vvs-uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.vvs.finance/contact-us',
      },
      {
        label: t('Blog'),
        href: 'https://vvs.medium.com/',
      },
      {
        label: t('Community'),
        href: 'https://docs.vvs.finance/contact-us/telegram',
      },
      {
        label: t('VVS token'),
        href: 'https://docs.vvs.finance/tokenomics/vvs',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://vvs.creator-spring.com/',
        isHighlighted: true,
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.vvs.finance/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.vvs.finance/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.vvs.finance/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/vvs-finance',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.vvs.finance',
      },
    ],
  },
]
