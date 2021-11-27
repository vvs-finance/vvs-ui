import React, { useCallback } from 'react'
import { ChainId, Currency, Token } from 'vvs-sdk'
import styled from 'styled-components'
import {
  Button,
  Text,
  ErrorIcon,
  ArrowUpIcon,
  MetamaskIcon,
  Flex,
  Box,
  Link,
  Modal,
  Image,
  InjectedModalProps,
} from 'vvs-uikit'
import { Spinner } from 'components/Spinner'
import { registerToken } from 'utils/wallet'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { wrappedCurrency } from 'utils/wrappedCurrency'
import { RowFixed } from '../Layout/Row'
import { AutoColumn, ColumnCenter } from '../Layout/Column'
import { getExplorerLink } from '../../utils'

const Wrapper = styled.div`
  width: 100%;
`
const Section = styled(AutoColumn)``
const InlineImage = styled(Image)`
  display: inline-block;
  vertical-align: bottom;
  top: 2px;
`

const ConfirmedIcon = styled(ColumnCenter)`
  padding: 24px 0;
`

function ConfirmationPendingContent({ pendingText }: { pendingText: string }) {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <ConfirmedIcon>
        {/* <Spinner /> */}
        <Image src="/images/loadingDiamond.gif" width={120} height={120} alt="static-waiting" />
      </ConfirmedIcon>
      <AutoColumn justify="center">
        <Text fontSize="28px" fontWeight="400">
          {t('Waiting For Confirmation')}
        </Text>
        <AutoColumn justify="center" marginBottom="30px">
          <Text bold small textAlign="center" fontSize="16px" fontWeight="400" color="darkGrey">
            {pendingText}
          </Text>
        </AutoColumn>
        <Box padding="18px" background="#F0F8F9" borderRadius="12px" width="325px">
          <InlineImage src="/images/exclamationPoint.svg" height={22} width={22} />
          <Text small color="black" textAlign="center" fontSize="13px" display="inline-block">
            {t('Please confirm this transaction in your wallet')}
          </Text>
        </Box>
      </AutoColumn>
    </Wrapper>
  )
}

function TransactionSubmittedContent({
  onDismiss,
  chainId,
  hash,
  currencyToAdd,
}: {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
  currencyToAdd?: Currency | undefined
}) {
  const { library } = useActiveWeb3React()

  const { t } = useTranslation()

  const token: Token | undefined = wrappedCurrency(currencyToAdd, chainId)

  return (
    <Wrapper>
      <Section>
        <ConfirmedIcon>
          {/* <ArrowUpIcon strokeWidth={0.5} width="90px" color="primary" /> */}
          <Image src="/images/submitted.svg" alt="submitted" height={120} width={120} />
        </ConfirmedIcon>
        <AutoColumn gap="12px" justify="center">
          <Text fontSize="28px">{t('Transaction Submitted')}</Text>
          {chainId && hash && (
            <Link
              external
              small
              href={getExplorerLink(hash, 'transaction', chainId)}
              color="primary"
              fontWeight="400"
              fontSize="16px"
            >
              {t('View on Cronos Explorer')}
            </Link>
          )}
          {/* {currencyToAdd && library?.provider?.isMetaMask && (
            <Button
              variant="tertiary"
              mt="12px"
              width="fit-content"
              onClick={() => registerToken(token.address, token.symbol, token.decimals)}
            >
              <RowFixed>
                {t('Add %asset% to Metamask', { asset: currencyToAdd.symbol })}
                <MetamaskIcon width="16px" ml="6px" />
              </RowFixed>
            </Button>
          )} */}
          <Button onClick={onDismiss} marginTop="10px" width="100%">
            <Text fontWeight="600px" color="white" fontSize="16px">
              {t('Close')}
            </Text>
          </Button>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export function ConfirmationModalContent({
  bottomContent,
  topContent,
}: {
  topContent: () => React.ReactNode
  bottomContent: () => React.ReactNode
}) {
  return (
    <Wrapper>
      <Box>{topContent()}</Box>
      <Box>{bottomContent()}</Box>
    </Wrapper>
  )
}

export function TransactionErrorContent({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <AutoColumn justify="center">
        <ErrorIcon color="failure" width="64px" />
        <Text color="failure" style={{ textAlign: 'center', width: '85%' }}>
          {message}
        </Text>
      </AutoColumn>

      <Flex justifyContent="center" pt="24px">
        <Button onClick={onDismiss} width="100%">
          {t('Dismiss')}
        </Button>
      </Flex>
    </Wrapper>
  )
}

interface ConfirmationModalProps {
  title: string
  customOnDismiss?: () => void
  hash: string | undefined
  content: () => React.ReactNode
  attemptingTxn: boolean
  pendingText: string
  currencyToAdd?: Currency | undefined
}

const TransactionConfirmationModal: React.FC<InjectedModalProps & ConfirmationModalProps> = ({
  title,
  onDismiss,
  customOnDismiss,
  attemptingTxn,
  hash,
  pendingText,
  content,
  currencyToAdd,
}) => {
  const { chainId } = useActiveWeb3React()

  const handleDismiss = useCallback(() => {
    if (customOnDismiss) {
      customOnDismiss()
    }
    onDismiss()
  }, [customOnDismiss, onDismiss])

  if (!chainId) return null

  return (
    <Modal
      title={!attemptingTxn && !hash ? title : ''}
      width="420px !important"
      onDismiss={handleDismiss}
      bodyPadding="0 24px 24px 24px"
    >
      {attemptingTxn ? (
        <ConfirmationPendingContent pendingText={pendingText} />
      ) : hash ? (
        <TransactionSubmittedContent
          chainId={chainId}
          hash={hash}
          onDismiss={onDismiss}
          currencyToAdd={currencyToAdd}
        />
      ) : (
        content()
      )}
    </Modal>
  )
}

export default TransactionConfirmationModal
