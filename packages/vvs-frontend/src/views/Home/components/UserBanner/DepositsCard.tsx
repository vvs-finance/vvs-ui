import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Flex, Skeleton, Text } from 'vvs-uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import { useFarms, usePollFarmsWithUserData } from 'state/farms/hooks'
import { useFetchPublicPoolsData, useFetchUserPools, useFetchVvsVault, usePools, useVvsVault } from 'state/pools/hooks'
import { BIG_ZERO } from 'utils/bigNumber'
import isArchivedPid from 'utils/farmHelpers'
import { getBalanceAmount, getBalanceNumber } from 'utils/formatBalance'
import { convertSharesToVvs } from 'views/Pools/helpers'
import { isBlindMode } from 'utils'

const StyledCard = styled(Card)`
  width: 100%;
  height: fit-content;
`

const DepositsCard = () => {
  const { t } = useTranslation()
  const { data: farmsLP } = useFarms()

  usePollFarmsWithUserData(true)
  const activeFarms = farmsLP.filter(farm => farm.pid !== 0 && farm.multiplier !== '0X' && !isArchivedPid(farm.pid))
  const stakedOnlyFarms = activeFarms.filter(farm =>
    farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )
  let totalStakedFarms = BIG_ZERO
  stakedOnlyFarms.forEach(farm => {
    if (farm.lpTotalSupply.gt(0) && farm.lpTotalInQuoteToken.gt(0)) {
      const valueOfBaseTokenInFarm = new BigNumber(farm.tokenPriceUsdc).times(farm.tokenAmountTotal)
      const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2)
      const totalLpTokens = getBalanceAmount(farm.lpTotalSupply)
      const lpPrice = overallValueOfAllTokensInFarm.div(totalLpTokens)
      totalStakedFarms = totalStakedFarms.plus(getBalanceNumber(lpPrice.times(farm.userData.stakedBalance)))
    }
  })

  const { account } = useWeb3React()
  useFetchPublicPoolsData();
  useFetchVvsVault()
  useFetchUserPools(account)
  const { pools: poolsWithoutAutoVault } = usePools()
  const vvsPool = poolsWithoutAutoVault.find((pool) => pool.sousId === 0)
  const vvsAutoVault = { ...vvsPool, isAutoVault: true }
  const pools = [vvsAutoVault, ...poolsWithoutAutoVault]

  let totalStakedPools = BIG_ZERO
  const {
    userData: { userShares },
    pricePerFullShare,
  } = useVvsVault()
  pools.forEach(pool => {
    if (pool.isAutoVault) {
      const { vvsAsBigNumber } = convertSharesToVvs(userShares, pricePerFullShare)
      const stakedAutoDollarValue = getBalanceNumber(vvsAsBigNumber.multipliedBy(pool.stakingTokenPrice), pool.stakingToken.decimals)
      if (!Number.isNaN(stakedAutoDollarValue)) {
        totalStakedPools = totalStakedPools.plus(stakedAutoDollarValue)
      }
    } else {
      const stakedTokenDollarBalance = getBalanceNumber(
        pool.userData.stakedBalance.multipliedBy(pool.stakingTokenPrice),
        pool.stakingToken.decimals,
      )
      if (!Number.isNaN(stakedTokenDollarBalance)) {
        totalStakedPools = totalStakedPools.plus(stakedTokenDollarBalance)
      }
    }
  })

  const totalDeposit = totalStakedFarms.plus(totalStakedPools)

  return (
    <StyledCard>
      <CardBody>
        <Flex
          flexDirection={['column', null, null, 'row']}
          justifyContent="space-between"
          alignItems={['flex-start', null, null, 'center']}
        >
          <Flex flexDirection="column" alignItems={['flex-start', null, null, 'flex-start']}>
            {isBlindMode() ? <Skeleton width={96} height={24} my="2px" />
              : (<Text color="blue" bold fontSize="24px" style={{ lineHeight: 1 }}>
              <Balance
                decimals={totalDeposit.gt(0) ? 2 : 0}
                fontSize="24px"
                bold
                prefix={totalDeposit.gt(0) ? '~$' : '$'}
                lineHeight="1.1"
                value={totalDeposit.toNumber()}
              />
            </Text>)}
            <Text color="textSubtle" fontSize="13px" style={{ whiteSpace: 'nowrap' }}>
              {t('Total Deposits')}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </StyledCard>
  )
}

export default DepositsCard
