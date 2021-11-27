import { useWeb3React } from '@web3-react/core'
import React, { useEffect, useMemo, useState } from 'react'
import { Flex, Text, Heading, Image, useMatchBreakpoints, Skeleton } from 'vvs-uikit'
import { useTranslation } from 'contexts/Localization'

import Balance from 'components/Balance'
import { useFetchPublicPoolsData, useFetchUserPools, usePools, useVvsVault } from 'state/pools/hooks'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceNumber } from 'utils/formatBalance'
import { convertSharesToVvs, getAprData } from 'views/Pools/helpers'
import { isBlindMode } from 'utils'
import { Wrapper } from '../FarmsCard'

const MinesCard = () => {
  const { t } = useTranslation()
  const { isDesktop } = useMatchBreakpoints()

  const { account } = useWeb3React()
  useFetchPublicPoolsData();
  useFetchUserPools(account)
  const { pools: poolsWithoutAutoVault } = usePools()
  const vvsPool = poolsWithoutAutoVault.find((pool) => pool.sousId === 0)
  const vvsAutoVault = { ...vvsPool, isAutoVault: true }
  const pools = [vvsAutoVault, ...poolsWithoutAutoVault]

  let totalStakedPools = BIG_ZERO
  let totalStakedVvs = BIG_ZERO
  const {
    userData: { userShares },
    fees: { performanceFee },
    pricePerFullShare,
  } = useVvsVault()
  const performanceFeeAsDecimal = performanceFee && performanceFee / 100
  let autoVvsApr: number;
  let manualVvsApr: number;
  pools.forEach(pool => {
    const { apr: earningsPercentageToDisplay } = getAprData(pool, performanceFeeAsDecimal)
    if (pool.isAutoVault) {
      const { vvsAsBigNumber } = convertSharesToVvs(userShares, pricePerFullShare)
      const stakedAutoDollarValue = getBalanceNumber(vvsAsBigNumber.multipliedBy(pool.stakingTokenPrice), pool.stakingToken.decimals)
      if (!Number.isNaN(stakedAutoDollarValue) && stakedAutoDollarValue) {
        totalStakedPools = totalStakedPools.plus(stakedAutoDollarValue)
        totalStakedVvs = totalStakedVvs.plus(getBalanceNumber(vvsAsBigNumber, pool.stakingToken.decimals))
        autoVvsApr = earningsPercentageToDisplay
      }
    } else {
      const stakedTokenDollarBalance = getBalanceNumber(
        pool.userData.stakedBalance.multipliedBy(pool.stakingTokenPrice),
        pool.stakingToken.decimals,
      )
      if (!Number.isNaN(stakedTokenDollarBalance) && stakedTokenDollarBalance) {
        totalStakedPools = totalStakedPools.plus(stakedTokenDollarBalance)
        totalStakedVvs = totalStakedVvs.plus(getBalanceNumber(pool.userData.stakedBalance, pool.stakingToken.decimals))
        manualVvsApr = earningsPercentageToDisplay
      }
    }
  })

  const [percent, setPercent] = useState(0)
  const [title, setTitle] = useState('')
  useEffect(() => {
    if (autoVvsApr && manualVvsApr) {
      setPercent((autoVvsApr + manualVvsApr) / 2)
      setTitle(t('Average Annual ROI'))
    } else if (autoVvsApr) {
      setPercent(autoVvsApr)
      setTitle(t('Average APY'))
    } else if (manualVvsApr) {
      setPercent(manualVvsApr)
      setTitle(t('Average APR'))
    } else {
      setTitle(t('Average APR'))
    }
  }, [autoVvsApr, manualVvsApr, t])

  return (
    <Wrapper mt={[null, null, '36px', null]} mb={['24px', null, '36px', null]} flexDirection="column">
      <Heading color="primary">
        {t('Glitter Mines')}
      </Heading>
      <Flex className="info" justifyContent={['space-between', null, null, 'flex-start']}>
        <Flex flexDirection="column" mt="10px" mr="24px">
          <Text minWidth="160px" color="white" bold fontSize="20px">
            <Balance
              decimals={totalStakedPools.gt(0) ? 2 : 0}
              fontSize="20px"
              color="white"
              bold
              prefix={isBlindMode() ? '' : (totalStakedPools.gt(0) ? '~$' : '$')}
              unit={isBlindMode() ? ' MM VVS' : ''}
              lineHeight="1.1"
              value={isBlindMode() ? totalStakedVvs.dividedBy(1000000).toNumber() : totalStakedPools.toNumber()}
            />
          </Text>
          <Text minWidth="160px" color="grey" fontSize="13px">
            {t('Total Staked')}
          </Text>
        </Flex>
        <Flex flexDirection="column" mt="10px">
          <Text minWidth="160px" color="white" bold fontSize="20px">
            {isBlindMode() ? <Skeleton width={60} /> : <Balance
              decimals={percent ? 2 : 0}
              fontSize="20px"
              color="white"
              bold
              unit="%"
              lineHeight="1.1"
              value={percent}
            />}
          </Text>
          <Text minWidth="160px" color="grey" fontSize="13px">
            {title}
          </Text>
        </Flex>
      </Flex>
      {
        isDesktop && <Image className="bg" src="/images/dashboard/miners-bg.png" width={220} height={170} />
      }
    </Wrapper>
  )
}

export default MinesCard
