import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Button, Link, useMatchBreakpoints } from 'vvs-uikit'
import { useTranslation } from 'contexts/Localization'
import { isCountdown } from 'utils'

import { StyledBigHeading } from '../StyledHeadings'
import { vvsTokenIntroData } from './data'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import { ScaleContainer, flyingDiamond, BgWrapper } from '../Hero'
import { GradientsFont } from '../FeaturesGuide'

const StyledHeading = styled(Heading)`
  font-weight: 500;
`

const StyledButton = styled(Button)`
  width: 150px;
  font-size: 13px;
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 236px;
    font-size: 16px;
  }
`

const diamondImages: CompositeImageProps = {
  path: '/images/home/vvs-info/',
  attributes: [
    {
      src: 'diamond1',
      alt: 'diamond1',
      isRellax: true,
      speed: -2,
      coordination: {
        top: '-490px',
        left: '0%',
        width: '250px',
        height: '210px',
      },
    },
    {
      src: 'diamond2',
      alt: 'diamond2',
      isRellax: true,
      speed: 0.5,
      coordination: {
        top: '40%',
        left: '66%',
        height: '342px',
        width: '342px',
      },
    },
    {
      src: 'diamond3',
      alt: 'diamond3',
      isRellax: true,
      speed: -1,
      coordination: {
        top: '200px',
        left: '-10%',
        width: '160px',
        height: '160px',
      },
    },
    {
      src: 'diamond4',
      alt: 'diamond4',
      coordination: {
        top: '36%',
        left: '19%',
        width: '200px',
        height: '200px',
      },
    },
    {
      src: 'star1',
      alt: 'star1',
      coordination: {
        top: '5%',
        left: '113%',
        width: '53px',
        height: '53px',
      },
    },
    {
      src: 'star2',
      alt: 'star2',
      coordination: {
        top: '11%',
        left: '127%',
        height: '32px',
        width: '32px',
      },
    },
  ],
}

const FlyingDiamondsWrapper = styled(ScaleContainer)`
  & > div:nth-child(1) img {
    animation: ${() => flyingDiamond(4, 3)} 2s ease-in-out infinite;
    animation-delay: 0.1s;
  }
  & > div:nth-child(2) img {
    animation: ${() => flyingDiamond(-3, 4)} 2s ease-in-out infinite;
    animation-delay: 0.3s;
  }
  & > div:nth-child(3) img {
    animation: ${() => flyingDiamond(2, -3)} 2s ease-in-out infinite;
    animation-delay: 0.2s;
  }
  & > div:nth-child(4) img {
    animation: ${() => flyingDiamond(4, 4)} 2s ease-in-out infinite;
    animation-delay: 0.3s;
  }
`
const mobileImages: CompositeImageProps = {
  path: '/images/home/vvs-info/',
  attributes: [
    {
      src: 'diamond2',
      alt: 'diamond2',
      isRellax: false,
      coordination: {
        top: '-135px',
        right: '27px',
        width: '185px',
        height: '185px',
      },
    },
    {
      src: 'diamond3',
      alt: 'diamond3',
      isRellax: false,
      coordination: {
        top: '33px',
        left: '20px',
        width: '110px',
        height: '110px',
      },
    },
  ],
}
const VvsTokenIntro = () => {
  const { t } = useTranslation()

  const { headingText, items } = vvsTokenIntroData
  const { isDesktop } = useMatchBreakpoints()
  return (
    <>
      {!isDesktop && (
        <BgWrapper>
          <CompositeImage {...mobileImages} />
        </BgWrapper>
      )}
      <Flex
        position="relative"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        flex="1"
        padding={isDesktop ? '0 40px' : '0'}
      >
        <Flex flexDirection="column">
          <Text
            color="black"
            fontSize={isDesktop ? '50px' : '37px'}
            width={['347px', '347px', '347px', '440px']}
            fontWeight="400"
            lineHeight="60px"
          >
            {t(headingText)}
          </Text>
          {items.map((item) => (
            <Flex
              key={item.title}
              margin={['20px 0', '20px 0', '20px 0', '42px 0']}
              padding={isDesktop ? '0' : '0 10px'}
            >
              <Flex height={['105px', '105px', '105px', '75px']} width="75px" justifyContent="center">
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: item.width,
                    height: item.height,
                    marginRight: '30px',
                    alignSelf: 'center',
                  }}
                />
              </Flex>
              <Flex
                maxWidth="600px"
                flexDirection="column"
                justifyContent="center"
                flex="1"
                width={['250px', '250px', '250px', 'auto']}
              >
                <Flex flexDirection={['column', 'column', 'column', 'row']} mb="10px">
                  <GradientsFont textTransform="uppercase" title={item.title} fontSize="20px" marginRight="5px" fontWeight="500">
                    {t(item.title)}
                  </GradientsFont>
                  <Text style={{ alignSelf: 'center', fontWeight: 'bold' }} height="30px" lineHeight="34px" width="100%">
                    <img
                      src="/images/home/vvs-info/aquaVector.svg"
                      alt="star1"
                      height="18px"
                      width="18px"
                      style={{
                        verticalAlign: 'sub',
                        marginRight: '5px',
                      }}
                    />
                    {item.subTitle}
                  </Text>
                </Flex>
                <Text>{t(item.description)}</Text>
              </Flex>
            </Flex>
          ))}
          <Flex justifyContent={isDesktop ? 'unset' : 'center'}>
            {
              isCountdown() ? (
                <>
                  <StyledButton mr={10}>{t('White Paper (Coming Soon)')}</StyledButton>
                  <StyledButton variant="secondary">{t('Coming Soon')}</StyledButton>
                </>
              ) : (
                  <>
                    <Link external href="https://docs.vvs.finance/litepaper">
                      <StyledButton mr={10}>{t('White Paper')}</StyledButton>
                    </Link>
                    <Link external href="https://docs.vvs.finance/litepaper/token-economics">
                      <StyledButton variant="secondary">{t('VVS Tokenomics')}</StyledButton>
                    </Link>
                  </>
              )
            }
            
          </Flex>
        </Flex>
        {isDesktop && (
          <Flex width="25%" maxWidth="600px" flex="1" minWidth="300px">
            <FlyingDiamondsWrapper flex="1" position="relative" minHeight="600px" maxWidth="340px">
              <CompositeImage {...diamondImages} />
            </FlyingDiamondsWrapper>
          </Flex>
        )}
      </Flex>
    </>
  )
}

export default VvsTokenIntro
