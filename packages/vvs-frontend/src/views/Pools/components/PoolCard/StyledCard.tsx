import styled from 'styled-components'
import { Card } from 'vvs-uikit'

export const StyledCard = styled(Card)<{ isFinished?: boolean }>`
  max-width: 330px;
  margin: 0 8px 24px;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 12px 46px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 530px;
  }
`

export default StyledCard
