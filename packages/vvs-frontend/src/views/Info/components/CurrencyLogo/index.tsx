import React, { useMemo } from 'react'
import styled from 'styled-components'
import { isAddress } from 'utils'
import LogoLoader from './LogoLoader'

const StyledLogo = styled(LogoLoader)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`

export const CurrencyLogo: React.FC<{
  address?: string
  size?: string
}> = ({ address, size = '24px', ...rest }) => {
  const src = useMemo(() => {
    const checkSummedAddress = isAddress(address)
    if (checkSummedAddress) {
      return `${process.env.REACT_APP_BASE_URL}/images/tokens/${checkSummedAddress}.svg` // XXX: update URL for token logo
    }
    return null
  }, [address])

  return <StyledLogo size={size} src={src} alt="token logo" {...rest} />
}

const DoubleCurrencyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 32px;
`

interface DoubleCurrencyLogoProps {
  address0?: string
  address1?: string
  size?: number
}

export const DoubleCurrencyLogo: React.FC<DoubleCurrencyLogoProps> = ({ address0, address1, size = 16 }) => {
  return (
    <DoubleCurrencyWrapper>
      {address0 && <CurrencyLogo address={address0} size={`${size.toString()}px`} />}
      {address1 && <CurrencyLogo address={address1} size={`${size.toString()}px`} />}
    </DoubleCurrencyWrapper>
  )
}
