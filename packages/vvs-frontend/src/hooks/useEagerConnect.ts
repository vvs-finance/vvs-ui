import { useEffect } from 'react'
import { connectorLocalStorageKey, ConnectorNames } from 'vvs-uikit'
import useAuth from 'hooks/useAuth'
import { connectorsByName } from 'utils/web3React'
import { useWeb3React } from '@web3-react/core'
import { isMobile } from '@deficonnect/utils'

const _binanceChainListener = async () =>
  new Promise<void>((resolve) =>
    Object.defineProperty(window, 'BinanceChain', {
      get() {
        return this.bsc
      },
      set(bsc) {
        this.bsc = bsc

        resolve()
      },
    }),
  )

const useEagerConnect = () => {
  const { login } = useAuth()
  const { activate } = useWeb3React()

  useEffect(() => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames
    const isSupportedConnectorId = Object.values(ConnectorNames).includes(connectorId)
    if (connectorId && isSupportedConnectorId) {
      const isConnectorBinanceChain = connectorId === ConnectorNames.BSC
      const isBinanceChainDefined = Reflect.has(window, 'BinanceChain')

      // Currently BSC extension doesn't always inject in time.
      // We must check to see if it exists, and if not, wait for it before proceeding.
      if (isConnectorBinanceChain && !isBinanceChainDefined) {
        _binanceChainListener().then(() => login(connectorId))

        return
      }

      login(connectorId)
    } else {
      const injected = connectorsByName[ConnectorNames.Injected]
      injected.isAuthorized().then((isAuthorized) => {
        if (isAuthorized) {
          login(ConnectorNames.Injected)
        } else {
          // eslint-disable-next-line no-lonely-if
          if (isMobile() && window.ethereum) {
            login(ConnectorNames.Injected)
          }
        }
      })
    }
  }, [activate, login])
}

export default useEagerConnect
