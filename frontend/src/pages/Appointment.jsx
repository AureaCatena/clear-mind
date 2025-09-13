import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

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

  return (
    <div>
        
    </div>
  )
}

export default Appointment