import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 25,
  TESTNET = 338
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// export const FACTORY_ADDRESS = "0x6a3173618859C7cd40fAF6921b5E9eB6A76f1fD4" // FIXME env var factory address

// export const INIT_CODE_HASH = "0xb625aef5788a1fada153279073f4aefa8ce4d35388596d08ec3cdb1abe445c07" // FIXME env var init code hash

export const FACTORY_ADDRESSES = {
  [ChainId.MAINNET]: "0x3b44b2a187a7b3824131f8db5a74194d0a42fc15",
  [ChainId.TESTNET]: "0x7cEd5C4494D00B503196F2Ef40240Ad39930f1bc"
}

export const INIT_CODE_HASHES = {
  [ChainId.MAINNET]: "0xa77ee1cc0f39570ddde947459e293d7ebc2c30ff4e8fc45860afdcb2c2d3dc17",
  [ChainId.TESTNET]: "0xfa868a2693adfae1ebe0bb2b0bfd0838b3eea4c053c4519e564f7f653ce3cfaa"
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
