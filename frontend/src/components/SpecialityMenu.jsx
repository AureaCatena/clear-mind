import React from 'react'
import { specialityData } from '../assets/assets' /* поменять в ассете фотографии и названия к хуям */
import { Link } from 'react-router-dom'


const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        <h1 className='text-3x1 fond-medium'>Find Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply Browse through our extensive list of trusted therapists, schedule your appointment hassle-free</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {specialityData.map((item, index)=>(
                <Link key={index} to={' /therapists/$(item.speciality}'}>
                    <img src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>

    </div>
  )
}

export default SpecialityMenu