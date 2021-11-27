import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Image, useMatchBreakpoints, Link } from 'vvs-uikit'
import { BgWrapper } from '../Hero'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import { DotLineD, StyledDotLine } from '../Animations'
import { GradientsFont } from '../FeaturesGuide'

const SocialMedias = styled(Flex)`
  justify-content: center;
  margin-top: 30px;
`
const FontStyle = {
  color: 'white',
  fontWeight: '400',
}
const socialMediaData = [
  {
    src: '/images/home/community/twitter.svg',
    url: 'https://twitter.com/VVS_finance',
  },
  {
    src: '/images/home/community/medium.svg',
    url: 'https://medium.com/vvs-finance'
  },
  {
    src: '/images/home/community/vector.svg',
    url: 'https://discord.gg/V2957zMsmg',
  },
  {
    src: '/images/home/community/shape.svg',
    url: 'https://t.me/VVSFinance',
  },
]
const mobileImages: CompositeImageProps = {
  path: '/images/home/community/',
  attributes: [
    {
      src: 'diamond1',
      alt: 'diamond1',
      coordination: {
        top: '25%',
        left: '-33px',
        width: '60px',
        height: '60px',
      },
    },
    {
      src: 'diamond2',
      alt: 'diamond2',
      coordination: {
        top: '41%',
        left: '-20px',
        width: '120px',
        height: '120px',
      },
    },
  ],
}

const diamondImages: CompositeImageProps = {
  path: '/images/home/community/',
  attributes: [
    {
      src: 'diamond1',
      alt: 'diamond1',
      coordination: {
        top: '26%',
        left: '2%',
        width: '120px',
        height: '120px',
      },
    },
    {
      src: 'diamond2',
      alt: 'diamond2',
      coordination: {
        bottom: '110px',
        left: '5%',
        width: '330px',
        height: '270px',
      },
    },
    {
      src: 'diamond3',
      alt: 'diamond3',
      coordination: {
        top: '44%',
        left: '80%',
        width: '110px',
        height: '110px',
      },
    },
  ],
}

const Community = () => {
  const { isDesktop } = useMatchBreakpoints()

  return (
    <Flex alignContent="center" flexDirection="column" justifyContent="center" id="Community">
      <BgWrapper>
        {isDesktop ? (
          <>
            <CompositeImage {...diamondImages} />
            <StyledDotLine bottom="75px" right="20%">
              <DotLineD />
            </StyledDotLine>
          </>
        ) : (
          <CompositeImage {...mobileImages} />
        )}
      </BgWrapper>
      <Text {...FontStyle} textAlign="center" fontSize="50px">
        Community
      </Text>
      <Text
        {...FontStyle}
        textAlign="center"
        fontSize={isDesktop ? '24px' : '20px'}
        margin="20px auto"
        width={['347px', '347px', '347px', '746px']}
      >
        We are simply a group of avid DeFi enthusiasts who desire to build a platform our peers will use and love. So join the chat, and you can bet we will keep our ears wide open!
      </Text>
      <GradientsFont
        {...FontStyle}
        textAlign="center"
        fontSize="16px"
        fontWeight="500"
        marginTop="20px"
        title="FOLLOW US"
      >
        FOLLOW US
      </GradientsFont>
      <SocialMedias>
        {socialMediaData.map((item, index) => {
          return (
            <Link key={item.src} external href={item.url} style={{ display: 'inline-block', width: 30, height: 30 }} mr={index !== 3 ? '30px' : '0'}>
              <Image src={item.src} width={30} height={30} style={{
                transform: index===1 ? 'scale(1.8)' : 'scale(1)'
              }}/>
            </Link>
          )
        })}
      </SocialMedias>
    </Flex>
  )
}

export default Community
