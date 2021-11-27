import React, { FC, useState, useRef, useEffect } from 'react'
import Rellax from 'rellax'

interface RellaxWrapperProps {
  style?: React.CSSProperties
  className?: string
  zIndex?: number

  /**
   * Centered parallax elements in your viewport. 0.5 is centered.
   */
  percentage?: number

  /**
   * Specify different speeds for xs devices
   */
  xs?: number

  /**
   * Specify different speeds for mobile devices. Default breakpoint is 576.
   */
  mobile?: number

  /**
   * Specify different speeds for tablets. Default breakpoint is 768.
   */
  tablet?: number

  /**
   * Specify different speeds for desktop devices. Default breakpoint is 1201.
   */
  desktop?: number

  /**
   * Will run on every animation event
   * @param positions Object with x and y positions of the rellax element
   */
  callback?(positions: { x: number; y: number }): void

  /**
   * Enable the ability to center parallax elements in your viewport
   */
  center?: boolean

  /**
   * Enable horizontal parallax. This feature is intended for panoramic style websites, where users scroll horizontally instead of vertically
   */
  horizontal?: boolean

  /**
   * Allow decimal pixel values
   */
  round?: boolean

  /**
   * A negative value will make it move slower than regular scrolling, and a positive value will make it move faster
   */
  speed?: number

  /**
   * Enable vertical parallax
   */
  vertical?: boolean

  /**
   * By default, the position of parallax elements is determined via the scroll position of the body. Passing in the wrapper property will tell Rellax to watch that element instead
   */
  wrapper?: string | HTMLElement

  /**
   * Do we want rellax element to be relative to the mentioned wrapper.
   */
  relativeToWrapper?: boolean

  /**
   * Each breakpoint value represents the resolution for mobile, tablet, desktop respectively.
   */
  breakpoints?: [number, number, number]
}

const RellaxWrapper: FC<RellaxWrapperProps> = ({
  children,
  className,
  zIndex,
  speed,
  mobile,
  tablet,
  desktop,
  percentage,
  xs,
  style,
  ...options
}) => {
  const [rellax, setRellax] = useState<any>(null)
  const rellaxElement = useRef(null)

  useEffect(() => {
    if (rellaxElement.current) {
      setRellax(new Rellax(rellaxElement.current, options))
    }
    return () => {
      if (rellax) {
        rellax.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rellaxElement])
  return (
    <div
      ref={rellaxElement}
      data-rellax-speed={speed && speed.toString()}
      data-rellax-xs-speed={xs && xs.toString()}
      data-rellax-mobile-speed={mobile && mobile.toString()}
      data-rellax-tablet-speed={tablet && tablet.toString()}
      data-rellax-desktop-speed={desktop && desktop.toString()}
      data-rellax-zindex={zIndex && zIndex.toString()}
      data-rellax-percentage={percentage && percentage.toString()}
      className={className}
      style={style}
    >
      {children}
    </div>
  )
}

export default RellaxWrapper
