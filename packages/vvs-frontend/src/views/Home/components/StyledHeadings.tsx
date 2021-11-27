import styled from 'styled-components'
import { Heading } from 'vvs-uikit'

export const StyledSecondaryHeading = styled(Heading)`
  font-size: 28px;
  text-align: center;
  max-width: 700px;
  margin-bottom: 48px;
  margin-left: auto;
  margin-right: auto;
`
export const StyledBigHeading = styled(Heading)`
  font-size: 37px;
  line-height: 60px;
  font-weight: 400;
  margin-bottom: 30px;
  color: white;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 50px;
  }
`
