import React, { useContext }from 'react'
import { AppContext } from '../context/AppContext'
import { therapists } from '../assets/assets'

const MyAppointments = () => {

  const {therapists} = userContext(AppContext)

  return (
    <div>
      <p>My Appointments</p>
      <div>
        {therapists.slice(0, 2).map((item, index)=>(
        <div key={imdex}>
          <div>
            <img src={item.image} alt="" />
          </div>
          <div>
            <p>{item.name}</p>
            <p>{item.speciality}</p>
            <p>Address:</p>
            <p>{item.address.line1}</p>
            <p>{item.address.line1}</p>
            <p><span>Date and Time:</span> 25, November, 2025 | 8:30 PM</p>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default MyAppointments