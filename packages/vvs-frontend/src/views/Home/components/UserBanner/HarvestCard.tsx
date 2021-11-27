import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { AutoRenewIcon, Button, Card, CardBody, Flex, Skeleton, Text, Link, ArrowForwardIcon } from 'vvs-uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { usePriceVvsUsdc } from 'state/farms/hooks'
import useToast from 'hooks/useToast'
import { useMasterchef } from 'hooks/useContract'
import { harvestFarm } from 'utils/calls'
import Balance from 'components/Balance'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { isBlindMode } from 'utils'
import { getEarningsText } from './EarningsText'

const StyledCard = styled(Card)`
  width: 100%;
  height: fit-content;
`

const HarvestCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { t } = useTranslation()
  const { toastSuccess, toastError } = useToast()
  const { farmsWithStakedBalance, earningsSum: farmEarningsSum } = useFarmsWithBalance()

  const masterChefContract = useMasterchef()
  const vvsPriceUsdc = usePriceVvsUsdc()
  // const vvsPriceUsdc = new BigNumber(0) // XXX debug hard code for landing banner
  const earningsUsdc = new BigNumber(farmEarningsSum).multipliedBy(vvsPriceUsdc)
  const numTotalToCollect = farmsWithStakedBalance.length
  const numFarmsToCollect = farmsWithStakedBalance.filter((value) => value.pid !== 0).length
  const hasVvsPoolToCollect = numTotalToCollect - numFarmsToCollect > 0

  const earningsText = getEarningsText(numFarmsToCollect, hasVvsPoolToCollect, earningsUsdc, t)
  const [preText, toCollectText] = earningsText.split(earningsUsdc.toString())

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of farmsWithStakedBalance) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, farmWithBalance.pid)
        toastSuccess(
          `${t('Harvested')}!`,
          t('Your %symbol% earnings have been sent to your wallet!', { symbol: 'VVS' }),
        )
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }
    setPendingTx(false)
  }, [farmsWithStakedBalance, masterChefContract, toastSuccess, toastError, t])

  return (
    <StyledCard>
      <CardBody>
        <Flex
          flexDirection={['row', null, null, 'row']}
          justifyContent="space-between"
          alignItems={['flex-start', null, null, 'center']}
        >
          <Flex flexDirection="column" alignItems={['flex-start', null, null, 'flex-start']}>
            {preText && (
              <Text mb="4px" color="textSubtle">
                {preText}
              </Text>
            )}
            {!earningsUsdc.isNaN() ? (
              <Balance
                decimals={(isBlindMode() ? new BigNumber(farmEarningsSum).dividedBy(1000000) : earningsUsdc).gt(0) ? 2 : 0}
                fontSize="24px"
                bold
                prefix={isBlindMode() ? '' : (earningsUsdc.gt(0) ? '~$' : '$')}
                unit={isBlindMode() ? ' MM VVS' : ''}
                lineHeight="1.1"
                value={isBlindMode() ? (farmEarningsSum / 1000000) : earningsUsdc.toNumber()}
              />
            ) : (
              <Skeleton width={96} height={24} my="2px" />
            )}
            <Text small color="textSubtle" fontSize="13px">
              {toCollectText}
            </Text>
          </Flex>
          {numTotalToCollect <= 0 ? (
            <Link href="farms">
              <Button width={['100%', null, null, 'auto']} variant="secondary">
                <Text color="primary" bold fontSize="13px" style={{ whiteSpace: 'nowrap' }}>
                  {t('Start earning')}
                </Text>
                {/* <ArrowForwardIcon ml="4px" color="primary" /> */}
              </Button>
            </Link>
          ) : (
            <Button
              width={['100%', null, null, 'auto']}
              id="harvest-all"
              isLoading={pendingTx}
              endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
              disabled={pendingTx}
              onClick={harvestAllFarms}
            >
              <Text color="invertedContrast" bold fontSize="13px" style={{ whiteSpace: 'nowrap' }}>
                {pendingTx ? t('Harvesting') : t('Harvest all')}
              </Text>
            </Button>
          )}
        </Flex>
      </CardBody>
    </StyledCard>
  )
}

export default HarvestCard
