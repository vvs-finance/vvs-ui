import React, { useState } from 'react'
import {
  ButtonMenu,
  ButtonMenuItem,
  CloseIcon,
  Heading,
  IconButton,
  InjectedModalProps,
  ModalBody,
  ModalContainer,
  ModalHeader as UIKitModalHeader,
  ModalTitle,
} from 'vvs-uikit'
import { parseUnits } from 'ethers/lib/utils'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { FetchStatus, useGetCroBalance } from 'hooks/useTokenBalance'
import useTheme from 'hooks/useTheme'
import WalletInfo from './WalletInfo'
import WalletTransactions from './WalletTransactions'

export enum WalletView {
  WALLET_INFO,
  TRANSACTIONS,
}

interface WalletModalProps extends InjectedModalProps {
  initialView?: WalletView
}

export const LOW_CRO_BALANCE = parseUnits('2', 'gwei')

const ModalHeader = styled(UIKitModalHeader)`
  // background: ${({ theme }) => theme.colors.gradients.bubblegum};
`

const Tabs = styled.div`
  margin-top: 20px;
  > div {
    border: none;
    box-shadow: 0px 2px 20px 2px rgba(121, 121, 121, 0.17);
  }
`
const StyledModalCloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 10px;
`

const toggleMenuItemStyles = {
  fontSize: '13px',
  height: '36px',
}

const WalletModal: React.FC<WalletModalProps> = ({ initialView = WalletView.WALLET_INFO, onDismiss }) => {
  const [view, setView] = useState(initialView)
  const { t } = useTranslation()
  const { balance, fetchStatus } = useGetCroBalance()
  const { theme } = useTheme()
  const hasLowCROBalance = fetchStatus === FetchStatus.SUCCESS && balance.lte(LOW_CRO_BALANCE)

  const handleClick = (newIndex: number) => {
    setView(newIndex)
  }

  return (
    <ModalContainer title={t('Welcome!')} minWidth="460px">
      <ModalHeader>
        <ModalTitle>
          <Heading>{t('Your Wallet')}</Heading>
        </ModalTitle>
        <StyledModalCloseButton>
          <IconButton variant="text" onClick={onDismiss}>
            <CloseIcon color="text" />
          </IconButton>
        </StyledModalCloseButton>
        <Tabs>
          <ButtonMenu scale="sm" variant="primary" onItemClick={handleClick} activeIndex={view} fullWidth>
            <ButtonMenuItem style={toggleMenuItemStyles}>{t('Wallet')}</ButtonMenuItem>
            <ButtonMenuItem style={toggleMenuItemStyles}>{t('Transactions')}</ButtonMenuItem>
          </ButtonMenu>
        </Tabs>
      </ModalHeader>
      <ModalBody p="24px" maxWidth="460px" width="100%" background={theme.colors.lightBeige}>
        {view === WalletView.WALLET_INFO && <WalletInfo hasLowCROBalance={hasLowCROBalance} onDismiss={onDismiss} />}
        {view === WalletView.TRANSACTIONS && <WalletTransactions />}
      </ModalBody>
    </ModalContainer>
  )
}

export default WalletModal
