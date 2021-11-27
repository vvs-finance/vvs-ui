import React from 'react'
import { Flex, IconButton, CogIcon, useModal } from 'vvs-uikit'
import styled from 'styled-components'
import SettingsModal from './SettingsModal'

const StyledIconButton = styled(IconButton)`
  &:hover {
    opacity: 1 !important;
  }
`

const GlobalSettings = () => {
  const [onPresentSettingsModal] = useModal(<SettingsModal />)

  return (
    <Flex>
      <StyledIconButton
        onClick={onPresentSettingsModal}
        variant="text"
        scale="sm"
        mr="8px"
        id="open-settings-dialog-button"
      >
        <CogIcon height={22} width={22} color="white" />
      </StyledIconButton>
    </Flex>
  )
}

export default GlobalSettings
