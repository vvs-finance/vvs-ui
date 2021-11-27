import { useEffect } from 'react'
import { useVvsUsdcPrice } from 'hooks/useUsdcPrice'

const useGetDocumentTitlePrice = () => {
  const vvsPriceUsdc = useVvsUsdcPrice()
  useEffect(() => {
    const vvsPriceUsdcString = vvsPriceUsdc ? vvsPriceUsdc.toFixed(2) : ''
    document.title = `VVS Swap - ${vvsPriceUsdcString}`
  }, [vvsPriceUsdc])
}
export default useGetDocumentTitlePrice
