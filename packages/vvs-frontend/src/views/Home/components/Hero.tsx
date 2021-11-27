import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { Flex, Image, Link, Button, Text, useMatchBreakpoints } from 'vvs-uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { isCountdown } from 'utils'
import CompositeImage, { CompositeImageProps } from './CompositeImage'
import { StyledBigHeading } from './StyledHeadings'
import { DotLineA, DotLineB, StyledDotLine } from './Animations'
import LaunchCountDown from './LaunchCountDown'
import MoleCompositeImage, { MoleCompositeImageProps } from './MoleCompositeImage'

export const flyingDiamond = (x, y) => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(${x}px, ${y}px);
  }
  to {
    transform: translate(0, 0);
  }  
`

export const fading = () => keyframes`
  from {
    transform: scale(0)
  }
  60% {
    transform: scale(1)
  }
  90% {
    transform: scale(0)
  }
  to {
    transform: scale(0)
  }  
`
export const flash = () => keyframes`
  from {
    transform: scale(0)
  }
  30% {
    transform: scale(1)
  }
  50% {
    transform: scale(0.3)
  }
  70% {
    transform: scale(1)
  }
  90% {
    transform: scale(0)
  }
  to {
    transform: scale(0)
  }
`

export const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const HeroBgWrapper = styled(BgWrapper)`
  background: ${({ theme }) => theme.colors.darkPurple};
`

const InnerWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: -3px;
`

const HeroContainer = styled(Flex)`
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    height: 160px;
    min-height: 160px;
  }
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 73%;
  left: 34%;
  height: 100px;
  width: 100px;
  transform: scale(0.7);
  & :nth-child(1) {
    animation: ${fading} 3s ease-in-out infinite;
    animation-delay: 0.1s;
  }

  & :nth-child(2) {
    animation: ${fading} 3s ease-in-out infinite;
    animation-delay: 0.3s;
  }

  & :nth-child(3) {
    animation: ${fading} 3s ease-in-out infinite;
    animation-delay: 0.5s;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    top: 60%;
    left: 38%;
    transform: scale(1);
  }
`

export const ScaleContainer = styled(Flex)<{ minHeight?: string; maxWidth?: string }>`
  top: 90px;
  transform: scale(0.3);
  min-height: 260px;
  max-width: ${({ maxWidth }) => maxWidth ?? 'auto'};
  min-height: ${({ minHeight }) => minHeight ?? '100%'};
  ${({ theme }) => theme.mediaQueries.xs} {
    transform: scale(0.4);
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    transform: scale(0.5);
  }
  ${({ theme }) => theme.mediaQueries.md} {
    transform: scale(0.6);
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    transform: scale(0.7);
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    transform: scale(0.7);
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    transform: scale(1);
  }
`
const DotScaleContainer = styled(StyledDotLine)`
  transform: scale(0.6);
  ${({ theme }) => theme.mediaQueries.md} {
    transform: scale(0.8);
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    transform: scale(1);
  }
`

const ScaleContainerWithStar = styled(ScaleContainer)`
  & > div:nth-child(1) img {
    animation: ${flash} 2s ease-in-out infinite;
    animation-delay: 0.5s;
  }

  & > div:nth-child(2) img {
    animation: ${() => flyingDiamond(3, 4)} 2s ease-in-out infinite;
    animation-delay: 0.1s;
  }
  & > div:nth-child(3) img {
    animation: ${() => flyingDiamond(4, -4)} 2s ease-in-out infinite;
    animation-delay: 0.2s;
  }
  & > div:nth-child(4) img {
    animation: ${() => flyingDiamond(3, 4)} 2s ease-in-out infinite;
    animation-delay: 0.3s;
  }
  & > div:nth-child(5) img {
    animation: ${() => flyingDiamond(4, -3)} 2s ease-in-out infinite;
    animation-delay: 0.4s;
  }

  // moles animation
  & > div:nth-child(7) img {
    animation: mining1 33s ease-in-out infinite;
    transform: rotate(352deg) translate(23px, -76px) scale(1.3);

    ${({ theme }) => theme.mediaQueries.xl} {
      transform: rotate(352deg) translate(15px,-83px) scale(1.5);
    }
  }

  & > div:nth-child(8) img {
    animation: mining2 33s ease-in-out infinite;    
    transform: rotate(325deg) translate(51px, -87px) scale(2);
    
    ${({ theme }) => theme.mediaQueries.xl} {
      transform: rotate(325deg) translate(36px,-97px) scale(2);    
    }    
  }

  & > div:nth-child(9) img {
    animation: mining3 33s ease-in-out infinite;
    transform: rotate(234deg) translate(16px, -70px) scale(1.5);
    
    ${({ theme }) => theme.mediaQueries.xl} {
      transform: rotate(234deg) translate(16px, -80px) scale(1.5);
    }    
  }
  @keyframes mining1 {
    0%, 1% {
      opacity: 0;
    }
    2%, 24% {
      opacity: 1;
    }
    25%, 100%{
      opacity: 0;
    }
  }
  @keyframes mining2 {
    0%, 34% {
      opacity: 0;
    }
    35%, 56%{
      opacity: 1;
    }
    59%, 100%{
      opacity: 0;
    }
  }
  @keyframes mining3 {
    0%, 67% {
      opacity: 0;
    }
    68%, 88%{
      opacity: 1;
    }
    90%, 100%{
      opacity: 0;
    }
  }
`

const imagePath = '/images/home/lunar-bunny/'
const imageSrc = 'bunny'

const diamondImages: MoleCompositeImageProps = {
  path: '/images/home/landing-page/',
  attributes: [
    {
      src: 'vector',
      alt: 'star',
      coordination: {
        width: '26px',
        height: '26px',
        top: '64%',
        left: '78%',
      },
    },
    {
      src: 'diamond1',
      alt: 'diamond',
      isRellax: true,
      speed: 2,
      coordination: {
        top: '-50%',
        left: '50%',
        width: '266px',
        height: '325px',
      },
    },
    {
      src: 'diamond2',
      alt: 'diamond',
      zIndex: 10,
      isRellax: true,
      speed: -1,
      coordination: {
        width: '424px',
        height: '346px',
        top: '-10%',
        left: '10%',
      },
    },
    {
      src: 'diamond3',
      alt: 'diamond',
      speed: -3,
      isRellax: true,
      coordination: {
        top: '86%',
        left: '-10%',
        height: '325px',
        width: '266px',
      },
    },
    {
      src: 'diamond4',
      alt: 'diamond',
      isRellax: true,
      speed: -1,
      coordination: {
        width: '260px',
        height: '260px',
        top: '71%',
        left: '65%',
      },
    },
    {
      src: 'triangle',
      alt: 'triangle',
      isRellax: true,
      coordination: {
        width: '128px',
        height: '65px',
        top: '-38%',
        left: '4%',
      },
    },
    {
      src: 'mole',
      moleIndex: 0,
      type: 'gif',
      alt: 'mole1',
      zIndex: -1,
      speed: -3,
      isRellax: true,
      coordination: {
        top: '90%',
        left: '1%',
        width: '100px',
        height: '100px',
      },
    },
    {
      src: 'mole',
      moleIndex: 1,
      type: 'gif',
      alt: 'mole2',
      zIndex: 1,
      speed: -1,
      isRellax: true,
      coordination: {
        top: '9%',
        left: '21%',
        width: '100px',
        height: '100px',
      },
    },
    {
      src: 'mole',
      moleIndex: 2,
      type: 'gif',
      alt: 'mole3',
      zIndex: -1,
      speed: -1,
      isRellax: true,
      coordination: {
        top: '117%',
        left: '74%',
        width: '100px',
        height: '100px',
      },
    },
  ],
}
const bgTriangles: CompositeImageProps = {
  path: '/images/home/landing-page/',
  attributes: [
    {
      src: 'leftBottomTriangle',
      alt: 'leftBottomTriangle',
      coordination: {
        bottom: '0',
        left: '0',
      },
    },
    {
      src: 'doubleTriangle',
      alt: 'doubleTriangle',
      isRellax: true,
      speed: -2,
      coordination: {
        top: 'calc(100% - 131px)',
        left: '80%',
        width: '206px',
        height: '131px',
      },
    },
  ],
}
const LeftBottomTriangleWrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  position: relative;
  & > div:nth-child(1) {
    height: 120px;
    width: 120px;
  }
  & :nth-child(2) {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    & > div:nth-child(1) {
      height: 170px;
      width: 170px;
    }
    & :nth-child(2) {
      display: block;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & > div:nth-child(1) {
      height: 220px;
      width: 220px;
    }
    & :nth-child(2) {
      display: block;
    }
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    & > div:nth-child(1) {
      height: 270px;
      width: 270px;
    }
    & :nth-child(2) {
      display: block;
    }
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    & > div:nth-child(1) {
      height: 320px;
      width: 320px;
    }
    & :nth-child(2) {
      display: block;
    }
  }
`

const starsImages: CompositeImageProps = {
  path: '/images/home/landing-page/',
  attributes: [
    {
      src: 'vector',
      alt: 'vector',
      coordination: {
        top: '61%',
        left: '38%',
        width: '60px',
        height: '60px',
      },
    },
    {
      src: 'vector',
      alt: 'vector2',
      coordination: {
        top: '40%',
        left: '29%',
        height: '20px',
        width: '20px',
      },
    },
    {
      src: 'vector',
      alt: 'vector3',
      coordination: {
        top: '50%',
        left: '88%',
        height: '16px',
        width: '16px',
      },
    },
  ],
}

const titleStyleProps = {
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '32px',
}

const mobileDiamonds: CompositeImageProps = {
  path: '/images/home/landing-page/',
  attributes: [
    {
      src: 'diamond2',
      alt: 'diamond2',
      zIndex: 1,
      coordination: {
        right: '-73px',
        top: '60%',
        width: '164px',
        height: '134px',
      },
    },
    {
      src: 'diamond3',
      alt: 'diamond3',
      coordination: {
        right: '-5px',
        width: '136px',
        height: '113px',
        top: '77%',
      },
    },
    {
      src: 'triangle',
      alt: 'triangle',
      coordination: {
        top: '13%',
        height: '50px',
        width: '100px',
        right: '-53px',
      },
    },
  ],
}
const moleImage: CompositeImageProps = {
  path: '/images/home/landing-page/',
  attributes: [
    {
      src: 'mole',
      type: 'gif',
      alt: 'mole1',
      coordination: {
        top: '-50%',
        left: '50%',
        width: '20px',
        height: '25px',
      },
    },
  ],
}

const Hero = () => {
  const { account } = useWeb3React()
  const { isDesktop } = useMatchBreakpoints()
  return (
    <>
      <HeroBgWrapper>
        <InnerWrapper>
          <LeftBottomTriangleWrapper>
            <CompositeImage {...bgTriangles} />
          </LeftBottomTriangleWrapper>
          {!isDesktop && <CompositeImage {...mobileDiamonds} />}
          <DotScaleContainer top={isDesktop ? '20px' : '-18px'} left={isDesktop ? '50px' : '-39px'}>
            <DotLineA />
          </DotScaleContainer>
          {isDesktop && (
            <DotScaleContainer top="220px" right="50px">
              <DotLineB />
            </DotScaleContainer>
          )}
          <StarsWrapper>
            <CompositeImage {...starsImages} />
          </StarsWrapper>
        </InnerWrapper>
      </HeroBgWrapper>
      <HeroContainer position="relative" justifyContent="center" id="homepage-hero" minHeight="358px">
        <Flex flex="1" flexDirection="column" maxWidth="512px" mt={["40px", "40px", "40px", "80px"]}>
          <StyledBigHeading>Very, Very Simple DeFi Trading for All</StyledBigHeading>
          <Text {...titleStyleProps} color="white">
            Your gateway to the decentralized finance movement. Take control of your finances and earn sparkly VVS
            rewards.
          </Text>
          <Text {...titleStyleProps} color="white">
            <Link mr="5px" href="https://docs.vvs.finance" target="_blank" display="inline-block" {...titleStyleProps}>
              Learn more
            </Link>
            about VVS Finance.
          </Text>
          {
            isCountdown() && <LaunchCountDown />
          }
          
          {
            !isCountdown() && <Flex>
              {!account && <ConnectWalletButton mt="50px" height='60px' width='236px'/>}
              {account && <Button as={ReactLink} to="/swap" mt="50px" height='60px' width='236px'>Trade Now</Button>}
            </Flex>
          }
        </Flex>
        {isDesktop && (
          <ScaleContainerWithStar flex="1" position="relative" minHeight="260px">
            <MoleCompositeImage {...diamondImages} />
          </ScaleContainerWithStar>
        )}
      </HeroContainer>
    </>
  )
}

export default Hero
