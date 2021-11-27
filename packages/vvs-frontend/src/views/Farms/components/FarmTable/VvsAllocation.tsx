import React from 'react'
import styled from 'styled-components'
import { VVS_PER_BLOCK } from 'config'

export interface AllocationProps {
  poolWeight: number
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  button {
    width: 20px;
    height: 20px;
  }
`

const AprWrapper = styled.div`
  min-width: 60px;
  text-align: left;
`

const VvsAllocation: React.FC<AllocationProps> = ({
  poolWeight
}) => {
  return <Container>
    <AprWrapper>{(poolWeight * VVS_PER_BLOCK).toLocaleString('en-US', { maximumFractionDigits: 2 })}/ Block</AprWrapper>
  </Container>
}

export default VvsAllocation
