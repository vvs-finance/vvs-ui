import React, { useMemo, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Text, Flex, Box, Heading, Grid } from 'vvs-uikit'
import { Link } from 'react-router-dom'
import { useAllTokenData } from 'state/info/hooks'
import { TokenData } from 'state/info/types'
import { CurrencyLogo } from 'views/Info/components/CurrencyLogo'
import { formatAmount } from 'views/Info/utils/formatInfoNumbers'
import Percent from 'views/Info/components/Percent'
import { useTranslation } from 'contexts/Localization'

const CardWrapper = styled(Link)`
  display: inline-block;
  margin-right: 16px;
  min-width: 278.5px;
  height: 104px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const TopMoverCard = styled(Box)`
  background-color: ${({ theme }) => theme.card.background};
  border-radius: ${({ theme }) => theme.radii.card};
  padding: 16px;
`

export const ScrollableRow = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 16px 0;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`

const DataCard = ({ tokenData }: { tokenData: TokenData }) => {
  return (
    <CardWrapper to={`/info/token/${tokenData.address}`}>
      <TopMoverCard>
        <Grid>
          <Grid>
            <Flex justifyContent="space-between" alignItems="center">
              <Box ml="16px">
                <Text fontSize="13px">{tokenData.symbol}</Text>
                <Text fontSize="20px" mr="6px" lineHeight="32px" bold>
                  ${formatAmount(tokenData.priceUSD)}
                </Text>
              </Box>
              <Flex width="44px" mr="16px">
                {/* wrapped in a box because of alignment issues between img and svg */}
                <CurrencyLogo address={tokenData.address} size="44px" />
              </Flex>
            </Flex>
          </Grid>
          <Grid>
            <Box ml="16px">
              <Percent fontSize="14px" value={tokenData.priceUSDChange} />
            </Box>
          </Grid>
        </Grid>
      </TopMoverCard>
    </CardWrapper>
  )
}

const TopTokenMovers: React.FC = () => {
  const allTokens = useAllTokenData()
  const { t } = useTranslation()

  const topPriceIncrease = useMemo(() => {
    return Object.values(allTokens)
      .sort(({ data: a }, { data: b }) => {
        // eslint-disable-next-line no-nested-ternary
        return a && b ? (Math.abs(a?.priceUSDChange) > Math.abs(b?.priceUSDChange) ? -1 : 1) : -1
      })
      .slice(0, Math.min(20, Object.values(allTokens).length))
  }, [allTokens])

  const increaseRef = useRef<HTMLDivElement>(null)
  const moveLeftRef = useRef<boolean>(true)
  // const [pauseAnimation, setPauseAnimation] = useState(false)
  // const [resetInterval, setClearInterval] = useState<() => void | undefined>()

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (increaseRef.current) {
        if (increaseRef.current.scrollLeft === increaseRef.current.scrollWidth - increaseRef.current.clientWidth) {
          moveLeftRef.current = false
        } else if (increaseRef.current.scrollLeft === 0) {
          moveLeftRef.current = true
        }
        increaseRef.current.scrollTo(
          moveLeftRef.current ? increaseRef.current.scrollLeft + 1 : increaseRef.current.scrollLeft - 1,
          0,
        )
      }
    }, 30)

    return () => {
      clearInterval(scrollInterval)
    }
  }, [])

  if (topPriceIncrease.length === 0 || !topPriceIncrease.some((entry) => entry.data)) {
    return null
  }

  return (
    <>
      <Heading scale="lg" mb="16px" mt="43px">
        {t('Top Movers')}
      </Heading>
      <ScrollableRow ref={increaseRef}>
        {topPriceIncrease.map((entry) =>
          entry.data ? <DataCard key={`top-card-token-${entry.data?.address}`} tokenData={entry.data} /> : null,
        )}
      </ScrollableRow>
    </>
  )
}

export default TopTokenMovers
