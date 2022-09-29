import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { motion } from "framer-motion"
import Link from 'next/link'
import { SocialIcon } from "react-social-icons"
import { PageInfo, Social } from '../typings'

type Props = {
  socials?: Social[],
  pageInfo?: PageInfo
}

const Header = ({ pageInfo, socials }: Props) => {
  return (
    <header className="sticky top-0 w-screen z-40 backdrop-blur-sm bg-white/80">
      <div className='flex items-center justify-between max-w-screen-lg mx-auto p-5'>
        <motion.div>
          <p className='text-lg font-semibold'>{pageInfo?.name.split(' ')[0]} Portfolio</p>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5, }}
          animate={{ x: 0, opacity: 1, scale: 1, }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center space-x-2">
          {socials?.map((social) => (
            <SocialIcon key={social._id} url={social.url} style={{ width: 40, height: 40 }} className='p-3' />
          ))}
          <Link href='#contactMe'>
            <div className='cursor-pointer p-3 md:px-6 md:py-3 btn flex items-center justify-center space-x-2'>
              <EnvelopeIcon className='w-[20px] h-[20px]' />
              <p className="uppercase hidden md:inline-flex text-sm">Get In Touch</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </header>
  )
}

export default Header