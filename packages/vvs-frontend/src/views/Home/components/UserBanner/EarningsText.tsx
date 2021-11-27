import { ContextApi } from 'contexts/Localization/types'
import BigNumber from 'bignumber.js'

export const getEarningsText = (
  numFarmsToCollect: number,
  hasVvsPoolToCollect: boolean,
  earningsUsdc: BigNumber,
  t: ContextApi['t'],
): string => {
  const data = {
    earningsUsdc: earningsUsdc.toString(),
    count: numFarmsToCollect,
  }

  let earningsText = t('%earningsUsdc% to collect', data)

  if (numFarmsToCollect > 0 && hasVvsPoolToCollect) {
    if (numFarmsToCollect > 1) {
      earningsText = t('%earningsUsdc% to collect from %count% farms and VVS mine', data)
    } else {
      earningsText = t('%earningsUsdc% to collect from %count% farm and VVS mine', data)
    }
  } else if (numFarmsToCollect > 0) {
    if (numFarmsToCollect > 1) {
      earningsText = t('%earningsUsdc% to collect from %count% farms', data)
    } else {
      earningsText = t('%earningsUsdc% to collect from %count% farm', data)
    }
  } else if (hasVvsPoolToCollect) {
    earningsText = t('%earningsUsdc% to collect from VVS mine', data)
  }

  return earningsText
}
