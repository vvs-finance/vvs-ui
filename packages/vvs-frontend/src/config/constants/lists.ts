const VVS_EXTENDED = 'https://vvs.finance/vvs-extended.json'
const VVS_TOP100 = 'https://vvs.finance/vvs-top-100.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  // VVS_TOP100,
  // VVS_EXTENDED,
  // ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
