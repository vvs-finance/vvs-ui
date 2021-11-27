import React from 'react'
import styled from 'styled-components'
import { Flex, TooltipText, IconButton, useModal, CalculateIcon, Skeleton, useTooltip } from 'vvs-uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import RoiCalculatorModal from 'components/RoiCalculatorModal'
import { DeserializedPool } from 'state/types'
import { getAprData } from 'views/Pools/helpers'
import BigNumber from 'bignumber.js'
import { BIG_ZERO } from 'utils/bigNumber'
import { isBlindMode } from 'utils'
import { VVS_PER_BLOCK } from 'config'
import { useFarmFromPid } from 'state/farms/hooks'

const ApyLabelContainer = styled(Flex)`
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

interface AprRowProps {
  pool: DeserializedPool
  stakedBalance: BigNumber
  performanceFee?: number
}

const AprRow: React.FC<AprRowProps> = ({ pool, stakedBalance, performanceFee = 0 }) => {
  const { t } = useTranslation()
  const { stakingToken, earningToken, isFinished, apr, earningTokenPrice, stakingTokenPrice, userData, isAutoVault } =
    pool

  const stakingTokenBalance = userData?.stakingTokenBalance ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO

  const tooltipContent = isBlindMode() ? t('Amount of VVS rewards allocated to the Glitter mine participants issued with each Cronos block (~5-6s/block). We will convert this value to APY/APR value after Pioneer Farming Mode is completed.') : (isAutoVault
    ? t('APY displayed for auto-compounded deposits.')
    : t('APY displayed for non auto-compounded deposits.'))

  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, { placement: 'bottom-start' })

  const { apr: earningsPercentageToDisplay, autoCompoundFrequency } = getAprData(pool, performanceFee)

  const apyModalLink = stakingToken.address ? `/swap?outputCurrency=${stakingToken.address}` : '/swap'

  const [onPresentApyModal] = useModal(
    <RoiCalculatorModal
      earningTokenPrice={earningTokenPrice}
      stakingTokenPrice={stakingTokenPrice}
      apr={apr}
      linkLabel={t('Get %symbol%', { symbol: stakingToken.symbol })}
      linkHref={apyModalLink}
      stakingTokenBalance={stakedBalance.plus(stakingTokenBalance)}
      stakingTokenSymbol={stakingToken.symbol}
      earningTokenSymbol={earningToken.symbol}
      autoCompoundFrequency={autoCompoundFrequency}
      performanceFee={performanceFee}
    />,
  )

  const vvsFarm = useFarmFromPid(0)

  return (
    isBlindMode() ? <Flex alignItems="center" justifyContent="space-between">
      {tooltipVisible && tooltip}
      <TooltipText color="textSubtle" small ref={targetRef}>
        {`${t('VVS Allocation')}`}
      </TooltipText>
      <Flex alignItems="center">
        {vvsFarm && vvsFarm.poolWeight ? `${(VVS_PER_BLOCK * vvsFarm.poolWeight.toNumber()).toFixed(2)}/ Block` : ''}
      </Flex>
    </Flex> : <Flex alignItems="center" justifyContent="space-between">
      {tooltipVisible && tooltip}
      <TooltipText color="textSubtle" small ref={targetRef}>
        {isAutoVault ? `${t('APY')}:` : `${t('APR')}:`}
      </TooltipText>
      {isFinished || !apr ? (
        <Skeleton width="82px" height="32px" />
      ) : (
        <ApyLabelContainer alignItems="center" onClick={onPresentApyModal}>
          <Balance
            fontSize="16px"
            isDisabled={isFinished}
            value={earningsPercentageToDisplay}
            decimals={2}
            unit="%"
            onClick={onPresentApyModal}
          />
          <IconButton variant="text" scale="sm">
            <CalculateIcon color="textSubtle" width="18px" />
          </IconButton>
        </ApyLabelContainer>
      )}
    </Flex>
  )
}

export default AprRow
