import React from 'react'
import { assets } from '../assets/assets/'

const About = () => {
  return (
    <div>
        
      <div className='text-center text-2x1 pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
       
     <div className='my-10 flex flex-col md:flex-row gap-12'>
      <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
       <p>Welcome to Clear Mind, your trusted partner in managing your mental health needs conveniently and efficiently.
       At Clear Mind, we understand the challenges individuals face when it comes to scheduling therapy sessions and managing their wellbeing records.</p>
       <p>Clear Mind is committed to excellence in mental health technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service.
       Whether you're booking your first appointment or managing ongoing care, Clear Mind is here to support you every step of the way.</p>
       <b className='text-gray-800'>Our vision</b>
       <p>Our vision at Clear Mind is to create a seamless mental healthcare experience for every user. We aim to bridge the gap between clients and therapists, making it easier for you to access the care you need, when you need it.</p> 
      </div>
     </div>

     <div className='text-x1 my-4'>
      <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
     </div>

     <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Efficiency:</b>
        <p>Effortless therapy booking that fits into your daily routine.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convinience:</b>
        <p>Access to a network of trusted therapists and counselors in your area.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalization:</b>
        <p>Tailored recommendations and reminders to help you stay on track with therapy.</p>
      </div>
     </div>

    </div>
  )
}

export default About