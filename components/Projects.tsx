import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { Project } from '../typings'
import ProjectCard from './ProjectCard'

type Props = {
  projects?: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='relative min-h-screen bg-gray-50 z-0'
    >
      <div className='flex flex-col justify-start items-center gap-10 pt-20'>
        <h3 className='sectionHeader'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
          {projects?.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </motion.div >
  )
}

export default Projects