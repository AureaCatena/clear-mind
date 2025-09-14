import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  const {therId} = useParams()
  const {therapists} = useContext(AppContext)

  const [therapistInfo, setTherapistInfo] = useState(null)

  const fetchTherapistInfo = async () => {
    const therapistInfo = therapists.find(ther => ther._id === therId)
    setTherapistInfo(therapistInfo)
    console.log(therapistInfo)

  }

  useEffect(()=>{
    fetchTherapistInfo()
  }, [therapists, therId])

  return therapistInfo && (
    <div>
      {/* -------------- Therapist Details ------------*/} 
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={therapistInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* -------------- Therapist Info: name, degree, experience ------------*/} 
          <p>
            {therapistInfo.name} 
            <img src={assets.verified_icon} alt="" />
          </p>
          <div>
           <p>{therapistInfo.degree} - {therapistInfo.speciality}</p>
           <button>{therapistInfo.experience}</button>
          </div>

        {/* -------------- Therapist About------------*/} 
        <div>
         <p>
          About <img src={assets.info_icon} alt="" /> 
        </p>
         <p>{therapistInfo.about}</p>
        </div>
        </div>
      </div> 
    </div>
  )
}

export default Appointment