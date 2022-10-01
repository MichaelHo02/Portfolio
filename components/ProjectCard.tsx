import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { Project } from '../typings'

type Props = {
  project?: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className='w-full flex flex-col flex-shrink-0 gap-5 items-center justify-start min-h-screen'>
      <a href={project?.linkToBuild} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center w-2/3 group'>
        <ArrowTopRightOnSquareIcon className='absolute hidden group-hover:block w-10 h-10 z-30' />
        {
          project?.image &&
          <motion.img
            initial={{ y: -300 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={urlFor(project?.image).url()}
            alt=""
            className='w-full object-contain object-center group-hover:blur-sm'
          />
        }
      </a>
      <div className='space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          <span className='underline decoration-primary-color'>
            Project:
          </span> {' '}
          {project?.title}
        </h4>
        <div className='flex items-center space-x-2 justify-center'>
          {project?.technologies.map(technology => (
            <>
              {
                technology?.image &&
                < img
                  key={technology._id}
                  className='h-10 w-10'
                  src={urlFor(technology?.image).url()}
                  alt="" />
              }
            </>
          ))}
        </div>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {project?.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        {/* <p className='text-lg text-center md:text-left'>
          {project?.summary}
        </p> */}
      </div>
    </div>
  )
}

export default ProjectCard