import React from 'react'
import styled from 'styled-components'
import {
  Flex,
  Heading,
  Text,
  Button,
  Link,
  Card,
  CardBody,
  Skeleton,
  CardsLayout,
  useMatchBreakpoints,
} from 'vvs-uikit'
import { useTranslation } from 'contexts/Localization'
import { isCountdown } from 'utils'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import { StyledSecondaryHeading } from '../StyledHeadings'
import { featuresGuideData } from './data'
import { BgWrapper, fading } from '../Hero'
import { DotLineC, StyledDotLine } from '../Animations'

const StyledButton = styled(Button)`
  bottom: 24px;
  left: 24px;
`

const StyledHeading = styled(Heading)`
  font-weight: 500;
`
export const GradientsFont = styled(Text)<{ title: string }>`
  color: #4799cc;
  position: relative;
  &:before {
    position: absolute;
    content: '${({ title }) => title}';
    z-index: 10;
    color: #ffd600;
    -webkit-mask: linear-gradient(to left, #4799cc, transparent);
  }
`
const LoremBgWrapper = styled(BgWrapper)``
const bgImages: CompositeImageProps = {
  path: '/images/home/lorem/',
  attributes: [
    {
      src: 'diamond9',
      alt: 'diamond9',
      coordination: {
        top: '3%',
        left: '9%',
        height: '260px',
        width: '260px',
      },
    },
    {
      src: 'diamond10',
      alt: 'diamond10',
      coordination: {
        right: '11%',
        bottom: '38px',
        height: '140px',
        width: '178px',
      },
    },
  ],
}

const startsImages: CompositeImageProps = {
  path: '/images/home/landing-page/',
  attributes: [
    {
      src: 'vector',
      alt: 'start1',
      coordination: {
        left: '70%',
        top: '83%',
        height: '72px',
        width: '72px',
      },
    },
    {
      src: 'vector',
      alt: 'start2',
      coordination: {
        left: '73%',
        top: '82%',
        height: '26px',
        width: '26px',
      },
    },
    {
      src: 'vector',
      alt: 'start4',
      coordination: {
        left: '70%',
        top: '80%',
        height: '20px',
        width: '20px',
      },
    },
    {
      src: 'vector',
      alt: 'start5',
      coordination: {
        left: '10%',
        top: '12%',
        height: '22px',
        width: '22px',
      },
    },
    {
      src: 'vector',
      alt: 'start6',
      coordination: {
        left: '12%',
        top: '8%',
        height: '22px',
        width: '22px',
      },
    },
  ],
}
const mobileBgImages: CompositeImageProps = {
  path: '/images/home/lorem/',
  attributes: [
    {
      src: 'vector',
      alt: 'vector1',
      coordination: {
        width: '13px',
        height: '13px',
        left: '5px',
        top: '231px',
      },
    },
    {
      src: 'vector',
      alt: 'vector2',
      coordination: {
        width: '13px',
        height: '13px',
        left: '-6px',
        top: '241px',
      },
    },
    {
      src: 'diamond9',
      alt: 'diamond9',
      coordination: {
        top: '219px',
        left: '-28px',
        height: '160px',
        width: '120px',
      },
    },
    {
      src: 'diamond11',
      alt: 'diamond11',
      coordination: {
        width: '130px',
        height: '130px',
        bottom: '-67px',
        left: '50px',
      },
    },
    {
      src: 'diamond10',
      alt: 'diamond10',
      coordination: {
        right: '-23px',
        bottom: '42px',
        height: '75px',
        width: '95px',
      },
    },
    {
      src: 'vector',
      alt: 'vector4',
      coordination: {
        width: '30px',
        height: '30px',
        bottom: '62px',
        right: '25%',
      },
    },
    {
      src: 'vector',
      alt: 'vector5',
      coordination: {
        width: '20px',
        height: '20px',
        bottom: '80px',
        right: '22%',
      },
    },
  ],
}

const StarsWrapper = styled.div`
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

  & :nth-child(4) {
    animation: ${fading} 3.5s ease-in-out infinite;
    animation-delay: 0.2s;
  }

  & :nth-child(5) {
    animation: ${fading} 4s ease-in-out infinite;
    animation-delay: 0.1s;
  }
`

const CardWrapper = styled(Card)`
  flex: 1;
  max-width: 370px;
  ${({ theme }) => theme.mediaQueries.md} {
    &:nth-of-type(1),
    &:nth-of-type(2) {
      margin-right: 25px;
    }
  }
`

const FeaturesGuide = () => {
  const { t } = useTranslation()
  const { isDesktop } = useMatchBreakpoints()
  const { headingText, cardItems } = featuresGuideData

  return (
    <>
      <LoremBgWrapper>
        {isDesktop ? (
          <Flex>
            <CompositeImage {...bgImages} />
            <StarsWrapper>
              <CompositeImage {...startsImages} />
            </StarsWrapper>
            <StyledDotLine top="106px" right="50px">
              <DotLineC />
            </StyledDotLine>
          </Flex>
        ) : (
          <CompositeImage {...mobileBgImages} />
        )}
      </LoremBgWrapper>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text
          lineHeight="36px"
          fontWeight="500"
          color="white"
          mb="40px"
          fontSize={isDesktop ? '28px' : '26px'}
          textAlign="center"
          width={['345px', '345px', '345px', '345px', '770px']}
          height={['180px', '180px', '180px', '180px', '72px']}
        >
          {t(headingText)}
        </Text>
        <Flex flexDirection={['column', 'column', 'column', 'column', 'row']}>
          {cardItems.map((item, index) => (
            <CardWrapper key={item.title} mb="22px">
              <CardBody style={{ textAlign: 'center' }}>
                <Text fontSize="28px" fontWeight="500" mt="14px">
                  {t(item.title)}
                </Text>
                <GradientsFont textTransform="uppercase" height="32px" fontSize="20px" fontWeight="400" mt="2px" mb="10px" title={item.subTitle}>
                  {t(item.subTitle)}
                </GradientsFont>
                <Text height="110px">{t(item.description)}</Text>
                <Flex justifyContent="center">
                  {
                    isCountdown() ? <StyledButton variant="secondary">{t('Coming Soon')}</StyledButton> : <Link external={item.button.external} href={item.button.to}>
                      <StyledButton variant="secondary">{t(item.button.text)}</StyledButton>
                    </Link>
                  }
                </Flex>
              </CardBody>
            </CardWrapper>
          ))}
        </Flex>
      </Flex>
    </>
  )
}

export default FeaturesGuide
