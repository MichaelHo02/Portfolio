import { motion, Transition, Variant, Variants } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
  experience: Experience
}

const options: any = {
  month: 'short',
  year: 'numeric',
}

const variants: Variants = {
  initial: { y: -100, opacity: 0 } as Variant,
  whileInView: { opacity: 1, y: 0 } as Variant
}

const transition: Transition = {
  duration: 1.2
}

const ExperienceCard = ({ experience }: Props) => {
  const startDate = new Date(experience.dateStarted).toLocaleDateString('en-US', options)
  const endDate = experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toLocaleDateString('en-US', options)
  return (
    <article
      className='flex flex-col rounded-lg gap-7 flex-shrink-0 backdrop-blur-lg bg-gray-200/80 shadow-lg p-6 w-full md:w-1/2 xl:w-1/3 snap-center'
    >
      {
        experience?.companyImage ?
          <motion.img
            variants={variants}
            initial="initial"
            transition={transition}
            whileInView="whileInView"
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