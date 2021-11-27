import BigNumber from 'bignumber.js'
import { DeserializedPool } from 'state/types'
import { getApy } from 'utils/compoundApyHelpers'
import { getBalanceNumber, getFullDisplayBalance, getDecimalAmount } from 'utils/formatBalance'

export const convertSharesToVvs = (
  shares: BigNumber,
  vvsPerFullShare: BigNumber,
  decimals = 18,
  decimalsToRound = 3,
) => {
  const sharePriceNumber = getBalanceNumber(vvsPerFullShare, decimals)
  const amountInVvs = new BigNumber(shares.multipliedBy(sharePriceNumber))
  const vvsAsNumberBalance = getBalanceNumber(amountInVvs, decimals)
  const vvsAsBigNumber = getDecimalAmount(new BigNumber(vvsAsNumberBalance), decimals)
  const vvsAsDisplayBalance = getFullDisplayBalance(amountInVvs, decimals, decimalsToRound)
  return { vvsAsNumberBalance, vvsAsBigNumber, vvsAsDisplayBalance }
}

export const convertVvsToShares = (vvs: BigNumber, vvsPerFullShare: BigNumber, decimals = 18, decimalsToRound = 3) => {
  const sharePriceNumber = getBalanceNumber(vvsPerFullShare, decimals)
  const amountInShares = new BigNumber(vvs.dividedBy(sharePriceNumber))
  const sharesAsNumberBalance = getBalanceNumber(amountInShares, decimals)
  const sharesAsBigNumber = getDecimalAmount(new BigNumber(sharesAsNumberBalance), decimals)
  const sharesAsDisplayBalance = getFullDisplayBalance(amountInShares, decimals, decimalsToRound)
  return { sharesAsNumberBalance, sharesAsBigNumber, sharesAsDisplayBalance }
}

const AUTO_VAULT_COMPOUND_FREQUENCY = 5000
const MANUAL_POOL_AUTO_COMPOUND_FREQUENCY = 0

export const getAprData = (pool: DeserializedPool, performanceFee: number) => {
  const { isAutoVault, apr } = pool

  //   Estimate & manual for now. 288 = once every 5 mins. We can change once we have a better sense of this
  const autoCompoundFrequency = isAutoVault ? AUTO_VAULT_COMPOUND_FREQUENCY : MANUAL_POOL_AUTO_COMPOUND_FREQUENCY

  if (isAutoVault) {
    const autoApr = getApy(apr, AUTO_VAULT_COMPOUND_FREQUENCY, 365, performanceFee) * 100
    return { apr: autoApr, autoCompoundFrequency }
  }
  return { apr, autoCompoundFrequency }
}

export const getVvsVaultEarnings = (
  account: string,
  vvsAtLastUserAction: BigNumber,
  userShares: BigNumber,
  pricePerFullShare: BigNumber,
  earningTokenPrice: number,
) => {
  const hasAutoEarnings =
    account && vvsAtLastUserAction && vvsAtLastUserAction.gt(0) && userShares && userShares.gt(0)
  const { vvsAsBigNumber } = convertSharesToVvs(userShares, pricePerFullShare)
  const autoVvsProfit = vvsAsBigNumber.minus(vvsAtLastUserAction)
  const autoVvsToDisplay = autoVvsProfit.gte(0) ? getBalanceNumber(autoVvsProfit, 18) : 0

  const autoUsdProfit = autoVvsProfit.times(earningTokenPrice)
  const autoUsdToDisplay = autoUsdProfit.gte(0) ? getBalanceNumber(autoUsdProfit, 18) : 0
  return { hasAutoEarnings, autoVvsToDisplay, autoUsdToDisplay }
}

export const getPoolBlockInfo = (pool: DeserializedPool, currentBlock: number) => {
  const { startBlock, endBlock, isFinished } = pool
  const shouldShowBlockCountdown = Boolean(!isFinished && startBlock && endBlock)
  const blocksUntilStart = Math.max(startBlock - currentBlock, 0)
  const blocksRemaining = Math.max(endBlock - currentBlock, 0)
  const hasPoolStarted = blocksUntilStart === 0 && blocksRemaining > 0
  const blocksToDisplay = hasPoolStarted ? blocksRemaining : blocksUntilStart
  return { shouldShowBlockCountdown, blocksUntilStart, blocksRemaining, hasPoolStarted, blocksToDisplay }
}
