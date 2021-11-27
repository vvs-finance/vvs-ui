import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Flex, Skeleton, Text } from 'vvs-uikit'
import { useTranslation } from 'contexts/Localization'
import { isBlindMode } from 'utils'
import { getUsersHarvestedData } from 'hooks/useFarmGraph'
import { useWeb3React } from '@web3-react/core'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { usePriceVvsUsdc } from 'state/farms/hooks'
import BigNumber from 'bignumber.js'
import Balance from 'components/Balance'
import { getBalanceNumber } from 'utils/formatBalance'
import tokens from 'config/constants/tokens'

const StyledCard = styled(Card)`
  width: 100%;
  height: fit-content;
`

const PlatformYieldCard = () => {
  const { t } = useTranslation()

  const { account } = useWeb3React()
  const vvsPriceUsdc = usePriceVvsUsdc()
  const [harvestedSum, setHarvestedSum] = useState(0)
  const { earningsSum: farmEarningsSum } = useFarmsWithBalance()
  useEffect(() => {
    const fetchHarvestedData = async () => {
      const { user: harvested } = await getUsersHarvestedData(account)
      if (harvested?.totalClaimAmount || harvested?.totalVVSVaultProfit) {
        setHarvestedSum(Number(harvested.totalClaimAmount) + Number(harvested.totalVVSVaultProfit))
      }
    }
    if (account) {
      fetchHarvestedData()
    }
  }, [account])
  const totalPlatformYield = (getBalanceNumber(new BigNumber(harvestedSum), tokens.vvs.decimals) + farmEarningsSum) * vvsPriceUsdc.toNumber()

  return (
    <StyledCard>
      <CardBody>
        <Flex
          flexDirection={['column', null, null, 'row']}
          justifyContent="space-between"
          alignItems={['flex-start', null, null, 'center']}
        >
          <Flex flexDirection="column" alignItems={['flex-start', null, null, 'flex-start']}>
            <Text color="blue" style={{ lineHeight: 1 }} bold fontSize="24px">
              {isBlindMode() ? <Skeleton width={96} height={24} my="2px" />
                : (
                <Balance
                  decimals={totalPlatformYield > 0 ? 2 : 0}
                  fontSize="24px"
                  bold
                  prefix={totalPlatformYield > 0 ? '~$' : '$'}
                  lineHeight="1.1"
                  value={totalPlatformYield}
                />
              )}
            </Text>
            <Text color="textSubtle" fontSize="13px" style={{ whiteSpace: 'nowrap' }}>
              {t('Total Platform Yield')}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </StyledCard>
  )
}

export default PlatformYieldCard
