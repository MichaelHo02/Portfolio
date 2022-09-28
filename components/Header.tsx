import { motion } from "framer-motion"
import Link from 'next/link'
import { SocialIcon } from "react-social-icons"
import { Social } from '../typings'

type Props = {
  socials?: Social[]
}

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-40 xl:items-center backdrop-blur-sm bg-white/80">
      <motion.div>

      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5, }}
        animate={{ x: 0, opacity: 1, scale: 1, }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center space-x-2">
        {socials?.map((social) => (
          <SocialIcon key={social._id} url={social.url} style={{ width: 40, height: 40 }} />
        ))}
        <Link href='#contactMe'>
          <div className='cursor-pointer heroButton flex items-center'>
            <p className="uppercase hidden md:inline-flex text-sm text-gray-800">Get In Touch</p>
          </div>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header