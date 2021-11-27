import React from 'react'
import styled from 'styled-components'
import Hero from './components/Hero'
import MetricsSection from './components/MetricsSection'
import { PageMeta } from '../../components/Layout/Page'
import PageSection from '../../components/PageSection'
import TopBlingFarmAndCrystalPool from './components/TopBlingFarmAndCrystalPool'
import FeaturesGuide from './components/FeaturesGuide'
import Community from './components/Community'
import VvsTokenIntro from './components/VvsTokenIntro'

const StyledHeroSection = styled(PageSection)`
  padding-top: 10px;
  min-height: 740px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    min-height: 110vh;
  }
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

const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '1300px' }

const Home: React.FC = () => {  
  return (
    <>
      <PageMeta />
      <StyledHeroSection
        innerProps={{
          style: {
            margin: '0',
            width: '100%',
          },
        }}
        background={
            'radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)'
            // linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
        }
        index={2}
        hasCurvedDivider={false}
        style={{ paddingTop: 70 }}
      >
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
        background="#0E0037"
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
        background="#0E0037"
        index={2}
        hasCurvedDivider={false}
      >
        <Community />
      </CommunityWrapper>
    </>
  )
}

export default Home
