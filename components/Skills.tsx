import { motion, Transition, Variant, Variants } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import { Skill as SkillType } from '../typings'
import { boolean } from 'joi'
import SkillsCard from './SkillsCard'

type Props = {
  skills?: SkillType[]
}

const variants: Variants = {
  initial: { opacity: 0 } as Variant,
  whileInView: { opacity: 1 } as Variant,
}

const transition: Transition = {
  transition: { duration: 1.5 }
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      transition={transition}
      className='relative min-h-screen bg-gray-50'>
      <div className='max-w-screen-lg text-center mx-auto'>
        <div className='flex flex-col justify-start items-center gap-10 pt-20'>
          <h3 className='sectionHeader'>Skills</h3>
          <h3 className='sectionSubHeader'>Click each skill for further details</h3>
          <SkillsCard title='Programming Languages'>
            {skills?.filter((skill) => skill.type === 'lang').map((skill, idx) => (
              <Skill key={skill._id} skill={skill} />
            ))}
          </SkillsCard>

          <SkillsCard title='Frameworks & Libraries'>
            {skills?.filter((skill) => skill.type === 'frame_lib').map((skill, idx) => (
              <Skill key={skill._id} skill={skill} />
            ))}
          </SkillsCard>

          <SkillsCard title='Others'>
            {skills?.filter((skill) => skill.type === 'other').map((skill, idx) => (
              <Skill key={skill._id} skill={skill} />
            ))}
          </SkillsCard>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills