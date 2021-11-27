import React from 'react'
import Countdown, { formatTimeDelta, CountdownRenderProps } from "react-countdown"
import { Flex, Text } from 'vvs-uikit'
import styled from 'styled-components'

const CountDownWrapper = styled.div`
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  width: 280px;
  z-index: 11;
  margin-top: 46px;
  transform: scale(.9) translate(-24px, -20px);
  ${({ theme }) => theme.mediaQueries.sm} {
    transform: scale(1) translate(0, 0);
  }
  .time {
    font-size: 30px;
    font-weight: bold;
    span {
      display: inline-block;
      width: 32px;
    }
  }
  .time-text {
    text-transform: uppercase;
    font-size: 12px;
    margin-top: 6px;
    i {
      &:nth-child(1) {
        margin-left: 10px;
      }
      &:nth-child(2) {
        margin-left: 40px;
      }
      &:nth-child(3) {
        margin-left: 30px;
      }
      &:nth-child(4) {
        margin-left: 22px;
      }
    }
  }
`

const LaunchCountDown = () => {
  // The end time is set as Nov 8th, 2021 11AM HKT
  const launchTimeStamp = + new Date('2021-11-09T15:00:00.000+08:00')

  const renderer = (time: CountdownRenderProps) => {
    const { days, hours, minutes, seconds } = formatTimeDelta(time)

    return (
      <>
        <Flex className="time" justifyContent="space-around">
          <span>{days}</span>
          :
          <span>{hours}</span>
          :
          <span>{minutes}</span>
          :
          <span>{seconds}</span>
        </Flex>
        <Flex className="time-text">
          <i>{'Days'}</i>
          <i>{'Hours'}</i>
          <i>{'Minutes'}</i>
          <i>{'Seconds'}</i>
        </Flex>
        <Flex justifyContent="center">
          <img
            src="/images/Group.png"
            alt="Cronos Logo"
            style={{
              marginTop: 50,
              display: 'block',
              maxWidth: 110,
              maxHeight: 60,
              width: 'auto',
              height: 'auto'
            }}
          />
        </Flex>
      </>
    )
  }

  return (
    <CountDownWrapper>
      <Text fontSize="20px" color="white">{'Get your pickaxes ready!'}</Text>
      <Countdown date={launchTimeStamp} renderer={renderer} />
    </CountDownWrapper>
  )
}

export default LaunchCountDown
