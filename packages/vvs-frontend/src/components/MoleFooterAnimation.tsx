import React, { useEffect, useRef } from 'react'
import { Flex, Image } from 'vvs-uikit'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'


const MoleAnimation = styled.div`
  position: relative;
  overflow: hidden;
  pointer-events: none;
  > .moles {
    width: 100vw;
    height: 100px;
    transform: translateY(25%);
  }
  .mole-item {
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 100px;
    height: auto;
  }
  .mole-1 {
    animation: mining1 48s ease-in-out infinite;
  }
  .mole-2 {
    animation: mining2 48s ease-in-out infinite;
  }
  .mole-3 {
    animation: mining3 48s ease-in-out infinite;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    top: 20px;
  }
  @keyframes mining1 {
    0%, 16% {
      opacity: 1;
    }
    17%, 100%{
      opacity: 0;
    }
  }
  @keyframes mining2 {
    0%, 33% {
      opacity: 0;
    }
    35%, 49%{
      opacity: 1;
    }
    50%, 100%{
      opacity: 0;
    }
  }
  @keyframes mining3 {
    0%, 67% {
      opacity: 0;
    }
    68%, 82%{
      opacity: 1;
    }
    83%, 100%{
      opacity: 0;
    }
  }
`

const MoleFooterAnimation = () => {

  const location = useLocation()

  const moleRefs = useRef([])

  useEffect(() => {

    let counter = 0
    moleRefs.current[counter++].src = "/images/home/landing-page/mole.gif"
    const animationInterval = setInterval(() => {
      moleRefs.current[counter].src = "/images/home/landing-page/mole.gif"
      counter++
      if (counter > moleRefs.current.length - 1)
        counter = 0
    }, 16000)

    return () => {
      clearInterval(animationInterval)
    }

  }, [])

  useEffect(() => {
    moleRefs.current[0].src = "/images/home/landing-page/mole.gif"
  }, [location])

  return (
    <MoleAnimation>
      <Flex className="moles" justifyContent="space-around">
        {
          [1, 2, 3].map(item => <img ref={el => { moleRefs.current[item - 1] = el; return el }} className={`mole-item mole-${item}`} alt='' key={item} src="/images/home/landing-page/mole.gif" />)
        }
      </Flex>
    </MoleAnimation>
  )
}

export default MoleFooterAnimation
