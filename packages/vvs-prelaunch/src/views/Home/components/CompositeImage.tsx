import React from 'react'
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

export interface CompositeImageProps {
  path: string
  attributes: ImageAttributes[]
}

interface ComponentProps extends CompositeImageProps {
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

const CompositeImage: React.FC<ComponentProps> = ({ path, attributes, maxHeight = '512px' }) => {
  return (
    <>
      {attributes.map((image, index) => (
        <ImageWrapper key={image.src + image.alt} {...(image.coordination ?? {})} zIndex={image.zIndex ?? 0}>
          {image.isRellax ? (
            <RellaxWrapper speed={image.speed || 6}>
              <img
                src={getImageUrl({path, src: image.src, type: image.type})}
                alt={image.alt}
                style={{
                  width: '100%',
                }}
              />
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

export default CompositeImage
