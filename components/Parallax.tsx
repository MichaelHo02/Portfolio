import { wrap } from '@motionone/utils'
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'

import React, { ReactNode, useRef } from 'react'

type Props = {
  children: ReactNode
}

const Parallax = ({ children }: Props) => {
  const baseVelocity = 5
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })
  const x = useTransform(baseX, v => `${wrap(-99, 99, v)}%`)
  const directionFactor = useRef(1)
  const prevT = useRef(0)
  useAnimationFrame(t => {
    if (!prevT.current) prevT.current = t
    const timeDelta = t - prevT.current
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000)
    if (velocityFactor.get() < 0) directionFactor.current = -1
    else directionFactor.current = 1
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
    prevT.current = t;
  })
  return (
    <div className='overflow-hidden flex flex-nowrap w-full'>
      <motion.div className=' relative flex flex-nowrap w-full justify-evenly' style={{ x }}>
        {children}
      </motion.div>
    </div>
  )
}

export default Parallax