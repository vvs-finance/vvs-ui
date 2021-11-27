import React from 'react';
import styled from 'styled-components';
import { Flex } from 'vvs-uikit';
import { PositionedMoleImg } from './styleds';

const MoleTopRowWrapper = styled(Flex)`
    width: 100%;
    max-width: 576px;
`
export default function MoleTopRow() {

  return <MoleTopRowWrapper justifyContent="flex-end">
    <PositionedMoleImg alt="mole" src="/images/home/swap/showoff_mole.gif" />
  </MoleTopRowWrapper>
}