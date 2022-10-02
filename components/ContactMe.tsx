import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form'
type Props = {}
type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}
const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    window.location.href = `mailto:thach.holeminh@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`
    console.log(data);
  }
  return (
    <div className='relative min-h-screen bg-gray-50'>
      <div className='max-w-screen-lg text-center mx-auto'>
        <div className='flex flex-col justify-start items-center gap-10 pt-20'>
          <h3 className='sectionHeader'>Contact</h3>
          <h4 className='text-4xl font-semibold text-center'>
            I have got just what you need.{' '}
            <span className='decoration-[#F7AB0A]/50 underline'>
              Let&apos;s Talk
            </span>
          </h4>

          <div className='space-y-10'>
            <div className='contactRow'>
              <PhoneIcon className='contactIcon' />
              <p className='text-2xl'>+123456789</p>
            </div>

            <div className='contactRow'>
              <EnvelopeIcon className='contactIcon' />
              <p className='text-2xl'>thach.holeminh@gmail.com</p>
            </div>

            <div className='contactRow'>
              <MapPinIcon className='contactIcon' />
              <p className='text-2xl'>123 Developer Street</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 w-fit mx-auto'>
            <div className='flex flex-col md:flex-row gap-8'>
              <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
              <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
            </div>
            <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
            <textarea {...register('message')} placeholder='Message' className='contactInput' />
            <button
              type='submit'
              className='btn py-5 rounded-md text-lg'
            >Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe