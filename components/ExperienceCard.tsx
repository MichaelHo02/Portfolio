import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
  experience: Experience
}

const options = {
  month: 'short',
  year: 'numeric'
}

const ExperienceCard = ({ experience }: Props) => {
  const startDate = new Date(experience.dateStarted).toLocaleDateString('en-US', options)
  const endDate = experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toLocaleTimeString('en-US', options)
  return (
    <article
      // className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-white p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-500 overflow-hidden'
      className='flex flex-col rounded-lg gap-7 flex-shrink-0 backdrop-blur-lg bg-gray-200/80 shadow-lg p-6 w-full md:w-1/2 xl:w-1/3 snap-center'
    >
      {
        experience?.companyImage ?
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={urlFor(experience?.companyImage).url()}
            className='w-full object-contain object-center rounded-xl'
            alt="" />
          :
          <div className='bg-gray-500 h-[30%] rounded-xl flex items-center justify-center text-white'>
            Does not have image
          </div>
      }
      <div className='text-left'>
        <h4 className='text-2xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience.company}</p>
        <div className='flex flex-wrap gap-2 my-2'>
          {experience.technologies.map((technology) => (
            <>{technology?.image &&
              < img key={technology._id} className='h-10 w-10' src={urlFor(technology?.image).url()} alt="" />}
            </>
          ))}
        </div>
        <p className='uppercase py-5 text-black'>
          {startDate} - {endDate}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {experience.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard