import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router'
import { DEFAULT_META, getCustomMeta } from 'config/constants/meta'
import { useVvsUsdcPrice } from 'hooks/useUsdcPrice'
import { OpenGraphMeta } from 'config/constants/types'
import Container from './Container'

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

const OpenGraphTag = ({ title, description, canonical, ogImageUrl, siteName }: OpenGraphMeta) => {
  // if (!ogImageUrl) return null

  return (
    <Helmet>
      <meta name="og:title" content={title} />
      <meta name="og:image" content={ogImageUrl} />
      <meta name="og:url" content={canonical} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content={siteName} />
    </Helmet>
  )
}

/**
 * NO EFFECT TO SEO FOR CLIENT-SIDE RENDERING
 */
export const SEOHead: React.FC<{ symbol?: string }> = ({ symbol }) => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const defaultTitle = `${t('VVS Finance')} | ${t('Simple DeFi Trading For All')}`
  const defaultDescription = t('VVS Finance is your gateway to the decentralized finance movement.Take control of your finances and earn sparkly VVS rewards.Low fees, fast transactions and competitive earnings.')
  const canonical = window.location.href;

  const defaultMeta = {
    ...DEFAULT_META,
    title: defaultTitle,
    description: defaultDescription,
    siteName: t('VVS Finance')
  }

  // const vvsPriceUsd = useVvsUsdcPrice()
  // const vvsPriceUsdDisplay = vvsPriceUsd ? `$${vvsPriceUsd.toFixed(3)}` : '...'

  const pageMeta = getCustomMeta(pathname, t) || {}
  const { title, description, image, ogImageUrl, siteName } = { ...defaultMeta, ...pageMeta }
  // let pageTitle = vvsPriceUsdDisplay ? [title, vvsPriceUsdDisplay].join(' - ') : title
  // if (symbol) {
  //   pageTitle = [symbol, title].join(' - ')
  // }
  // const pageTitle = title

  return (
    <>
      <Helmet>
        <title>{title}</title>
        {/* <meta property="title" content={title} />
        <meta property="description" content={description} />
        <meta property="image" content={image} /> */}
      </Helmet>

      {/* <OpenGraphTag
        title={title}
        description={description}
        canonical={canonical}
        ogImageUrl={ogImageUrl}
        siteName={siteName}
      /> */}
    </>
  )
}

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol?: string
}

const Page: React.FC<PageProps> = ({ children, symbol, ...props }) => {
  return (
    <>
      <SEOHead symbol={symbol} />
      <StyledPage {...props}>{children}</StyledPage>
    </>
  )
}

export default Page
