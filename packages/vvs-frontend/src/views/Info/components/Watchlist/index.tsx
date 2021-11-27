import styled from "styled-components"
import { Flex, FlexProps } from "vvs-uikit"
import { space } from "styled-system"

export const WatchlistCard = styled(Flex)<FlexProps>`
  background: ${({ theme }) => theme.colors.lightBeige};
  border-radius: ${({ theme }) => theme.radii.card};
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  position: relative;

  padding: 1px 1px 3px 1px;

  ${space}
`