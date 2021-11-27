import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    25: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    338: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  }

  it(`get address for mainnet (chainId 25)`, () => {
    process.env.REACT_APP_CHAIN_ID = '25'
    const expected = address[25]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 338)`, () => {
    process.env.REACT_APP_CHAIN_ID = '338'
    const expected = address[338]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.REACT_APP_CHAIN_ID = '31337'
    const expected = address[31337]
    expect(getAddress(address)).toEqual(expected)
  })
})
