import React from 'react'
import styled from 'styled-components'
import { ListViewIcon, CardViewIcon, IconButton, Tag } from 'vvs-uikit'
import { ViewMode } from 'state/user/actions'

interface ToggleViewProps {
  viewMode: ViewMode
  onToggle: (mode: ViewMode) => void
}

const Container = styled.div`
  margin-left: -8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 0;
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
      <StyledTag variant={viewMode === ViewMode.TABLE ? 'primary' : 'textDisabled'}>
        <IconButton variant="text" scale="sm" id="clickFarmTableView" onClick={() => handleToggle(ViewMode.TABLE)}>
          <ListViewIcon color="white" />
        </IconButton>
      </StyledTag>
      <StyledTag variant={viewMode === ViewMode.CARD ? 'primary' : 'textDisabled'}>
        <IconButton variant="text" scale="sm" id="clickFarmCardView" onClick={() => handleToggle(ViewMode.CARD)}>
          <CardViewIcon color="white" />
        </IconButton>
      </StyledTag>
    </Container>
  )
}

export default ToggleView
