import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import Container from './Container'
import { DEFAULT_META } from '../../config/meta'

const StyledPage = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-top: 16px;
  padding-bottom: 56px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    padding-bottom: 120px;
    max-width: 1400px;
  }
`

export const PageMeta: React.FC<{ symbol?: string }> = ({ symbol }) => {

  const pageMeta = { title: 'Home | VVS Finance' }
  const { title, description, image } = { ...DEFAULT_META, ...pageMeta }
  
  const pageTitle = title

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  )
}

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol?: string
}

const Page: React.FC<PageProps> = ({ children, symbol, ...props }) => {
  return (
    <>
      <PageMeta symbol={symbol} />
      <StyledPage {...props}>{children}</StyledPage>
    </>
  )
}

export default Page
