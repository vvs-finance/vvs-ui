import { Image, Flex } from 'vvs-uikit'
import React from 'react'

export const Spinner = ({ size = 128 }: { size?: number }) => {
  return (
    <Flex height="120px" width="120px">
      <Image src="/images/loadingDiamond.gif" alt="loading" width={size} height={size} />
    </Flex>
  )
}
