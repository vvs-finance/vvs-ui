import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import {
  Modal,
  Text,
  Button,
  Flex,
  ButtonMenu,
  Checkbox,
  BalanceInput,
  HelpIcon,
  ButtonMenuItem,
  useTooltip,
} from 'vvs-uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import RoiCalculatorFooter from './RoiCalculatorFooter'
import RoiCard from './RoiCard'
import useRoiCalculatorReducer, { CalculatorMode, EditingCurrency } from './useRoiCalculatorReducer'
import AnimatedArrow from './AnimatedArrow'

interface RoiCalculatorModalProps {
  onDismiss?: () => void
  onBack?: () => void
  earningTokenPrice: number
  apr: number
  displayApr?: string
  linkLabel: string
  linkHref: string
  stakingTokenBalance: BigNumber
  stakingTokenSymbol: string
  stakingTokenPrice: number
  earningTokenSymbol?: string
  multiplier?: string
  autoCompoundFrequency?: number
  performanceFee?: number
  isFarm?: boolean
  initialValue?: string
}

const StyledModal = styled(Modal)`
  width: 420px;
  & > :nth-child(2) {
    padding: 0;
  }
`

const ScrollableContainer = styled.div`
  padding: 0 24px 24px 24px;
  max-height: 500px;
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-height: none;
  }
`

const FullWidthButtonMenu = styled(ButtonMenu)<{ disabled?: boolean }>`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightAqua};

  & > button {
    width: 100%;
    border-radius: 20px;
  }

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

const ButtonStyles = { borderRadius: 20 }

const RoiCalculatorModal: React.FC<RoiCalculatorModalProps> = ({
  onDismiss,
  onBack,
  earningTokenPrice,
  apr,
  displayApr,
  linkLabel,
  linkHref,
  stakingTokenBalance,
  stakingTokenSymbol,
  stakingTokenPrice,
  multiplier,
  initialValue,
  earningTokenSymbol = 'VVS', // FIXME vvs symbol
  autoCompoundFrequency = 0,
  performanceFee = 0,
  isFarm = false,
}) => {
  const { t } = useTranslation()
  const { account } = useActiveWeb3React()
  const balanceInputRef = useRef<HTMLInputElement | null>(null)

  const {
    state,
    setPrincipalFromUSDValue,
    setPrincipalFromTokenValue,
    setStakingDuration,
    toggleCompounding,
    toggleEditingCurrency,
    setCompoundingFrequency,
    setCalculatorMode,
    setTargetRoi,
  } = useRoiCalculatorReducer(stakingTokenPrice, earningTokenPrice, apr, autoCompoundFrequency, performanceFee)

  const { compounding, activeCompoundingIndex, stakingDuration, editingCurrency } = state.controls
  const { principalAsUSD, principalAsToken } = state.data

  // Auto-focus input on opening modal
  useEffect(() => {
    if (balanceInputRef.current) {
      balanceInputRef.current.focus()
    }
  }, [])

  // If user comes to calculator from staking modal - initialize with whatever they put in there
  useEffect(() => {
    if (initialValue) {
      setPrincipalFromTokenValue(initialValue)
    }
  }, [initialValue, setPrincipalFromTokenValue])

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    isFarm
      ? t('“My Balance” here includes both LP Tokens in your wallet, and LP Tokens already staked in this farm.')
      : t(
          '“My Balance” here includes both %assetSymbol% in your wallet, and %assetSymbol% already staked in this pool.',
          { assetSymbol: stakingTokenSymbol },
        ),
    { placement: 'top-end', tooltipOffset: [20, 10] },
  )

  const onBalanceFocus = () => {
    setCalculatorMode(CalculatorMode.ROI_BASED_ON_PRINCIPAL)
  }

  const editingUnit = editingCurrency === EditingCurrency.TOKEN ? stakingTokenSymbol : 'USD'
  const editingValue = editingCurrency === EditingCurrency.TOKEN ? principalAsToken : principalAsUSD
  const conversionUnit = editingCurrency === EditingCurrency.TOKEN ? 'USD' : stakingTokenSymbol
  const conversionValue = editingCurrency === EditingCurrency.TOKEN ? principalAsUSD : principalAsToken
  const onUserInput = editingCurrency === EditingCurrency.TOKEN ? setPrincipalFromTokenValue : setPrincipalFromUSDValue

  return (
    <StyledModal
      title={t('ROI Calculator')}
      onDismiss={onBack || onDismiss}
      onBack={onBack ?? null}
      // headerBackground="gradients.cardHeader"
    >
      <ScrollableContainer>
        <Flex flexDirection="column" mb="8px">
          <Text bold fontSize="14px" textTransform="uppercase" mb="10px">
            {t('%asset% staked', { asset: stakingTokenSymbol })}
          </Text>
          <BalanceInput
            currencyValue={`${conversionValue} ${conversionUnit}`}
            innerRef={balanceInputRef}
            placeholder="0.00"
            value={editingValue}
            unit={editingUnit}
            onUserInput={onUserInput}
            switchEditingUnits={toggleEditingCurrency}
            onFocus={onBalanceFocus}
            style={{ border: 'none', boxShadow: 'none' }}
          />
          <Flex justifyContent="space-evenly" mt="10px">
            <Button
              scale="xs"
              p="16px"
              width="68px"
              variant="primary"
              onClick={() => setPrincipalFromUSDValue('100')}
              style={ButtonStyles}
            >
              $100
            </Button>
            <Button
              scale="xs"
              p="16px"
              width="68px"
              variant="primary"
              onClick={() => setPrincipalFromUSDValue('1000')}
              style={ButtonStyles}
            >
              $1000
            </Button>
            <Button
              disabled={stakingTokenBalance.lte(0) || !account}
              scale="xs"
              p="16px"
              width="128px"
              variant="primary"
              onClick={() =>
                setPrincipalFromUSDValue(getBalanceNumber(stakingTokenBalance.times(stakingTokenPrice)).toString())
              }
              style={ButtonStyles}
            >
              {t('My Balance').toLocaleUpperCase()}
            </Button>
            <span ref={targetRef}>
              <HelpIcon width="22px" height="22px" color="primary" mt="4px" />
            </span>
            {tooltipVisible && tooltip}
          </Flex>
          <Text mt="24px" bold fontSize="14px" textTransform="uppercase" mb="10px">
            {t('Staked for')}
          </Text>
          <FullWidthButtonMenu activeIndex={stakingDuration} onItemClick={setStakingDuration} scale="sm">
            <ButtonMenuItem variant="tertiary">{t('1D')}</ButtonMenuItem>
            <ButtonMenuItem variant="tertiary">{t('7D')}</ButtonMenuItem>
            <ButtonMenuItem variant="tertiary">{t('30D')}</ButtonMenuItem>
            <ButtonMenuItem variant="tertiary">{t('1Y')}</ButtonMenuItem>
            <ButtonMenuItem variant="tertiary">{t('5Y')}</ButtonMenuItem>
          </FullWidthButtonMenu>
          {/* {autoCompoundFrequency === 0 && (
            <>
              <Text mt="24px" bold fontSize="14px" textTransform="uppercase" mb="10px">
                {t('Compounding every')}
              </Text>
              <Flex alignItems="center">
                <Flex flex="1">
                  <Checkbox scale="sm" hasBorder checked={compounding} onChange={toggleCompounding} />
                </Flex>
                <Flex flex="6">
                  <FullWidthButtonMenu
                    disabled={!compounding}
                    activeIndex={activeCompoundingIndex}
                    onItemClick={setCompoundingFrequency}
                    scale="sm"
                  >
                    <ButtonMenuItem>{t('1D')}</ButtonMenuItem>
                    <ButtonMenuItem>{t('7D')}</ButtonMenuItem>
                    <ButtonMenuItem>{t('14D')}</ButtonMenuItem>
                    <ButtonMenuItem>{t('30D')}</ButtonMenuItem>
                  </FullWidthButtonMenu>
                </Flex>
              </Flex>
            </>
          )} */}
        </Flex>
        <AnimatedArrow calculatorState={state} />
        <Text fontSize="14px" bold textTransform="uppercase" mb="10px">
          {t('ROI at current rates')}
        </Text>
        <Flex>
          <RoiCard
            earningTokenSymbol={earningTokenSymbol}
            calculatorState={state}
            setTargetRoi={setTargetRoi}
            setCalculatorMode={setCalculatorMode}
          />
        </Flex>
      </ScrollableContainer>
      <RoiCalculatorFooter
        isFarm={isFarm}
        apr={apr}
        displayApr={displayApr}
        autoCompoundFrequency={autoCompoundFrequency}
        multiplier={multiplier}
        linkLabel={linkLabel}
        linkHref={linkHref}
        performanceFee={performanceFee}
      />
    </StyledModal>
  )
}

export default RoiCalculatorModal
