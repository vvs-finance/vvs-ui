import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()
// FIXME update pid, address and tokens for LP
const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'VVS',
    lpAddresses: {
      338: '0x904Bd5a5AAC0B9d88A0D47864724218986Ad4a3a',
      25: '0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
    },
    token: serializedTokens.workbench,
    quoteToken: serializedTokens.wcro,
  },
  // {
  //   pid: 251,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     338: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
  //     25: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 252,
  //   lpSymbol: 'BUSD-BNB LP',
  //   lpAddresses: {
  //     338: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
  //     25: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.wbnb,
  // },
  {
    pid: 1,
    lpSymbol: 'CRO-ETH LP',
    lpAddresses: {
      338: '0xD37d267B2161035A9CF2023F9753CddbfC8B90F3',
      25: '0xA111C17f8B8303280d3EB01BBcd61000AA7F39F9',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wcro,
  },
  {
    pid: 2,
    lpSymbol: 'CRO-WBTC LP',
    lpAddresses: {
      338: '0xbDAA80e9EA59bFD3A8AE5705c66804F2e1D9D508',
      25: '0x8F09fFf247B8fDB80461E5Cf5E82dD1aE2EBd6d7',
    },
    token: serializedTokens.wbtc,
    quoteToken: serializedTokens.wcro,
  },    
  {
    pid: 3,
    lpSymbol: 'CRO-USDC LP',
    lpAddresses: {
      338: '0x5323D7CE6a12282c0448d255d8B5EDc9918E52Da',
      25: '0xe61Db569E231B3f5530168Aa2C9D50246525b6d6',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wcro,
  },
  {
    pid: 4,
    lpSymbol: 'CRO-VVS LP',
    lpAddresses: {
      338: '0x3F3465b412B6017E20AF7ABFFAB67698de8cFa7a',
      25: '0xbf62c67eA509E86F07c8c69d0286C0636C50270b',
    },
    token: serializedTokens.vvs,
    quoteToken: serializedTokens.wcro,
  },
  {
    pid: 5,
    lpSymbol: 'VVS-USDC LP',
    lpAddresses: {
      338: '0x9e3A0434ED428dFDe5ace779ead35e141DD95eFf',
      25: '0x814920d1b8007207db6cb5a2dd92bf0b082bdba1',
    },
    token: serializedTokens.vvs,
    quoteToken: serializedTokens.usdc,
  },
]

export default farms
