import React from 'react'
import { TokenPairImage, ImageProps } from 'vvs-uikit'
import { mainnetTokens } from 'config/constants/tokens'

const VvsVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const primaryTokenSrc = `/images/tokens/${mainnetTokens.vvs.address}.svg`

  return <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc="/images/tokens/autorenew.svg" {...props} />
}

export default VvsVaultTokenPairImage
