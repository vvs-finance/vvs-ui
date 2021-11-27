import BigNumber from 'bignumber.js'
import { convertSharesToVvs } from 'views/Pools/helpers'
import { multicallv2 } from 'utils/multicall'
import vvsVaultAbi from 'config/abi/vvsVault.json'
import { getVvsVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'

export const fetchPublicVaultData = async () => {
  try {
    const calls = [
      'getPricePerFullShare',
      'totalShares',
      'calculateHarvestVVSRewards',
      'calculateTotalPendingVVSRewards',
    ].map((method) => ({
      address: getVvsVaultAddress(),
      name: method,
    }))

    const [[sharePrice], [shares], [estimatedVvsBountyReward], [totalPendingVvsHarvest]] = await multicallv2(
      vvsVaultAbi,
      calls,
    )

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    const totalVvsInVaultEstimate = convertSharesToVvs(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalVvsInVault: totalVvsInVaultEstimate.vvsAsBigNumber.toJSON(),
      estimatedVvsBountyReward: new BigNumber(estimatedVvsBountyReward.toString()).toJSON(),
      totalPendingVvsHarvest: new BigNumber(totalPendingVvsHarvest.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalVvsInVault: null,
      estimatedVvsBountyReward: null,
      totalPendingVvsHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const calls = ['performanceFee', 'callFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: getVvsVaultAddress(),
      name: method,
    }))

    const [[performanceFee], [callFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2(vvsVaultAbi, calls)

    return {
      performanceFee: performanceFee.toNumber(),
      callFee: callFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
