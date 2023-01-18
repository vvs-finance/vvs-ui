import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { BigNumber } from '@ethersproject/bignumber'
import { abi as IUniswapV2Router02ABI } from '@uniswap/v2-periphery/build/IUniswapV2Router02.json'
import { ChainId, JSBI, Percent, Token, CurrencyAmount, Currency, ETHER } from 'vvs-sdk'
import { ROUTER_ADDRESS } from '../config/constants'
import { BASE_EXPLORER_URLS } from '../config'
import { TokenAddressMap } from '../state/lists/hooks'

export function isBlindMode() {
  return process.env.REACT_APP_BLIND_FARMING === 'true'
}

// has countdown
export function isCountdown(): boolean {
  return process.env.REACT_APP_COUNT_DOWN === 'true'
}
// show vvsPrice
export function showVvsPrice(): boolean {
  return process.env.REACT_APP_SHOW_VVS_PRICE === 'true'
}

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

export function getExplorerLink( // FIXME change to cronos explorer
  data: string | number,
  type: 'transaction' | 'token' | 'address' | 'block' | 'countdown',
  chainId: ChainId = ChainId.MAINNET,
): string {
  switch (type) {
    case 'transaction': {
      return `${BASE_EXPLORER_URLS[chainId]}/tx/${data}`
    }
    case 'token': {
      return `${BASE_EXPLORER_URLS[chainId]}/token/${data}`
    }
    case 'block': {
      return `${BASE_EXPLORER_URLS[chainId]}/block/${data}`
    }
    case 'countdown': {
      return `${BASE_EXPLORER_URLS[chainId]}/block/countdown/${data}`
    }
    default: {
      return `${BASE_EXPLORER_URLS[chainId]}/address/${data}`
    }
  }
}

// add 10%
export function calculateGasMargin(value: BigNumber): BigNumber {
  return value.mul(BigNumber.from(10000).add(BigNumber.from(1000))).div(BigNumber.from(10000))
}

// converts a basis points value to a sdk percent
export function basisPointsToPercent(num: number): Percent {
  return new Percent(JSBI.BigInt(num), JSBI.BigInt(10000))
}

export function calculateSlippageAmount(value: CurrencyAmount, slippage: number): [JSBI, JSBI] {
  if (slippage < 0 || slippage > 10000) {
    throw Error(`Unexpected slippage value: ${slippage}`)
  }
  return [
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 - slippage)), JSBI.BigInt(10000)),
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 + slippage)), JSBI.BigInt(10000)),
  ]
}

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

// account is optional
export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account) as any)
}

// account is optional
export function getRouterContract(_: number, library: Web3Provider, account?: string): Contract {
  return getContract(ROUTER_ADDRESS, IUniswapV2Router02ABI, library, account)
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export function isTokenOnList(defaultTokens: TokenAddressMap, currency?: Currency): boolean {
  if (currency === ETHER) return true
  return Boolean(currency instanceof Token && defaultTokens[currency.chainId]?.[currency.address])
}