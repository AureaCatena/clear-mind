import React from 'react'
import { specialityData } from '../assets/assets' /* change photos in assests */
import { Link } from 'react-router-dom'


const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        <h1 className='text-2xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply Browse through our extensive list of trusted therapists, schedule your appointment hassle-free</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {specialityData.map((item, index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/therapists/${item.speciality}`}>
                    <img className='w-36 sm:w-32 mb-2' src={item.image} alt="" />
                    <p className='text-center leading-tight max-w-[8rem] h-[2.5rem] overflow-hidden'>{item.speciality}</p>
                </Link>
            ))}
        </div>

    </div>
  )
}

export default SpecialityMenu