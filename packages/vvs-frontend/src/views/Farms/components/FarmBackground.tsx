import React from 'react'
import { Flex, useMatchBreakpoints } from 'vvs-uikit'
import styled from 'styled-components'
import { flyingDiamond } from '../../Home/components/Hero'

const FarmBackgroundWrapper = styled(Flex)`
  position: absolute;
  max-width: 1200px;
  width: calc(100% - 48px);
  height: 200px;
  pointer-events: none;
  transform: scale(0.7);

  ${({ theme }) => theme.mediaQueries.lg} {
    transform: scale(1);
  }
`
const FarmBackgroundAnimation = styled(Flex)`
  height: 150px;
  width: 300px;
  right: -20px;
  top: 64px;
  position: absolute;

  ${({ theme }) => theme.mediaQueries.lg} {
    right: 140px;
    top: 4px;
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

const FarmBackground = () => {
  const { isMobile } = useMatchBreakpoints()
  return !isMobile ? (
    <FarmBackgroundWrapper>
      <FarmBackgroundAnimation>
        <ImageWrapper
          src="/images/farm/diamondLeft.svg"
          alt="diamond-left"
          height="130px"
          width="130px"
          top="174px"
          left="-200px"
          maxHeight="100px"
          maxWidth="100px"
        />
        <ImageWrapper
          src="/images/farm/diamondMiddle.svg"
          alt="diamond-Middle"
          top="-38px"
          left="-71px"
          maxHeight="350px"
          maxWidth="350px"
          width="350px"
          height="350px"
        />
        <ImageWrapper
          src="/images/farm/diamondRight.svg"
          maxHeight="120px"
          alt="diamond-Right"
          left="324px"
          top="155px"
          width="80px"
          height="120px"
        />
        <ImageWrapper
          src="/images/farm/farm.svg"
          width="450px"
          maxWidth="450px"
          height="400px"
          maxHeight="400px"
          top="5px"
          left="-130px"
          alt="Farm"
        />
      </FarmBackgroundAnimation>
    </FarmBackgroundWrapper>
  ) : null
}
export default FarmBackground
