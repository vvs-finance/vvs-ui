/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, useMatchBreakpoints } from 'vvs-uikit'
import { BgWrapper, flash } from '../Hero'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
// Values fetched from bitQuery effective 6/9/21
const imagesInfos = [
  {
    url: `images/home/defi-section/farming.png`,
    title: 'Shiny yield farming opportunity',
    width: 162,
    height: 144,
    subTitle:
      'Streams of passive income to multiply your assets. The rarest and brightest yield farming in the VVS farms.',
  },
  {
    url: `images/home/defi-section/icon.png`,
    title: 'Clear incentives for all',
    width: 190,
    height: 162,
    subTitle: 'Token economics and incentives built for long-term value creation. Our mines will always be bountiful.',
  },
  {
    url: `images/home/defi-section/right.png`,
    title: 'Hardened security and governance',
    width: 175,
    height: 162,
    subTitle:
      'Design with security in mind and community governance at heart. Platform governance will be passed gradually to the community.',
  },
]

const bgTriangle: CompositeImageProps = {
  path: '/images/home/defi-section/',
  attributes: [
    {
      src: 'triangle',
      alt: 'triangle',
      coordination: {
        top: '35px',
        left: '76%',
        width: '260px',
        height: '130px',
      },
    },
  ],
}

const shakingLeft = () => keyframes`
  from {
    transform: rotate(355deg);
  }
  50% {
    transform: rotate(359deg);
  }
  to {
    transform: rotate(355deg);
  }
`
const shakingRight = () => keyframes`
  from {
    transform: rotate(354deg);
  }
  50% {
    transform: rotate(359deg);
  }
  to {
    transform: rotate(354deg);
  }
`

const FlowerWrapper = styled(Flex)`
  position: absolute;
  & .left-leaf {
    transform-origin: right bottom;
    animation: ${shakingLeft} 4s ease-in-out infinite;
    animation-delay: 0.1s;
  }

  & .right-leaf {
    transform-origin: left bottom;
    animation: ${shakingRight} 4s ease-in-out infinite;
    animation-delay: 0.1s;
  }
`
const ImageWrapper = styled.img<{ top?: string; left?: string; maxHeight?: string, bottom?:string, right?: string }>`
  position: absolute;
  top: ${({ top }) => top || 'unset'};
  left: ${({ left }) => left || 'unset'};
  bottom: ${({ bottom }) => bottom || 'unset'};
  right: ${({ right }) => right || 'unset'};
  max-height: ${({ maxHeight }) => maxHeight || '100%'};
`

const Flower = () => {
  return (
    <FlowerWrapper width="162px" height="144px" flexDirection="column">
      <Flex>
        <ImageWrapper
          src="/images/home/lorem/leaf-L.svg"
          className="left-leaf"
          maxHeight="100px"
          alt="leaf-l"
          width="80px"
          top="19px"
        />
        <ImageWrapper
          className="right-leaf"
          left="59px"
          width="100px"
          min-width="120px"
          height="100px"
          top="-10px"
          src="/images/home/lorem/leaf-R.svg"
          maxHeight="100px"
          alt="leaf-r"
        />
      </Flex>
      <ImageWrapper src="/images/home/lorem/cloud-front.svg" top="70px" maxHeight="95px" alt="leaf-r" />
    </FlowerWrapper>
  )
}

const cloudMove = () => keyframes`
  from {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(0px);
  }
  to {
    transform: translateX(5px);
  }
`
const FlyCoinWrapper = styled(Flex)`
  & .cloud-front {
    animation: ${cloudMove} 3s ease-in-out infinite;
    animation-delay: 0.1s;
  }
  & .cloud-back {
    animation: ${cloudMove} 4s ease-in-out infinite;
    animation-delay: 0.2s;
  }
`
const StarAnimationWrapper = styled(ImageWrapper)`
  animation: ${flash} 5s ease-in-out infinite;
  animation-delay: 0.1s;
`

const TitleWrapper = styled(Text)`
  text-align: center;
  margin-bottom: 32px;
  color: black;
  font-weight: 600;
  font-size: 26px;
  line-height: 36px;
  width: 345px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 720px;
    font-size: 28px;
  }
`

const FlexImageItem = styled(Flex)`
  min-width: 288px;
  margin-bottom: 50px;
  font-size: 26px;

  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 370px;
    margin-right: 16px;
  }
`

const FlexImagesWrapper = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.lg || theme.mediaQueries.xl} {
    transform: scale(0.9);
  }
`
const TriangleWrapper = styled(BgWrapper)`
  ${({ theme }) => theme.mediaQueries.xs} {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`

const FlyCoin = () => {
  return (
    <FlyCoinWrapper width="162px" height="144px" flexDirection="column" position="relative">
      <ImageWrapper
        src="/images/home/lorem/cloud-back.svg"
        className="cloud-back"
        width="200px"
        height="75px"
        alt="cloud back"
        top="74px"
        left="55px"
        maxHeight="75px"
      />
      <ImageWrapper src="/images/home/lorem/coin.svg" top="-10px" alt="coin" width="160px" height="160px" />
      <ImageWrapper
        src="/images/home/lorem/cloud-front.svg"
        top="80px"
        className="cloud-front"
        maxHeight="85px"
        left="-61px"
        width="200px"
        height="100px"
        alt="cloud front"
      />
    </FlyCoinWrapper>
  )
}
const ShieldWrapper = () => {
  return (
    <Flex position="relative" width="178px">
      <ImageWrapper src="/images/home/lorem/shield.svg" height="75px" alt="shield" maxHeight="165px" />
      <StarAnimationWrapper src="/images/home/lorem/lightVector.svg" height="75px" alt="shield" maxHeight="165px" right="32px" bottom="15px"/>
    </Flex>
  )
}

const Stats = () => {
  const { isDesktop } = useMatchBreakpoints()
  return (
    <>
      <TriangleWrapper>
        <CompositeImage {...bgTriangle} />
      </TriangleWrapper>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <TitleWrapper>
          We aim to make DeFi simple and within reach of billions. Low fees, fast transactions, and competitive
          earnings.
        </TitleWrapper>
        <FlexImagesWrapper flexDirection={['column', null, null, 'row']} justifyContent="space-around" width="100%">
          {imagesInfos.map((info, index) => {
            return (
              <FlexImageItem key={info.title} flexDirection="column" justifyContent="center" alignItems="center">
                <Flex height="165px" width="100%" justifyContent="center">
                  {!index && <Flower />}
                  {index === 1 && <FlyCoin />}
                  {index === 2 && <ShieldWrapper />}
                </Flex>
                <Text
                  fontSize="20px"
                  textAlign="center"
                  color="text"
                  fontWeight="500"
                  marginTop="20px"
                  marginBottom="13px"
                >
                  {info.title}
                </Text>
                <Text fontSize="16px" textAlign="center" color="text" fontWeight="400">
                  {info.subTitle}
                </Text>
              </FlexImageItem>
            )
          })}
        </FlexImagesWrapper>
      </Flex>
    </>
  )
}

export default Stats
