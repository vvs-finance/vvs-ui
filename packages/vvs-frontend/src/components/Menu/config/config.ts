import { MenuItemsType, DropdownMenuItemType } from 'vvs-uikit'
import { ContextApi } from 'contexts/Localization/types'
import { isBlindMode } from 'utils'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }


const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: 'Mines',
        href: '/mines',
      },
    ],
  },
  {
    label: t('Analytics'),
    href: '/info',
    icon: 'Analytics',
    showItemsOnMobile: false,
    hidden: isBlindMode()
  },
  {
    label: '',
    href: '/',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Docs'),
        href: 'https://docs.vvs.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Code'),
        href: 'https://github.com/vvs-finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Community'),
        href: '/',
        type: DropdownMenuItemType.INTERNAL_LINK,
        onClick: () => {
          setTimeout(() => {
            const dom = document.querySelector('#Community')
            // eslint-disable-next-line no-unused-expressions
            dom && dom.scrollIntoView()
          }, 200)
        }
      },
    ],
  },
  // {
  //   label: t('Win'),
  //   href: '/prediction',
  //   icon: 'Trophy',
  //   items: [
  //     {
  //       label: t('Prediction (BETA)'),
  //       href: '/prediction',
  //     },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     },
  //   ],
  // },
  // {
  //   label: t('NFT'),
  //   href: '/collectibles',
  //   icon: 'Nft',
  //   showOnMobile: false,
  //   showItemsOnMobile: false,
  //   items: [
  //     {
  //       label: t('Collectibles'),
  //       href: '/collectibles',
  //     },
  //   ],
  // },
  // {
  //   label: '',
  //   href: '/info',
  //   icon: 'More',
  //   hideSubNav: true,
  //   items: [
  //     {
  //       label: t('Info'),
  //       href: '/info',
  //     },
  //     {
  //       label: t('IFO'),
  //       href: '/ifo',
  //     },
  //     {
  //       label: t('Voting'),
  //       href: '/voting',
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: t('Blog'),
  //       href: 'https://vvs.medium.com',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://docs.vvs.finance',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //   ],
  // },
]

export default config
