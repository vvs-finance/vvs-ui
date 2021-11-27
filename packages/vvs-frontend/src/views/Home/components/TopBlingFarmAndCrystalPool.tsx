import React from 'react'
import { Flex, Image, Text, FlexProps, useMatchBreakpoints, TokenPairImage } from 'vvs-uikit'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'

import { useFarms, usePollFarmsPublicData, usePriceVvsUsdc } from 'state/farms/hooks'
import isArchivedPid from 'utils/farmHelpers'
import BigNumber from 'bignumber.js'
import { getFarmApr } from 'utils/apr'
import { getAddress } from 'utils/addressHelpers'
import { DeserializedFarm } from 'state/types'
import Balance from 'components/Balance'
import { useFetchPublicPoolsData, usePools, useVvsVault } from 'state/pools/hooks'
import { getAprData } from 'views/Pools/helpers'
import { isBlindMode } from 'utils'

type TopItemProps = {
  title: string
  primarySrc: string
  secondarySrc: string
  name: string
  percent: number
  type: string
}

const CenterFlex = styled(Flex)`
  justify-content: center;
  align-content: center;
  align-items: center;
`
const PoolInfoModule = ({ name, primarySrc, secondarySrc, percent, title, type, ...restProps }: TopItemProps & FlexProps) => {
  const { isDesktop } = useMatchBreakpoints()

  return (
    <CenterFlex flexDirection={['column', 'column', 'column', 'row']} {...restProps}>
      <CenterFlex marginBottom={['10px', '10px', '10px', '0px']}>
        <Image
          src="/images/darkPurpleVector.svg"
          height={24}
          width={24}
          style={{
            minWidth: '24px',
            minHeight: '24px',
          }}
        />
        <Text
          fontSize={isDesktop ? '16px' : '13px'}
          fontWeight="600"
          ml="10px"
          mr="15px"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {title}:
        </Text>
      </CenterFlex>
      <CenterFlex mr={['0px', '0px', '0px', '15px']} width={32} height={32}>
        <TokenPairImage variant="inverted" primarySrc={primarySrc} secondarySrc={secondarySrc} width={32} height={32} />
      </CenterFlex>
      <CenterFlex mr={['0px', '0px', '0px', '20px']}>
        <Text
          fontSize={isDesktop ? '16px' : '13px'}
          fontWeight="600"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </Text>
      </CenterFlex>
      <CenterFlex>
        <Text fontSize="28px" fontWeight="600" color="blue">
          {isBlindMode() ? "---" : <Balance
            decimals={percent > 0 ? 2 : 0}
            fontSize="28px"
            bold
            display="inline-block"
            unit="%"
            lineHeight="1.1"
            value={percent}
          />}
          <Text as="sup" ml="3px" fontSize="13px" verticalAlign="super" fontWeight="400" color="blue">
            {type}
          </Text>
        </Text>
      </CenterFlex>
    </CenterFlex>
  )
}

const TopBlingFarmAndCrystalPool = () => {
  const { theme } = useTheme()
  const { data: farmsLP } = useFarms()
  const vvsPrice = usePriceVvsUsdc()

  usePollFarmsPublicData(false)
  let maxFarmApr = 0
  let maxFarm: DeserializedFarm
  const activeFarms = farmsLP.filter(farm => farm.pid !== 0 && farm.multiplier !== '0X' && !isArchivedPid(farm.pid))
  activeFarms.forEach(farm => {
    if (farm.lpTotalSupply.gt(0) && farm.lpTotalInQuoteToken.gt(0)) {
      const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteTokenPriceUsdc)
      const { vvsRewardsApr } = getFarmApr(new BigNumber(farm.poolWeight), vvsPrice, totalLiquidity, getAddress(farm.lpAddresses))
      if (vvsRewardsApr > maxFarmApr) {
        maxFarmApr = vvsRewardsApr
        maxFarm = farm
      }
    }
  })

  useFetchPublicPoolsData()
  const { pools: poolsWithoutAutoVault } = usePools()
  const vvsPool = poolsWithoutAutoVault.find((pool) => pool.sousId === 0)
  const vvsAutoVault = { ...vvsPool, isAutoVault: true }
  const {
    fees: { performanceFee },
  } = useVvsVault()
  const performanceFeeAsDecimal = performanceFee && performanceFee / 100
  const { apr: earningsPercentageToDisplay } = getAprData(vvsAutoVault, performanceFeeAsDecimal)

  return (
    <CenterFlex
      flexDirection="row"
      minHeight="84px"
      height={['144px', '144px', '144px', '84px']}
      background={theme.colors.gradients.cardHeader}
    >
      {maxFarm &&
        <PoolInfoModule
          marginRight='70px'
          title='Top Crystal Farm'
          primarySrc={`${process.env.REACT_APP_BASE_URL}/images/tokens/${maxFarm.token.address}.svg`}
          secondarySrc={`${process.env.REACT_APP_BASE_URL}/images/tokens/${maxFarm.quoteToken.address}.svg`}
          name={maxFarm.lpSymbol && maxFarm.lpSymbol.split(' ')[0].toUpperCase()}
          percent={maxFarmApr}
          type='APR'
        />
      }
      {vvsAutoVault &&
        <PoolInfoModule
          marginRight='0px'
          title='Top Glitter Mine'
          primarySrc={`${process.env.REACT_APP_BASE_URL}/images/tokens/${vvsAutoVault.stakingToken.address}.svg`}
          secondarySrc={`${process.env.REACT_APP_BASE_URL}/images/tokens/autorenew.svg`}
          name='Auto VVS'
          percent={earningsPercentageToDisplay}
          type='APY'
        />
      }
    </CenterFlex>
  )
}

export default TopBlingFarmAndCrystalPool
