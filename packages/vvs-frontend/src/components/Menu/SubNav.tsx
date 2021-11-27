import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, useMatchBreakpoints } from 'vvs-uikit'
import { useTranslation } from 'contexts/Localization'

const StyledNav = styled.nav`
  margin-bottom: 25px;
`
const toggleButtonStyles = {
  fontWeight: 400,
  fontSize: '13px',
}

const StyledButtonMenu = styled(ButtonMenu)`
  border: none;
  box-shadow: 0px 2px 40px -20px rgba(121, 121, 121, 0.17);
  a {
    border-radius: 20px;
  }
`

const getActiveIndex = (pathname: string): number => {
  if (
    pathname.includes('/pool') ||
    pathname.includes('/create') ||
    pathname.includes('/add') ||
    pathname.includes('/remove') ||
    pathname.includes('/find') ||
    pathname.includes('/liquidity')
  ) {
    return 1
  }
  return 0
}

const Nav = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  return (
    <StyledNav>
      <StyledButtonMenu activeIndex={getActiveIndex(location.pathname)} scale="sm" variant="primary">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link} padding="20px 30px" style={toggleButtonStyles}>
          {t('Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link} padding="20px 30px" style={toggleButtonStyles}>
          {t('Liquidity')}
        </ButtonMenuItem>
      </StyledButtonMenu>
    </StyledNav>
  )
}

export default Nav
