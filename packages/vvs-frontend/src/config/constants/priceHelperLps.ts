import tokens from './tokens'
import { SerializedFarmConfig } from './types'
// FIXME price helper
const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absense of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  // {
  //   pid: null,
  //   lpSymbol: 'VVS',
  //   lpAddresses: {
  //     338: '0x904Bd5a5AAC0B9d88A0D47864724218986Ad4a3a',
  //     25: '',
  //   },
  //   token: tokens.vvs,
  //   quoteToken: tokens.wcro,
  // },
]

export default priceHelperLps
