import { ChainId } from 'vvs-sdk'
import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const CRONOS_BLOCK_TIME = 6 // FIXME block time

// FIXME cronos explorer
export const BASE_EXPLORER_URLS = {
  [ChainId.MAINNET]: 'https://cronos.crypto.org/explorer',
  [ChainId.TESTNET]: 'https://cronos.crypto.org/explorer/testnet3',
}

// CAKE_PER_BLOCK details
// 40 CAKE is minted per block
// 20 CAKE per block is sent to Burn pool (A farm just for burning cake)
// 10 CAKE per block goes to CAKE syrup pool
// 9 CAKE per block goes to Yield farms and lottery
// CAKE_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// CAKE/Block in src/views/Home/components/CakeDataRow.tsx = 15 (40 - Amount sent to burn pool)
export const VVS_PER_BLOCK = Number(process.env.REACT_APP_VVS_PER_BLOCK) // FIXME vvs per block
export const BLOCKS_PER_YEAR = (60 / CRONOS_BLOCK_TIME) * 60 * 24 * 365 // 10512000
export const VVS_PER_YEAR = VVS_PER_BLOCK * BLOCKS_PER_YEAR // FIXME vvs block per year
export const BASE_URL = process.env.REACT_APP_BASE_URL // FIXME env var base URL
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
// export const BASE_EXPLORER_URL = BASE_EXPLORER_URLS[ChainId.MAINNET]
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 200000
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs'
