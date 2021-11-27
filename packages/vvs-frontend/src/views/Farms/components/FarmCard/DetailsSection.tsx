import React from 'react'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { Text, Flex, LinkExternal, Skeleton } from 'vvs-uikit'
import { isBlindMode } from 'utils'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkBlue};
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  infoAddress,
  removed,
  totalValueFormatted,
  lpLabel,
  addLiquidityUrl,
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Flex justifyContent="space-between" mb="8px">
        <Text color="textSubtle" fontSize="13px">
          {t('Total Liquidity')}:
        </Text>
        {totalValueFormatted ? <Text>{totalValueFormatted}</Text> : <Skeleton width={75} height={25} />}
      </Flex>
      {!removed && (
        <StyledLinkExternal color="blue" href={addLiquidityUrl}>
          {t('Get %symbol%', { symbol: lpLabel })}
        </StyledLinkExternal>
      )}
      <StyledLinkExternal color="blue" href={bscScanAddress}>
        {t('View Contract')}
      </StyledLinkExternal>
      {!isBlindMode() && <StyledLinkExternal color="blue" href={infoAddress}>
        {t('See Pair Info')}
      </StyledLinkExternal>}
    </Wrapper>
  )
}

export default DetailsSection
