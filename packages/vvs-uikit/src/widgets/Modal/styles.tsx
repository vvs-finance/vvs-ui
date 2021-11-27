import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";

export const ModalHeader = styled.div<{ background?: string }>`
  position: relative;
  background: ${({ background }) => background || "transparent"};
  padding: 24px;
`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex: 1;
  > h2 {
    font-size: 28px;
    font-weight: normal;
    margin: 0 auto;
  }
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`;

const StyledModalCloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 10px;
`;

const StyledModalBackButton = styled.div`
  position: absolute;
  top: 16px;
  left: 10px;
`;

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
    <StyledModalCloseButton>
      <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
        <CloseIcon color="text" />
      </IconButton>
    </StyledModalCloseButton>
  );
};

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <StyledModalBackButton>
      <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
        <ArrowBackIcon color="text" />
      </IconButton>
    </StyledModalBackButton>
  );
};

export const ModalContainer = styled(Box)<{ minWidth: string }>`
  overflow: hidden;
  background: ${({ theme }) => theme.modal.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 18px;
  width: 100%;
  max-height: 100vh;
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`;
