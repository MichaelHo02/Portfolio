import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import { Skill as SkillType } from '../typings'
import { boolean } from 'joi'

type Props = {
  skills?: SkillType[]
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative min-h-screen bg-gray-50'>
      <div className='max-w-screen-lg text-center mx-auto'>
        <div className='flex flex-col justify-start items-center gap-10 pt-20'>
          <h3 className='sectionHeader'>Skills</h3>
          <h3 className='sectionSubHeader'>Hover over a skill for current proficiency</h3>
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-full bg-gradient-to-bl from-primary-color to-tertiary-color rounded-md shadow-lg'>
            <div
              className='backdrop-blur-md bg-white/40 flex flex-col gap-5 p-8 rounded-md'>
              <h4 className='uppercase tracking-[3px] text-white text-md'>Programming Languages</h4>
              <div className='flex flex-wrap items-center justify-center gap-5 w-full px-5'>
                {skills?.map((skill, idx) => (
                  <Skill key={skill._id} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills