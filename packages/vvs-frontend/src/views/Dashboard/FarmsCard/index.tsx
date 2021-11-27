import React from 'react'
import BigNumber from 'bignumber.js'
import {  Flex, Text, Heading, Image, useMatchBreakpoints, Skeleton } from 'vvs-uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

import Balance from 'components/Balance'
import { useFarms, usePollFarmsWithUserData, usePriceVvsUsdc } from 'state/farms/hooks'
import { getAddress } from 'utils/addressHelpers'
import { getFarmApr } from 'utils/apr'
import { BIG_ZERO } from 'utils/bigNumber'
import isArchivedPid from 'utils/farmHelpers'
import { getBalanceAmount, getBalanceNumber } from 'utils/formatBalance'
import { isBlindMode } from 'utils'

export const Wrapper = styled(Flex)`
  position: relative;
  background: ${({ theme }) => theme.colors.alphaBlue};
  box-shadow: 0px 10px 50px -20px rgba(121, 121, 121, 0.1);
  padding: 24px;
  border-radius: ${({ theme }) => theme.radii.card};
  width: 100%;
  overflow: hidden;
  > .info {
    position: relative;
    z-index: 20;
  }
  > .bg {
    position: absolute;
    z-index: 0;
    right: 18px;
    bottom: -60px;
    pointer-events: none;
  }
  > .bg-farms {
    bottom: -74px;
  }
`

const FarmsCard = () => {
  const { t } = useTranslation()
  const { isDesktop } = useMatchBreakpoints()
  const { data: farmsLP } = useFarms()
  const vvsPrice = usePriceVvsUsdc()

  usePollFarmsWithUserData(true)
  // const activeFarms = farmsLP.filter(farm => farm.pid !== 0 && farm.multiplier !== '0X' && !isArchivedPid(farm.pid))
  const activeFarms = farmsLP.filter(farm => farm.pid !== 0 && farm.pid !== 3) // FIXME temp show CRO/VVS and CRO/USDC with 0x
  const stakedOnlyFarms = activeFarms.filter(farm =>
    farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )
  let totalStakedFarms = BIG_ZERO
  let totalFarms = 0
  let totalApr = 0
  stakedOnlyFarms.forEach(farm => {
    if (farm.lpTotalSupply.gt(0) && farm.lpTotalInQuoteToken.gt(0)) {
      const valueOfBaseTokenInFarm = new BigNumber(farm.tokenPriceUsdc).times(farm.tokenAmountTotal)
      const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2)
      const totalLpTokens = getBalanceAmount(farm.lpTotalSupply)
      const lpPrice = overallValueOfAllTokensInFarm.div(totalLpTokens)
      totalStakedFarms = totalStakedFarms.plus(getBalanceNumber(lpPrice.times(farm.userData.stakedBalance)))
      totalFarms += 1
      const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteTokenPriceUsdc)
      const { vvsRewardsApr } = getFarmApr(new BigNumber(farm.poolWeight), vvsPrice, totalLiquidity, getAddress(farm.lpAddresses))
      totalApr += vvsRewardsApr
    }
  })
  
  return (
    <Wrapper mt={['24px', null, '36px', null]} mb={['24px', null, '36px', null]} flexDirection="column">
      <Heading color="primary">
        {t('Crystal Farms')}
      </Heading>
      <Flex className="info" justifyContent={['space-between', null, null, 'flex-start']}>
        <Flex flexDirection="column" mt="10px" mr="24px">
          <Text minWidth={['110px', null, null, '160px']} color="white" bold fontSize="20px">
            <Balance
              decimals={totalStakedFarms.gt(0) ? 2 : 0}
              fontSize="20px"
              color="white"
              bold
              prefix={totalStakedFarms.gt(0) ? '~$' : '$'}
              lineHeight="1.1"
              value={totalStakedFarms.toNumber()}
            />
          </Text>
          <Text minWidth={['110px', null, null, '160px']} color="grey" fontSize="13px">
            {t('Total Staked')}
          </Text>
        </Flex>
        <Flex flexDirection="column" mt="10px">
          <Text minWidth={['110px', null, null, '160px']} color="white" bold fontSize="20px">
            {isBlindMode() ? <Skeleton width={60} /> : <Balance
              decimals={totalApr > 0 ? 2 : 0}
              fontSize="20px"
              color="white"
              bold
              unit="%"
              lineHeight="1.1"
              value={totalApr ? totalApr / totalFarms : 0}
            />}
          </Text>
          <Text minWidth={['110px', null, null, '160px']} color="grey" fontSize="13px">
            {t('Average APR')}
          </Text>
        </Flex>
      </Flex>
      {
        isDesktop && <Image className="bg bg-farms" src="/images/dashboard/farms-bg.png" width={220} height={170} />
      }
    </Wrapper>
  )
}

export default FarmsCard
