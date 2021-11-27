import React, { ReactNode } from 'react'
import styled from 'styled-components'

import PageHeader from './PageHeader'

const StyledPageHeader = styled(PageHeader)`
  position: relative;
  padding-bottom: 60px;
  background: ${({ theme }) => theme.colors.darkPurple};
  .bg {
    position: absolute;
    max-width: 1200px;
    width: 100%;
    height: 346px;
    pointer-events: none;
    & > svg {
      position: absolute;
      z-index: 0;
      right: 66px;
      bottom: 20px;
      pointer-events: none;
    }
  }
`

const StyledPageHeaderWrap = ({ children }: { children?: ReactNode }) => <StyledPageHeader>{children}</StyledPageHeader>

export default StyledPageHeaderWrap
