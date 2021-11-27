import styled from 'styled-components'

const AnimationSvg = styled.div<{ delay?: number; duration?: number }>`
  pointer-events: none;
  @keyframes drawPath {
    0% {
      stroke-dashoffset: 110%;
    }
    20% {
      stroke-dashoffset: 0%;
    }
    25% {
      opacity: 1;
    }
    40%,
    100% {
      opacity: 0;
      stroke-dashoffset: -180%;
    }
  }

  .path {
    stroke-dashoffset: 1000;
    animation: drawPath ${({ duration }) => duration || 8}s linear infinite;
    animation-delay: ${({ delay }) => delay || 0}s;
  }

  .path1 {
    stroke-dasharray: 200;
  }
`

export const StyledDotLine = styled.div<{ top?: string; left?: string; bottom?: string; right?: string }>`
  position: absolute;
  pointer-events: none;
  top: ${({ top = 'auto' }) => top};
  left: ${({ left = 'auto' }) => left};
  bottom: ${({ bottom = 'auto' }) => bottom};
  right: ${({ right = 'auto' }) => right};
`

export default AnimationSvg
