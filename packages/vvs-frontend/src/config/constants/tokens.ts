import { ChainId, Token } from 'vvs-sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  workbench: new Token(
    MAINNET,
    process.env.REACT_APP_WORKBENCH_ADDRESS_MAINNET,
    18,
    'WORKBENCH',
    'WORKBENCH',
    'https://vvs.finance/',
  ),
  cro: new Token(
    MAINNET,
    '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
    18,
    'CRO',
    'CRO Token',
    'https://crypto.org/',
  ),
  wcro: new Token(
    MAINNET,
    '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
    18,
    'WCRO',
    'Wrapped CRO',
    'https://crypto.org/',
  ),
  vvs: new Token(
    MAINNET,
    '0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
    18,
    'VVS',
    'VVS',
    'https://vvs.finance/'),
  eth: new Token(
    MAINNET,
    '0xe44Fd7fCb2b1581822D0c862B68222998a0c299a',
    18,
    'ETH',
    'Wrapped Ether',
    'https://ethereum.org/en/',
  ),
  usdc: new Token(
    MAINNET,
    '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
    6,
    'USDC',
    'USD Coin',
    'https://www.circle.com/en/usdc',
  ),
  wbtc: new Token(
    MAINNET,
    '0x062E66477Faf219F25D27dCED647BF57C3107d52',
    8,
    'WBTC',
    'Wrapped BTC',
    'https://bitcoin.org/en/',
  ),
}

// FIXME tokens for testnet and mainnet
export const testnetTokens = {
  workbench: new Token(
    TESTNET,
    process.env.REACT_APP_WORKBENCH_ADDRESS_TESTNET,
    18,
    'WORKBENCH',
    'WORKBENCH',
    'https://vvs.finance/',
  ),
  cro: new Token(
    TESTNET,
    '0x6a3173618859C7cd40fAF6921b5E9eB6A76f1fD4',
    18,
    'CRO',
    'CRO',
    'https://crypto.org/',
  ),
  wcro: new Token(
    TESTNET,
    '0x6a3173618859C7cd40fAF6921b5E9eB6A76f1fD4',
    18,
    'WCRO',
    'Wrapped CRO',
    'https://crypto.org/',
  ),
  vvs: new Token(
    TESTNET,
    '0x904Bd5a5AAC0B9d88A0D47864724218986Ad4a3a',
    18,
    'VVS',
    'VVS',
    'https://vvs.finance/'),
  eth: new Token(
    TESTNET,
    '0x441d72d584b16105FF1C68DC8bc4517F4DC13E55',
    18,
    'ETH',
    'Wrapped Ether',
    'https://ethereum.org/en/'),
  usdc: new Token(
    TESTNET,
    '0x321106E51b78E0E9CEBcFeC63C5250F0F3CcB82b',
    6,
    'USDC',
    'USD Coin',
    'https://www.circle.com/en/usdc',
  ),
  wbtc: new Token(
    TESTNET,
    '0xFFc8ce84a196420d7bCCDEe980c65364eD1f389F',
    8,
    'WBTC',
    'Wrapped BTC',
    'https://bitcoin.org/en/'),
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    // return Object.keys(mainnetTokens).reduce((accum, key) => {
    //   return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    // }, {})
    return testnetTokens; // FIXME avoid this mainnet override testnet hack
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
