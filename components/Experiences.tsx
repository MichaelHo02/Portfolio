import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../typings'
import ExperienceCard from './ExperienceCard'

type Props = {
  experiences?: Experience[]
}

const Experiences = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='relative min-h-screen bg-gray-50 z-0'
    >
      <div className='w-full absolute top-[18%] bg-primary-color left-0 h-[200px] -skew-y-12 z-0' />
      <div className='w-full absolute top-[38%] bg-tertiary-color left-0 h-[200px] -skew-y-12 z-0' />
      <div className='w-full absolute top-[58%] bg-secondary-color left-0 h-[200px] -skew-y-12 z-0' />
      <div className='flex flex-col justify-start items-center gap-10 pt-20'>
        <h3 className="sectionHeader">Experiences</h3>
        <div className='w-full flex space-x-5 overflow-x-auto snap-x snap-proximity p-10 z-20'>
          {experiences?.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
        </div>
      </div>
    </motion.div >
  )
}

export default Experiences