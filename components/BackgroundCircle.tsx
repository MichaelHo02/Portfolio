import { motion } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'

type Props = {}

const BackgroundCircle = (props: Props) => {
  return (
    <motion.div
      initial={{
        scale: 0,
        borderRadius: '100%',
      }}
      animate={{
        scale: [0.2, 0.5, 0.5, 0.8, 1],
        borderRadius: ["20% 10%", "40% 10%", "60% 10%", "80% 10%", "0% 0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 1
      }}
      className="absolute w-full h-full bg-gradient-to-tr from-[#12C2E9] via-[#C471ED] to-[#F64F59] z-0"
    />
  )
}

export default BackgroundCircle