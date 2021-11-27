import BigNumber from 'bignumber.js'
import { getVvsVaultContract } from 'utils/contractHelpers'

const vvsVaultContract = getVvsVaultContract()

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await vvsVaultContract.userInfo(account)
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      vvsAtLastUserAction: new BigNumber(userContractResponse.vvsAtLastUserAction.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      vvsAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
