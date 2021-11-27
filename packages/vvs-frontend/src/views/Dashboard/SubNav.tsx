import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Flex } from 'vvs-uikit'

import { useTranslation } from 'contexts/Localization'

const getActiveIndex = (pathname: string): number => pathname.includes('/mine') ? 1 : 0

const SubNav = () => {
  const location = useLocation()
  const { t } = useTranslation()

  return (
    <Flex justifyContent="center" mb={24}>
      <ButtonMenu activeIndex={getActiveIndex(location.pathname)} scale="sm" variant="primary">
        <ButtonMenuItem to="/dashboard/farm" as={Link} padding="20px 30px">
          {t('My Farms')}
        </ButtonMenuItem>
        <ButtonMenuItem to="/dashboard/mine" as={Link} padding="20px 30px">
          {t('My Mines')}
        </ButtonMenuItem>
      </ButtonMenu>
    </Flex>
  )
}

export default SubNav
