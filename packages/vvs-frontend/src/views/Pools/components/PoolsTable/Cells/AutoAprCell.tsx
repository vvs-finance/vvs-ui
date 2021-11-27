import React from 'react'
import styled from 'styled-components'
import { Text, useMatchBreakpoints } from 'vvs-uikit'
import { DeserializedPool } from 'state/types'
import { useVvsVault } from 'state/pools/hooks'
import { useTranslation } from 'contexts/Localization'
import { isBlindMode } from 'utils'
import BaseCell, { CellContent } from './BaseCell'
import Apr from '../Apr'
import { convertSharesToVvs } from '../../../helpers'

interface AprCellProps {
  pool: DeserializedPool
}

const StyledCell = styled(BaseCell)`
  flex: 1 0 50px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0 0 120px;
  }
`

const AutoAprCell: React.FC<AprCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  const {
    userData: { userShares },
    fees: { performanceFee },
    pricePerFullShare,
  } = useVvsVault()

  const { vvsAsBigNumber } = convertSharesToVvs(userShares, pricePerFullShare)
  const performanceFeeAsDecimal = performanceFee && performanceFee / 100

  return (
    <StyledCell role="cell">
      <CellContent>
        <Text fontSize="12px" color="textSubtle" textAlign="left">
          {isBlindMode() ? t('VVS Allocation') : t('APY')}
        </Text>
        {isBlindMode() ? "/ Block" : <Apr pool={pool} stakedBalance={vvsAsBigNumber} performanceFee={performanceFeeAsDecimal} showIcon={!isMobile} />}
      </CellContent>
    </StyledCell>
  )
}

export default AutoAprCell
