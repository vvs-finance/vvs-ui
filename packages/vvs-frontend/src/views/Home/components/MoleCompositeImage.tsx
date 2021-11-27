import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Box } from 'vvs-uikit'
import RellaxWrapper from '../../../components/RellaxWrapper'

type ImageWrapperPropsType = {
  top?: string
  left?: string
  height?: string
  width?: string
  zIndex?: number
  bottom?: string
  right?: string
}

const ImageWrapper = styled(Box)<ImageWrapperPropsType>`
  height: 100%;
  position: absolute;
  top: ${({ top }) => top ?? 'unset'};
  left: ${({ left }) => left ?? 'unset'};
  bottom: ${({ bottom }) => bottom ?? 'unset'};
  right: ${({ right }) => right ?? 'unset'};
  height: ${({ height }) => height ?? 'unset'};
  width: ${({ width }) => width ?? 'unset'};
  z-index: ${({ zIndex }) => zIndex ?? 0};
  img {
    max-height: 100%;
    width: auto;
  }
`

interface ImageAttributes {
  moleIndex?: number
  src: string
  alt: string
  zIndex?: number
  isRellax?: boolean
  speed?: number
  type?: string
  coordination?: {
    top?: string
    left?: string
    height?: string
    right?: string
    width?: string
    bottom?: string
  }
}

export interface MoleCompositeImageProps {
  path: string
  attributes: ImageAttributes[]
}

interface ComponentProps extends MoleCompositeImageProps {
  animate?: boolean
  maxHeight?: string
}

type getImageUrlPropsType = {
  path: string
  src: string
  type?: string
}

export const getImageUrl = ({path, src, type='png'}:getImageUrlPropsType): string =>
  `${path}${src}.${type}`

const MoleCompositeImage: React.FC<ComponentProps> = ({ path, attributes }) => {

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
    }, 11000)

    return () => {
      clearInterval(animationInterval)
    }

  }, [])

  useEffect(() => {
    moleRefs.current[0].src = "/images/home/landing-page/mole.gif"
  }, [location])
  
  return (
    <>
      {attributes.map((image) => (
        <ImageWrapper key={image.src + image.alt} {...(image.coordination ?? {})} zIndex={image.zIndex ?? 0}>
          {image.isRellax ? (
            <RellaxWrapper speed={image.speed || 6}>
              {image.src === 'mole' ? <img
                ref={el => { moleRefs.current[image.moleIndex] = el; return el }} 
                src={getImageUrl({path, src: image.src, type: image.type})}
                alt={image.alt}
                style={{
                  width: '100%',
                }}
              /> : <img
                src={getImageUrl({path, src: image.src, type: image.type})}
                alt={image.alt}
                style={{
                  width: '100%',
                }}
              />}
            </RellaxWrapper>
          ) : (
            <img
              src={getImageUrl({path, src: image.src, type: image.type})}
              alt={image.alt}
              style={{
                width: '100%',
              }}
            />
          )}
        </ImageWrapper>
      ))}
    </>
  )
}

export default MoleCompositeImage
