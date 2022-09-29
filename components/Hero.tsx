import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircle from './BackgroundCircle'

type Props = {
  pageInfo?: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [`My name is ${pageInfo?.name}`, "Nice to meet you!", "Take a look at my interesting life."],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
      <BackgroundCircle />
      {
        pageInfo?.heroImage &&
        <img
          className='relative rounded-full h-32 w-32 mx-auto object-cover'
          src={urlFor(pageInfo?.heroImage).url()}
          alt="" />
      }
      <div className="z-20 w-full">
        <h2 className='text-md uppercase text-white/80 pb-2 tracking-[10px] md:tracking-[15px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#000000' />
        </h1>

        <div className='pt-5 space-x-1 space-y-2'>
          <Link href="#about">
            <button className='btn btn--secondary'>About</button>
          </Link>
          <Link href="#experience">
            <button className='btn btn--secondary'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='btn btn--secondary'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='btn btn--secondary'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero