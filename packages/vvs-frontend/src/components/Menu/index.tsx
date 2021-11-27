import React from 'react'
import { useLocation } from 'react-router'
import { Menu as UikitMenu } from 'vvs-uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { usePriceVvsUsdc } from 'state/farms/hooks'
import { useProfile } from 'state/profile/hooks'
import { isBlindMode, isCountdown, showVvsPrice } from 'utils'
import { registerToken } from 'utils/wallet'
import tokens from 'config/constants/tokens'
import config from './config/config'
import UserMenu from './UserMenu'
import GlobalSettings from './GlobalSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  const vvsPriceUsd = usePriceVvsUsdc()
  const { profile } = useProfile()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useLocation()

  const activeMenuItem = getActiveMenuItem({ menuConfig: config(t), pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })
  
  return (
    <UikitMenu
      userMenu={isCountdown() ? null : <UserMenu />}
      globalMenu={isCountdown() ? null : <GlobalSettings />}
      isDark={isDark}
      isBlindMode={isBlindMode()}
      toggleTheme={toggleTheme}
      t={t}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      vvsPriceUsd={vvsPriceUsd.toNumber()}
      showVvsPrice={showVvsPrice()}
      links={isCountdown() ? [] : config(t)}
      subLinks={activeMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
      footerLinks={footerLinks(t)}
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}
      buyVvsLabel={t('Buy VVS')}
      profile={{
        username: profile?.username,
        image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
        profileLink: '/profile',
        noProfileLink: '/profile',
        showPip: !profile?.username,
      }}
      iconCallback={() => registerToken(tokens.vvs.address, tokens.vvs.symbol, tokens.vvs.decimals)}
      vvsAddress={tokens.vvs.address}
      {...props}
    />
  )
}

export default Menu
