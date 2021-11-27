import React, { useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import { usePollFarmsPublicData } from 'state/farms/hooks'
import { useFetchPublicPoolsData, useFetchUserPools, usePools, useVvsVault } from 'state/pools/hooks'
import { useUserPoolStakedOnly } from 'state/user/hooks'
import { CardLayout } from 'views/Pools'
import PoolCard from 'views/Pools/components/PoolCard'
import VvsVaultCard from 'views/Pools/components/VvsVaultCard'
import { partition } from 'lodash'
import BigNumber from 'bignumber.js'

const MyMines = () => {
  const { account } = useWeb3React()
  const { pools: poolsWithoutAutoVault, userDataLoaded } = usePools()
  const [stakedOnly, setStakedOnly] = useUserPoolStakedOnly()
  const {
    userData: { vvsAtLastUserAction, userShares },
    fees: { performanceFee },
    pricePerFullShare,
    totalVvsInVault,
  } = useVvsVault()
  const accountHasVaultShares = userShares && userShares.gt(0)
  
  const pools = useMemo(() => {
    const vvsPool = poolsWithoutAutoVault.find((pool) => pool.sousId === 0)
    const vvsAutoVault = { ...vvsPool, isAutoVault: true }
    return [vvsAutoVault, ...poolsWithoutAutoVault]
  }, [poolsWithoutAutoVault])

  // TODO aren't arrays in dep array checked just by reference, i.e. it will rerender every time reference changes?
  const [finishedPools, openPools] = useMemo(() => partition(pools, (pool) => pool.isFinished), [pools])

  const stakedOnlyOpenPools = useMemo(
    () =>
      openPools.filter((pool) => {
        if (pool.isAutoVault) {
          return accountHasVaultShares
        }
        return pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)
      }),
    [openPools, accountHasVaultShares],
  )

  usePollFarmsPublicData()
  useFetchPublicPoolsData()
  useFetchUserPools(account)

  const chosenPools = stakedOnly ? stakedOnlyOpenPools : openPools

  return (
    <div>
      <CardLayout>
        {chosenPools.map((pool) =>
          pool.isAutoVault ? (
            <VvsVaultCard key="auto-vvs" pool={pool} showStakedOnly={stakedOnly} />
          ) : (
            // eslint-disable-next-line react/jsx-no-undef
            <PoolCard key={pool.sousId} pool={pool} account={account} />
          ),
        )}
      </CardLayout>
    </div>
  )
}

export default MyMines
