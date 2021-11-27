import React from 'react'
import { Flex, Text } from 'vvs-uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { usePriceVvsUsdc } from 'state/farms/hooks'
import { useVvsVault } from 'state/pools/hooks'
import { getVvsVaultEarnings } from 'views/Pools/helpers'
import RecentVvsProfitBalance from './RecentVvsProfitBalance'

const RecentVvsProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { vvsAtLastUserAction, userShares, lastUserActionTime },
  } = useVvsVault()
  const vvsPriceUsdc = usePriceVvsUsdc()
  const { hasAutoEarnings, autoVvsToDisplay, autoUsdToDisplay } = getVvsVaultEarnings(
    account,
    vvsAtLastUserAction,
    userShares,
    pricePerFullShare,
    vvsPriceUsdc.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text small color="textSubtle">{`${t('Recent VVS profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentVvsProfitBalance
          vvsToDisplay={autoVvsToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentVvsProfitCountdownRow
