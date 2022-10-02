import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
  pageInfo?: PageInfo
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='relative min-h-screen bg-gray-50'>
      <div className='max-w-screen-lg text-center mx-auto'>
        <div className='flex flex-col justify-start items-center gap-10 pt-20'>
          <h3 className="sectionHeader">About</h3>
          <div className='flex flex-col relative text-center md:text-left md:flex-row p-10 gap-10 mx-auto items-center'>
            {
              pageInfo?.profilePic &&
              <motion.img
                initial={{
                  x: -200,
                  opacity: 0
                }}
                transition={{
                  duration: 1
                }}
                whileInView={{
                  x: 0,
                  opacity: 1
                }}
                viewport={{ once: true }}
                className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-1/2 md:h-fit'
                src={urlFor(pageInfo?.profilePic).url()}
              />
            }
            <div className='space-y-10 px-0 md:px-10'>
              <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-primary-color'>little</span> background
              </h4>
              <p className='text-base text-justify'>
                {pageInfo?.backgroundInformation}
              </p>
            </div>
          </div>
        </div>
      </div >
    </motion.div>
  )
}

export default About