import React from 'react'
import styled from 'styled-components'
import { Flex } from 'vvs-uikit'
import Footer from 'components/Menu/Footer'
import SubNav from 'components/Menu/SubNav'
import { SEOHead } from 'components/Layout/Page'
import MoleFooterAnimation from 'components/MoleFooterAnimation'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-bottom: 50px;
  min-height: calc(100vh - 70px);
  background: ${({ theme }) => theme.colors.beige};

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    padding-bottom: 20px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    min-height: calc(100vh - 78px);
  }
`

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <>
      <SEOHead />
      <StyledPage {...props}>
        <SubNav />
        {children}
        <Flex flexGrow={2} />
        {/* <Footer /> */}
        {/* <MoleFooterAnimation /> */}
      </StyledPage>
    </>
  )
}

export default Page
