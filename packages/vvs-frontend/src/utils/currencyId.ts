import { Currency, ETHER, Token } from 'vvs-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'CRO'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
