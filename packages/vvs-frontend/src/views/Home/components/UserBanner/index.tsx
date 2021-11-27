import React from 'react'
import { Box, Flex } from 'vvs-uikit'
import styled from 'styled-components'
import { isBlindMode } from 'utils'
import HarvestCard from './HarvestCard'
import UserDetail from './UserDetail'
import DepositsCard from './DepositsCard'
import PlatformYieldCard from './PlatformYieldCard'
import BgSvg from './BgSvg'

const StyledCard = styled(Box)`
  position: relative;
  // border-bottom: 1px ${({ theme }) => theme.colors.secondary} solid;
  // border-left: 1px ${({ theme }) => theme.colors.secondary} solid;
  // border-right: 1px ${({ theme }) => theme.colors.secondary} solid;
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.alphaBlue};
  margin: 0;
  box-shadow: 0px 10px 50px -20px rgba(121, 121, 121, 0.1);
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    border-radius: ${({ theme }) => `0 0 ${theme.radii.card} ${theme.radii.card}`};
  }

  & > div {
    position: relative;
    z-index: 10;
  }
  & > svg {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`

const UserBanner = () => {
  return (
    <StyledCard p={['16px', null, null, '24px']}>
      <Flex alignItems="unset" justifyContent="center" flexDirection={['column', null, 'column', 'row']}>
        <Flex mr={[null, null, null, '40px']}>
          <UserDetail />
        </Flex>
        <Flex flex="1" width={['100%', null, 'auto']} justifyContent="space-between" flexDirection={['column', 'column', 'row', null]}>
          <Flex flex="1" mb={[null, '20px', null, '0px']} mr={[null, null, '10px', '20px']}>
            {!isBlindMode() && <DepositsCard />}
          </Flex>
          <Flex flex="1" mb={[null, '20px', null, '0px']} mr={[null, null, null, '20px']}>
            {!isBlindMode() && <PlatformYieldCard />}
          </Flex>
        </Flex>
        <Flex width={[null, null, null, '350px']}>
          <HarvestCard />
        </Flex>
      </Flex>
      <BgSvg />
    </StyledCard>
  )
}

export default UserBanner
