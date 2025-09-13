import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Therapists = () => {

  const { speciality } = useParams()
  const [filterTherapist, setFilterTherapist] = useState([])
  const navigate = useNavigate()
  
  const { therapists } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterTherapist(therapists.filter(therapist => therapist.speciality === speciality))
    } else {
      setFilterTherapist(therapists)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [therapists, speciality])

  return (
    <div>
        <p>Browse through the therapy by speciality.</p>
        <div>
          <div> 
            <p>Psychoanalysis</p>
            <p>Gestalt Therapy</p>
            <p>Cognitive Behavioral Therapy (CBT)</p>
            <p>Family Therapy</p>
            <p>Psychotherapy</p>
            <p>Art Therapy</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterTherapist.map((item, index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-blue-50' src={item.image} alt=""/>
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-cm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Therapists