import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { Project } from '../typings'
import ProjectCard from './ProjectCard'
import { wrap } from 'popmotion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

type Props = {
  projects?: Project[]
}

const Projects = ({ projects }: Props) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const projectIdx = wrap(0, projects ? projects.length : 0, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='relative min-h-screen bg-gray-50 z-0'
    >
      <div className='flex flex-col justify-start items-center gap-10 pt-20'>
        <h3 className='sectionHeader'>Projects</h3>
        <div className='relative w-full flex overflow-hidden z-20'>
          {
            projects &&
            <>
              <AnimatePresence initial={false} custom={direction} >
                <motion.div
                  custom={direction}
                  variants={variants}
                  initial='enter'
                  animate='center'
                  exit='exit'
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag='x'
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1)
                    } else {
                      paginate(-1)
                    }
                  }}
                >
                  <ProjectCard project={projects[projectIdx]} />
                </motion.div>
              </AnimatePresence>
              <div className='absolute flex items-center justify-between w-full h-full'>
                <div className='btn m-2 p-2 rounded-full cursor-pointer z-30' onClick={() => paginate(-1)}>
                  <ChevronLeftIcon className='w-10 h-10' />
                </div>
                <div className='btn m-2 p-2 rounded-full cursor-pointer z-30' onClick={() => paginate(1)}>
                  <ChevronRightIcon className='w-10 h-10' />
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </motion.div >
  )
}

export default Projects