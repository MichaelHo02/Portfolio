import { once } from 'events'
import { motion, Transition, Variant, Variants } from 'framer-motion'
import React, { ReactNode } from 'react'

type Props = {
  title?: string,
  children: ReactNode
}

const variants: Variants = {
  initial: { opacity: 0, scale: 0 } as Variant,
  whileInView: { opacity: 1, scale: 1 } as Variant,
}

const transition: Transition = {
  transition: { type: "spring", duration: 1 }
}

const SkillsCard = ({ title, children }: Props) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      transition={transition}
      viewport={{ once: true }}
      className='w-full bg-gradient-to-bl from-primary-color to-tertiary-color rounded-md shadow-lg' >
      <div
        className='backdrop-blur-md bg-white/40 flex flex-col gap-5 p-8 rounded-md'>
        <h4 className='uppercase tracking-[3px] text-white text-md'>
          {title}
        </h4>
        <div className='flex flex-wrap items-center justify-center gap-5 w-full px-5'>
          {children}
        </div>
      </div>
    </motion.div >
  )
}

export default SkillsCard