import React from 'react'
import { Flex, Image, Text, FlexProps, useMatchBreakpoints } from 'vvs-uikit'
import styled from 'styled-components'

type TopItemProps = {
  title: string
  icons: string[]
  name: string
  percent: string
  type: string
}

const TopBlingFarmAndCrystalPoolInformation: TopItemProps[] = [
  {
    title: 'Top Crystal Farm',
    icons: ['0x6a3173618859C7cd40fAF6921b5E9eB6A76f1fD4', '0x441d72d584b16105FF1C68DC8bc4517F4DC13E55'],
    name: 'CRO-WETH LP',
    percent: '---%',
    type: 'APR',
  },
  {
    title: 'Top Glitter Mine',
    icons: ['0x892dC1Bd7B216E304AF646355e9Ba2262aac3C85'],
    name: 'AUTO VVS',
    percent: '---%',
    type: 'APY',
  },
]

const CenterFlex = styled(Flex)`
  justify-content: center;
  align-content: center;
  align-items: center;
`
const PoolInfoModule = ({ name, icons, percent, title, type, ...restProps }: TopItemProps & FlexProps) => {
  const { isDesktop } = useMatchBreakpoints()

  return (
    <CenterFlex flexDirection={['column', 'column', 'column', 'row']} {...restProps}>
      <CenterFlex marginBottom={['10px', '10px', '10px', '0px']}>
        <Image
          src="/images/darkPurpleVector.svg"
          height={24}
          width={24}
          style={{
            minWidth: '24px',
            minHeight: '24px',
          }}
        />
        <Text
          fontSize={isDesktop ? '16px' : '13px'}
          fontWeight="600"
          ml="10px"
          mr="15px"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {title}:
        </Text>
      </CenterFlex>
      <CenterFlex mr={['0px', '0px', '0px', '20px']}>
        {icons.map((x, index) => (
          <Image
            height={16}
            width={16}
            mr="3px"
            alt="USD"
            style={index === 0 ? { zIndex: 2, minWidth: '24px', minHeight: '24px' } : { left: '-7px', minWidth: '24px', minHeight: '24px' }}
            src={`/images/tokens/${x}.svg`}
          />
        ))}
        <Text
          fontSize={isDesktop ? '16px' : '13px'}
          fontWeight="600"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </Text>
      </CenterFlex>
      <CenterFlex>
        <Text fontSize="28px" fontWeight="600" color="rgb(40, 86, 182)">
          {percent}
          <Text as="sup" ml="3px" fontSize="13px" verticalAlign="super" fontWeight="400" color="rgb(40, 86, 182)">
            {type}
          </Text>
        </Text>
      </CenterFlex>
    </CenterFlex>
  )
}

const TopBlingFarmAndCrystalPool = () => {
  return (
    <CenterFlex
      flexDirection="row"
      minHeight="84px"
      height={['144px', '144px', '144px', '84px']}
      background="linear-gradient(89.96deg, #AFCDE0 0.03%, #DABF7B 99.83%)"
    >
      {TopBlingFarmAndCrystalPoolInformation.map((item: TopItemProps, index: number) => (
        <PoolInfoModule key={item.name} {...item} marginRight={!index ? '70px' : '0px'} />
      ))}
    </CenterFlex>
  )
}

export default TopBlingFarmAndCrystalPool
