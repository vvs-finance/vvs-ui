import React from 'react'
import { useWeb3React } from '@web3-react/core'
import styled from "styled-components"
import { Flex, LogoutIcon, useModal, UserMenu as UIKitUserMenu, UserMenuDivider, UserMenuItem, Link } from 'vvs-uikit'
import useAuth from 'hooks/useAuth'
// import { useProfile } from 'state/profile/hooks'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { FetchStatus, useGetCroBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import WalletModal, { WalletView, LOW_CRO_BALANCE } from './WalletModal'
// import ProfileUserMenuItem from './ProfileUserMenutItem'
import WalletUserMenuItem from './WalletUserMenuItem'

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

const UserMenu = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { logout } = useAuth()
  const { balance, fetchStatus } = useGetCroBalance()
  // const { isInitialized, isLoading, profile } = useProfile()
  const [onPresentWalletModal] = useModal(<WalletModal initialView={WalletView.WALLET_INFO} />)
  const [onPresentTransactionModal] = useModal(<WalletModal initialView={WalletView.TRANSACTIONS} />)
  // const hasProfile = isInitialized && !!profile
  // const avatarSrc = profile && profile.nft ? `/images/nfts/${profile.nft.images.sm}` : undefined
  const hasLowCroBalance = fetchStatus === FetchStatus.SUCCESS && balance.lte(LOW_CRO_BALANCE)

  if (!account) {
    return (
      <ConnectWalletButton roundness="lg" borderRadius="50px" height="42px" padding="12px 24px 12px 24px" scale="xs" />
    )
  }

  return (
    // <UIKitUserMenu account={account} avatarSrc={avatarSrc}>
    <UIKitUserMenu account={account}>
      <WalletUserMenuItem hasLowCroBalance={hasLowCroBalance} onPresentWalletModal={onPresentWalletModal} />
      <UserMenuItem as="button" onClick={onPresentTransactionModal}>
        {t('Transactions')}
      </UserMenuItem>
      <StyledLink href="/dashboard" color="text">
        <UserMenuItem as="button">
          {t('Dashboard')}
        </UserMenuItem>
      </StyledLink>
      <UserMenuDivider />
      {/* <ProfileUserMenuItem isLoading={isLoading} hasProfile={hasProfile} />
      <UserMenuDivider /> */}
      <UserMenuItem as="button" onClick={logout}>
        <Flex alignItems="center" justifyContent="space-between" width="100%">
          {t('Disconnect')}
          <LogoutIcon />
        </Flex>
      </UserMenuItem>
    </UIKitUserMenu>
  )
}

export default UserMenu
