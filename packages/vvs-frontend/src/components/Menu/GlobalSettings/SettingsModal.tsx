import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, PancakeToggle, Toggle, Flex, Modal, InjectedModalProps, ThemeSwitcher } from 'vvs-uikit'
import {
  useAudioModeManager,
  useExpertModeManager,
  useUserExpertModeAcknowledgementShow,
  useUserSingleHopOnly,
} from 'state/user/hooks'
import { useTranslation } from 'contexts/Localization'
import { useSwapActionHandlers } from 'state/swap/hooks'
import useTheme from 'hooks/useTheme'
import QuestionHelper from '../../QuestionHelper'
import TransactionSettings from './TransactionSettings'
import ExpertModal from './ExpertModal'
import GasSettings from './GasSettings'

// TODO: Temporary. Once uikit is merged with this style change, this can be removed.
// const PancakeToggleWrapper = styled.div`
//   .pancakes {
//     position: absolute;
//   }
// `

const ScrollableContainer = styled(Flex)`
  flex-direction: column;
  max-height: 400px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-height: none;
  }
`

const SettingsModal: React.FC<InjectedModalProps> = ({ onDismiss }) => {
  const [showConfirmExpertModal, setShowConfirmExpertModal] = useState(false)
  const [showExpertModeAcknowledgement, setShowExpertModeAcknowledgement] = useUserExpertModeAcknowledgementShow()
  const [expertMode, toggleExpertMode] = useExpertModeManager()
  const [singleHopOnly, setSingleHopOnly] = useUserSingleHopOnly()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()
  const { onChangeRecipient } = useSwapActionHandlers()

  const { t } = useTranslation()
  const { theme, isDark, toggleTheme } = useTheme()

  if (showConfirmExpertModal) {
    return (
      <ExpertModal
        setShowConfirmExpertModal={setShowConfirmExpertModal}
        onDismiss={onDismiss}
        setShowExpertModeAcknowledgement={setShowExpertModeAcknowledgement}
      />
    )
  }

  const handleExpertModeToggle = () => {
    if (expertMode) {
      onChangeRecipient(null)
      toggleExpertMode()
    } else if (!showExpertModeAcknowledgement) {
      onChangeRecipient(null)
      toggleExpertMode()
    } else {
      setShowConfirmExpertModal(true)
    }
  }

  return (
    <Modal
      title={t('Platform Settings')}
      // headerBackground="gradients.cardHeader"
      onDismiss={onDismiss}
      style={{ maxWidth: '460px' }}
      bodyPadding="0 24px 24px 24px"
    >
      <ScrollableContainer>
        <Flex pb="24px" flexDirection="column">
          <Text textTransform="uppercase" fontSize="14px" color="textSubtle" mb="24px">
            {t('Global')}
          </Text>
          {/* <Flex justifyContent="space-between">
            <Text mb="24px">{t('Dark mode')}</Text>
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
          </Flex> */}
          <GasSettings />
        </Flex>
        <Flex pt="24px" flexDirection="column" borderTop={`1px ${theme.colors.cardBorder} solid`}>
          <Text textTransform="uppercase" fontSize="14px" color="textSubtle" mb="24px">
            {t('Swaps & Liquidity')}
          </Text>
          <TransactionSettings />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb="24px">
          <Flex alignItems="center">
            <Text color="darkBlue" fontSize="14px">
              {t('Expert Mode')}
            </Text>
            <QuestionHelper
              text={t('Skips confirmation windows and allows high slippage trades. With great power comes great responsibility. Use at your own risk.')}
              placement="top-start"
              ml="4px"
              mt="4px"
            />
          </Flex>
          <Toggle id="toggle-expert-mode-button" scale="md" checked={expertMode} onChange={handleExpertModeToggle} />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb="24px">
          <Flex alignItems="center">
            <Text color="darkBlue" fontSize="14px">
              {t('Disable Trade Routing')}
            </Text>
            <QuestionHelper text={t('Restricts swaps to direct trading pairs only. This will diminish the available trades supported by the platform.')} placement="top-start" ml="4px" mt="4px" />
          </Flex>
          <Toggle
            id="toggle-disable-multihop-button"
            checked={singleHopOnly}
            scale="md"
            onChange={() => {
              setSingleHopOnly(!singleHopOnly)
            }}
          />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb="24px" pb={["20px", "20px", "20px", 0]}>
          <Flex alignItems="center">
            <Text color="darkBlue" fontSize="14px">
              {t('Pickaxe Sounds')}
            </Text>
            <QuestionHelper
              text={t('Cling! Cling! Cling! an immersive sound as our miners seek the highest clarity gems in the VVS mines')}
              placement="top-start"
              ml="4px"
            />
          </Flex>
          {/* <PancakeToggleWrapper>
            <PancakeToggle checked={audioPlay} onChange={toggleSetAudioMode} scale="md" />
          </PancakeToggleWrapper> */}
          <Toggle
            id="toggle-autoplay-button"
            checked={audioPlay}
            scale="md"
            onChange={toggleSetAudioMode}
          />
        </Flex>
      </ScrollableContainer>
    </Modal>
  )
}

export default SettingsModal
