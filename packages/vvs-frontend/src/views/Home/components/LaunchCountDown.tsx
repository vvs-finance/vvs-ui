import React from 'react'
import Countdown, { formatTimeDelta, CountdownRenderProps } from "react-countdown"
import { Flex, Text } from 'vvs-uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

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
const { t } = useTranslation()
  // The end time is set as Nov 8th, 2021 11AM HKT
  const launchTimeStamp = + new Date('11-08-2021 11:00 AM')

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
          <i>{t('Days')}</i>
          <i>{ t('Hours') }</i>
          <i>{ t('Minutes') }</i>
          <i>{ t('Seconds') }</i>
        </Flex>
      </>
    )
  }

  return (
    <CountDownWrapper>
      <Text textTransform="uppercase" fontSize="20px" color="white">{ t('Launching soon') }</Text>
      <Countdown date={launchTimeStamp} renderer={renderer} />
    </CountDownWrapper>
  )
}

export default LaunchCountDown
