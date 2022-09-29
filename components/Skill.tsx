import React from 'react'
import { Skill } from '../typings'

type Props = {
  skill: Skill
}

const Skill = ({ skill }: Props) => {
  return (
    <div className='relative cursor-pointer'>
      {
        skill?.image &&
        <img
          className='h-10 md:h-14 xl:h-18 rounded-md'
          src={skill.url}
          alt=""
        />
      }
    </div>
  )
}

export default Skill