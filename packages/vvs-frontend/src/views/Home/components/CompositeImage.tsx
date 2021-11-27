import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Box } from 'vvs-uikit'
import RellaxWrapper from '../../../components/RellaxWrapper'

const floatingAnim = (x: string, y: string) => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(${x}, ${y});
  }
  to {
    transform: translate(0, 0px);
  }  
`

const Wrapper = styled(Box)<{ maxHeight?: string; width?: string; height?: string }>`
  position: relative;
  max-height: ${({ maxHeight }) => maxHeight};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
// & :nth-child(2) {
//   animation: ${floatingAnim('3px', '15px')} 3s ease-in-out infinite;
//   animation-delay: 1s;
// }

// & :nth-child(3) {
//   animation: ${floatingAnim('5px', '10px')} 3s ease-in-out infinite;
//   animation-delay: 0.66s;
// }

// & :nth-child(4) {
//   animation: ${floatingAnim('6px', '5px')} 3s ease-in-out infinite;
//   animation-delay: 0.33s;
// }

// & :nth-child(5) {
//   animation: ${floatingAnim('4px', '12px')} 3s ease-in-out infinite;
//   animation-delay: 0s;
// }
const DummyImg = styled.img<{ maxHeight: string }>`
  max-height: ${({ maxHeight }) => maxHeight};
  visibility: hidden;
`
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

enum Resolution {
  MD = '1.5x',
  LG = '2x',
}
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

// export const getSrcSet = (base: string, imageSrc: string) => {
//   return `${getImageUrl(base, imageSrc)} 512w, 
//   ${getImageUrl(base, imageSrc, Resolution.MD)} 768w, 
//   ${getImageUrl(base, imageSrc, Resolution.LG)} 1024w,`
// }

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
