import React from 'react'

type Props = {}

const AboutSection = (_props: Props) => {
  return (
    <footer className="flex flex-col justify-center items-center w-full h-full gap-8" id='about'>
      <h1>Contacts</h1>
      <div className='w-4/5 md:w-1/2 h-full'>
        <div className='flex flex-row gap-2'>
          <p>Email:</p>
          <a href={`mailto:${process.env.NEXT_PUBLIC_WORK_EMAIL}`}>{process.env.NEXT_PUBLIC_WORK_EMAIL}</a>
        </div>
      </div>
      <span className='text-neutral-700'>© Francesco Nisi {new Date().getFullYear()}</span>
    </footer>
  )
}

export default AboutSection