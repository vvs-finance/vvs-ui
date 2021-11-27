import React from 'react'
import { Flex, useMatchBreakpoints } from 'vvs-uikit'
import styled from 'styled-components'
import { flyingDiamond } from '../../Home/components/Hero'

const MineBackgroundAnimation = styled(Flex)`
  height: 150px;
  width: 300px;
  right: -80px;
  top: 0;
  position: absolute;
  transform: scale(0.7);

  ${({ theme }) => theme.mediaQueries.lg} {
    transform: scale(1);
    right: 0;
    top: 40px;
  }

  & > img:nth-child(1) {
    animation: ${() => flyingDiamond(2, -4)} 2s ease-in-out infinite;
    animation-delay: 0.3s;
  }
  & > img:nth-child(2) {
    animation: ${() => flyingDiamond(3, -4)} 2s ease-in-out infinite;
    animation-delay: 0.1s;
  }
  & > img:nth-child(3) {
    animation: ${() => flyingDiamond(2, -4)} 2s ease-in-out infinite;
    animation-delay: 0.2s;
  }
`

const ImageWrapper = styled.img<{ top?: string; left?: string; maxHeight?: string; maxWidth?: string }>`
  position: absolute;
  top: ${({ top }) => top || 0};
  left: ${({ left }) => left || 0};
  max-height: ${({ maxHeight }) => maxHeight || '100%'};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
`

const MineBackground = () => {
  const { isMobile } = useMatchBreakpoints()

  return !isMobile ? (
    <MineBackgroundAnimation>
      <ImageWrapper
        src="/images/mine/diamondLeft.svg"
        alt="diamond-left"
        left="-331px"
        maxWidth="130px"
        maxHeight="130px"
        height="130px"
        width="130px"
        top="-45px"
      />
      <ImageWrapper
        src="/images/mine/diamondMiddle.svg"
        maxHeight="80px"
        alt="diamond-Middle"
        left="-178px"
        top="-38px"
        width="70px"
        height="55px"
      />
      <ImageWrapper
        src="/images/mine/diamondRight.svg"
        maxHeight="80px"
        alt="diamond-Right"
        left="133px"
        top="-35px"
        width="70px"
      />
      <ImageWrapper
        src="/images/mine/mine.svg"
        width="480px"
        height="260px"
        maxHeight="260px"
        maxWidth="480px"
        left="-300px"
        alt="mine"
        top="-58px"
      />
    </MineBackgroundAnimation>
  ) : null
}
export default MineBackground
