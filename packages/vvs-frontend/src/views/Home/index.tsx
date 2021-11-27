import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { SEOHead } from 'components/Layout/Page'
import Hero from './components/Hero'
import MetricsSection from './components/MetricsSection'
import Community from './components/Community'
import FeaturesGuide from './components/FeaturesGuide'
import VvsTokenIntro from './components/VvsTokenIntro'
import UserBanner from './components/UserBanner'
import TopBlingFarmAndCrystalPool from './components/TopBlingFarmAndCrystalPool'

const StyledHeroSection = styled(PageSection)`
  padding-top: 10px;
  min-height: 740px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    // padding-top: 70px;
    min-height: 110vh;
  }
`

const UserBannerWrapper = styled(Container)`
  position: relative;
  z-index: 10;
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
  margin: -100px auto 0;

  ${({ theme }) => theme.mediaQueries.md} {
    position: absolute;
  }

  // ${({ theme }) => theme.mediaQueries.lg} {
  //   padding-left: 24px;
  //   padding-right: 24px;
  // }
`

const FeaturesGuideWrapper = styled(PageSection)`
  padding-bottom: 48px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-bottom: 88px;
  }
`
const CommunityWrapper = styled(PageSection)`
  height: 500px;
  ${({ theme }) => theme.mediaQueries.md} {
    height: 650px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '1300px' }

  return (
    <>
      <SEOHead />
      <StyledHeroSection
        innerProps={{
          style: {
            margin: '0',
            width: '100%',
          },
        }}
        background={
          theme.isDark
            ? 'radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)'
            : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
        }
        index={2}
        hasCurvedDivider={false}
        style={{ paddingTop: 70 }}
      >
        {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{
          style: {
            margin: '0',
            width: '100%',
            justifyContent: 'center',
          },
        }}
        background="white"
        index={2}
        hasCurvedDivider={false}
        justifyContent="center"
      >
        <MetricsSection />
      </PageSection>

      <FeaturesGuideWrapper
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.darkPurple}
        index={2}
        hasCurvedDivider={false}
      >
        <FeaturesGuide />
      </FeaturesGuideWrapper>
      <TopBlingFarmAndCrystalPool />
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="white"
        index={2}
        hasCurvedDivider={false}
      >
        <VvsTokenIntro />
      </PageSection>
      <CommunityWrapper
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.darkPurple}
        index={2}
        hasCurvedDivider={false}
      >
        <Community />
      </CommunityWrapper>
    </>
  )
}

export default Home
