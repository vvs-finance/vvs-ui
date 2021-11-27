import React from 'react'
import styled from 'styled-components'
import { ListViewIcon, CardViewIcon, IconButton, Tag } from 'vvs-uikit'
import { ViewMode } from 'state/user/actions'

interface ToggleViewProps {
  viewMode: ViewMode
  onToggle: (mode: ViewMode) => void
}

const Container = styled.div`
  margin-right: 0px;
  margin-left: -8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 0;
    margin-right: 16px;
  }
`

const StyledTag = styled(Tag)`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${(props) => props.variant || ''};
  margin-right: 12px;
`

const ToggleView: React.FunctionComponent<ToggleViewProps> = ({ viewMode, onToggle }) => {
  const handleToggle = (mode: ViewMode) => {
    if (viewMode !== mode) {
      onToggle(mode)
    }
  }

  return (
    <Container>
      <StyledTag variant={viewMode === ViewMode.CARD ? 'primary' : 'textDisabled'}>
        <IconButton variant="text" scale="sm" id="clickPoolCardView" onClick={() => handleToggle(ViewMode.CARD)}>
          <CardViewIcon />
        </IconButton>
      </StyledTag>
      <StyledTag variant={viewMode === ViewMode.TABLE ? 'primary' : 'textDisabled'}>
        <IconButton variant="text" scale="sm" id="clickPoolTableView" onClick={() => handleToggle(ViewMode.TABLE)}>
          <ListViewIcon />
        </IconButton>
      </StyledTag>
    </Container>
  )
}

export default ToggleView
