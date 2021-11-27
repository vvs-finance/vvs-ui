import React from 'react'
import { Text, TooltipText, useTooltip } from 'vvs-uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import { isBlindMode } from 'utils'

interface RecentVvsProfitBalanceProps {
  vvsToDisplay: number
  dollarValueToDisplay: number
  dateStringToDisplay: string
}

const RecentVvsProfitBalance: React.FC<RecentVvsProfitBalanceProps> = ({
  vvsToDisplay,
  dollarValueToDisplay,
  dateStringToDisplay,
}) => {
  const { t } = useTranslation()

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Balance fontSize="16px" value={vvsToDisplay} decimals={3} bold unit=" VVS" />
      {!isBlindMode() && <Balance fontSize="16px" value={dollarValueToDisplay} decimals={2} bold prefix="~$" />}
      {t('Earned since your last action')}
      <Text>{dateStringToDisplay}</Text>
    </>,
    {
      placement: 'bottom-end',
    },
  )

  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        <Balance fontSize="14px" value={vvsToDisplay} />
      </TooltipText>
    </>
  )
}

export default RecentVvsProfitBalance
