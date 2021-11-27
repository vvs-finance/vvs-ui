import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Text, useMatchBreakpoints } from 'vvs-uikit'
import { useTranslation } from 'contexts/Localization'
import { useVvsVault } from 'state/pools/hooks'
import { DeserializedPool } from 'state/types'
import { BIG_ZERO } from 'utils/bigNumber'
import { TokenPairImage } from 'components/TokenImage'
import VvsVaultTokenPairImage from '../../VvsVaultCard/VvsVaultTokenPairImage'
import BaseCell, { CellContent } from './BaseCell'

interface NameCellProps {
  pool: DeserializedPool
}

const StyledCell = styled(BaseCell)`
  flex: 5;
  flex-direction: row;
  padding-left: 12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 0 150px;
    padding-left: 32px;
  }
`

const StyledTokenPairImage = styled(TokenPairImage)`
  > div {
    width: 24px;
    top: 50%;
    margin-top: -12px;
    bottom: auto;
  }
`

const StyledVvsVaultTokenPairImage = styled(VvsVaultTokenPairImage)`
  > div {
    width: 24px;
    top: 50%;
    margin-top: -12px;
    bottom: auto;
  }
`

const NameCell: React.FC<NameCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  const { sousId, stakingToken, earningToken, userData, isFinished, isAutoVault } = pool
  const {
    userData: { userShares },
  } = useVvsVault()
  const hasVaultShares = userShares && userShares.gt(0)

  const stakingTokenSymbol = stakingToken.symbol
  const earningTokenSymbol = earningToken.symbol

  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const isStaked = stakedBalance.gt(0)
  const isManualVvsPool = sousId === 0

  const showStakedTag = isAutoVault ? hasVaultShares : isStaked

  let title = `${t('Earn')} ${earningTokenSymbol}`
  let subtitle = `${t('Stake')} ${stakingTokenSymbol}`
  const showSubtitle = sousId !== 0 || (sousId === 0 && !isMobile)

  if (isAutoVault) {
    title = t('Auto VVS')
    subtitle = t('Automatic restaking')
  } else if (isManualVvsPool) {
    title = t('Manual VVS')
    subtitle = `${t('Earn')} VVS ${t('Stake').toLocaleLowerCase()} VVS`
  }

  return (
    <StyledCell role="cell">
      {isAutoVault ? (
        <StyledVvsVaultTokenPairImage mr="8px" width={40} height={40} />
      ) : (
        <StyledTokenPairImage
          primaryToken={earningToken}
          secondaryToken={stakingToken}
          mr="8px"
          width={40}
          height={40}
        />
      )}
      <CellContent>
        {showStakedTag && (
          <Text fontSize="12px" bold color={isFinished ? 'failure' : 'secondary'} textTransform="uppercase">
            {t('Staked')}
          </Text>
        )}
        <Text bold={!isMobile} small={isMobile}>
          {title}
        </Text>
        {showSubtitle && (
          <Text fontSize="12px" color="textSubtle">
            {subtitle}
          </Text>
        )}
      </CellContent>
    </StyledCell>
  )
}

export default NameCell
