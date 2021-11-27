import BigNumber from 'bignumber.js'
import { BLOCKS_PER_YEAR, VVS_PER_YEAR } from 'config'
import lpAprs from 'config/constants/lpAprs.json'

/**
 * Get the APR value in %
 * @param stakingTokenPrice Token price in the same quote currency
 * @param rewardTokenPrice Token price in the same quote currency
 * @param totalStaked Total amount of stakingToken in the pool
 * @param tokenPerBlock Amount of new VVS allocated to the pool for each new block
 * @returns Null if the APR is NaN or infinite.
 */
export const getPoolApr = (
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  totalStaked: number,
  tokenPerBlock: number,
): number => {
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(BLOCKS_PER_YEAR)
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)
  // const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(1000000000) // XXX debug hard code for APR
  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber()
}

/**
 * Get farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param vvsPriceUsd VVS price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @param farmAddress Farm Address
 * @returns Farm Apr
 */
export const getFarmApr = (
  poolWeight: BigNumber,
  vvsPriceUsd: BigNumber,
  poolLiquidityUsd: BigNumber,
  farmAddress: string,
): { vvsRewardsApr: number; lpRewardsApr: number } => {
  const yearlyVvsRewardAllocation = poolWeight ? poolWeight.times(VVS_PER_YEAR) : new BigNumber(NaN)
  const vvsRewardsApr = yearlyVvsRewardAllocation.times(vvsPriceUsd).div(poolLiquidityUsd).times(100)
  let vvsRewardsAprAsNumber = null
  if (!vvsRewardsApr.isNaN() && vvsRewardsApr.isFinite()) {
    vvsRewardsAprAsNumber = vvsRewardsApr.toNumber()
  }
  const lpRewardsApr = lpAprs[farmAddress?.toLocaleLowerCase()] ?? 0
  return { vvsRewardsApr: vvsRewardsAprAsNumber, lpRewardsApr }
}

export default null
