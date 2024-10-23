import React from 'react'
import LogoBtn from './ui/logoBtn'
import BackToTop from './backToTop'

export default function footer() {
  return (
    <div className='flex justify-center mt-52 mb-5'>
        <span className='flex text-2xl'>
            Copyright ©&nbsp;<LogoBtn />
        </span>

        <BackToTop />
    </div>
  )
}
