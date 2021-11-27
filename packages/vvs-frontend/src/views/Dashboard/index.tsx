import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom'
import {  Flex, Text } from 'vvs-uikit'
import styled from 'styled-components'

import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import UserBanner from 'views/Home/components/UserBanner'

import SubNav from './SubNav'
import MyFarms from './MyFarms'
import MyMines from './MyMines'
import FarmsCard from './FarmsCard'
import MinesCard from './MinesCard'

const StyledPageHeader = styled(PageHeader)`
  background: ${({ theme }) => theme.colors.darkPurple};
  > div {
    padding-top: 10px;
  }
`

const StyledUserBanner = styled.div`
  & > div {
    border-radius: 24px;
  }
`

const Dashboard = () => {
  const { path } = useRouteMatch();
  const { account } = useWeb3React()

  if (!account) {
    // return <Redirect to="/" />
  }
  return (
    <>
      <StyledPageHeader>
        {
          account && <StyledUserBanner>
            <UserBanner />
          </StyledUserBanner>
        }
        <Flex justifyContent="space-between" flexDirection={['column', 'column', 'row', null]}>
          <Flex flex={1} mr={[null, null, '30px', null]}>
            <FarmsCard />
          </Flex>
          <Flex flex={1}>
            <MinesCard />
          </Flex>
        </Flex>
      </StyledPageHeader>
      <Page>
        <SubNav />
        <Switch>
          <Route exact path={`${path}`}>
            <Redirect to={`${path}/farm`} />
          </Route>
          <Route exact path={`${path}/farm`}>
            <MyFarms />
          </Route>
          <Route exact path={`${path}/mine`}>
            <MyMines />
          </Route>
        </Switch>
      </Page>
    </>
  )
}

export default Dashboard
