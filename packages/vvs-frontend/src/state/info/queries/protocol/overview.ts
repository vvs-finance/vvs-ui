import { useState, useEffect } from 'react'
import { request, gql } from 'graphql-request'
import { INFO_CLIENT } from 'config/constants/endpoints'
import { getChangeForPeriod, getPercentChange } from 'views/Info/utils/infoDataHelpers'
import { ProtocolData } from 'state/info/types'
import { getDeltaTimestamps } from 'views/Info/utils/infoQueryHelpers'
import { useBlocksFromTimestamps } from 'views/Info/hooks/useBlocksFromTimestamps'

interface VvsFactory {
  totalTransactions: string
  totalVolumeUSD: string
  totalLiquidityUSD: string
}

interface OverviewResponse {
  vvsFactories: VvsFactory[]
}

/**
 * Latest Liquidity, Volume and Transaction count
 */
const getOverviewData = async (block?: number): Promise<{ data?: OverviewResponse; error: boolean }> => {
  try {
    const query = gql`query overview {
      vvsFactories(
        ${block ? `block: { number: ${block}}` : ``} 
        first: 1) {
        totalTransactions
        totalVolumeUSD
        totalLiquidityUSD
      }
    }`
    const data = await request<OverviewResponse>(INFO_CLIENT, query)
    return { data, error: false }
  } catch (error) {
    console.error('Failed to fetch info overview', error)
    return { data: null, error: true }
  }
}

const formatVvsFactoryResponse = (rawVvsFactory?: VvsFactory) => {
  if (rawVvsFactory) {
    return {
      totalTransactions: parseFloat(rawVvsFactory.totalTransactions),
      totalVolumeUSD: parseFloat(rawVvsFactory.totalVolumeUSD),
      totalLiquidityUSD: parseFloat(rawVvsFactory.totalLiquidityUSD),
    }
  }
  return null
}

interface ProtocolFetchState {
  error: boolean
  data?: ProtocolData
}

const useFetchProtocolData = (): ProtocolFetchState => {
  const [fetchState, setFetchState] = useState<ProtocolFetchState>({
    error: false,
  })
  const [t24, t48] = getDeltaTimestamps()
  const { blocks, error: blockError } = useBlocksFromTimestamps([t24, t48])
  const [block24, block48] = blocks ?? []

  useEffect(() => {
    const fetch = async () => {
      const { error, data } = await getOverviewData()
      const { error: error24, data: data24 } = await getOverviewData(block24?.number ?? undefined)
      const { error: error48, data: data48 } = await getOverviewData(block48?.number ?? undefined)
      const anyError = error || error24 || error48
      const overviewData = formatVvsFactoryResponse(data?.vvsFactories?.[0])

      // When VVS is first launched, both 24 and 48 hr will be null
      const overviewData24Formatted = formatVvsFactoryResponse(data24?.vvsFactories?.[0])
      const overviewData24 = overviewData24Formatted || overviewData
      const overviewData48Formatted = formatVvsFactoryResponse(data48?.vvsFactories?.[0]) // FIXME hard code no data for 48h
      const overviewData48 = overviewData48Formatted || overviewData24 || overviewData

      const allDataAvailable = overviewData && overviewData24 && overviewData48
      if (anyError || !allDataAvailable) {
        setFetchState({
          error: true,
        })
      } else {
        const [volumeUSD, volumeUSDChange] = getChangeForPeriod(
          overviewData.totalVolumeUSD,
          overviewData24.totalVolumeUSD,
          overviewData48.totalVolumeUSD,
        )
        const liquidityUSDChange = getPercentChange(overviewData.totalLiquidityUSD, overviewData24.totalLiquidityUSD)
        // 24H transactions
        const [txCount, txCountChange] = getChangeForPeriod(
          overviewData.totalTransactions,
          overviewData24.totalTransactions,
          overviewData48.totalTransactions,
        )
        const protocolData: ProtocolData = {
          volumeUSD,
          volumeUSDChange: typeof volumeUSDChange === 'number' ? volumeUSDChange : 0,
          liquidityUSD: overviewData.totalLiquidityUSD,
          liquidityUSDChange,
          txCount,
          txCountChange,
        }
        setFetchState({
          error: false,
          data: protocolData,
        })
      }
    }
    const allBlocksAvailable = block24?.number && block48?.number
    if (allBlocksAvailable && !blockError && !fetchState.data) {
      fetch()
    }
  }, [block24, block48, blockError, fetchState])

  return fetchState
}

export default useFetchProtocolData
