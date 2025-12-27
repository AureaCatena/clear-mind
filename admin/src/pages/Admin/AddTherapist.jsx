import React from 'react'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import {toast} from 'react-toastify'
import axios from 'axios'

const AddTherapist = () => {

    const [therImg, setTherImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('Select experience')
    const [fees, setFees] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('Select speciality')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    const { backendUrl, aToken } = useContext(AdminContext)

    const onSubmitHandler = async(event) => {
      event.preventDefault()

      try {

        if(!therImg) {
          return toast.error('Image Not Selected')
        }
        const formData = new FormData()

        formData.append('image' , therImg)
        formData.append('name' , name)
        formData.append('email' , email)
        formData.append('password' , password)
        formData.append('experience' , experience)
        formData.append('fees' , Number(fees))
        formData.append('about' , about)
        formData.append('speciality' , speciality)
        formData.append('degree' , degree)
        formData.append('address' , JSON.stringify({line1:address1,line2:address2}))

        // console.log(...formData)
        formData.forEach((value,key) => {
          console.log(`${key}: ${value}`);
        })

        const {data} = await axios.post(backendUrl + `/api/admin/add-therapist`, formData, {headers: {aToken}})

        if(data.success) {
          toast.success(data.message)
          setTherImg(false)
          setName('')
          setEmail('')
          setPassword('')
          setAddress1('')
          setAddress2('')
          setFees('')
          setAbout('')
          setDegree('')

        } else {
          toast.error(data.message)
        }

      } catch (error) {
        toast.error(error.message)
        console.log(error);

      }
    }


  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>
      <p className='mb-3 text-lg font-medium'>Add Therapist</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={therImg ? URL.createObjectURL(therImg) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setTherImg(e.target.files[0])} type='file' id='doc-img' hidden />
          <p>Upload therapist <br /> picture</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Therapist Name</p>
              <input onChange={(e)=> setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Enter your name' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Therapist Email</p>
              <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border rounded px-3 py-2'  type="email" placeholder='Enter your email' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Therapist Password</p>
              <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border rounded px-3 py-2'  type="password" placeholder='Password' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Experience</p>
              <select onChange={(e) => setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2' name="" id="experience">
                <option value="">Select experience</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="6 Years">6 Years</option>
                <option value="7 Years">7 Years</option>
                <option value="8 Years">8 Years</option>
                <option value="9 Years">9 Years</option>
                <option value="10 Years">10 Years</option>
                <option value="11 Years">11 Years</option>
                <option value="12 Years">12 Years</option>
                <option value="13 Years">13 Years</option>
                <option value="14 Years">14 Years</option>
                <option value="15+ Years">15+ Years</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <input onChange={(e)=> setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='Enter your fees' required />
            </div>

          </div>

          <div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Speciality</p>
              <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2' name="" id="speciality">
                <option value="">Select speciality</option>
                <option value="Psychoanalysis">Psychoanalysis</option>
                <option value="Gestalt Therapy">Gestalt Therapy</option>
                <option value="Cognitive Behavioral Therapy (CBT)">Cognitive Behavioral Therapy (CBT)</option>
                <option value="Family Therapy">Family Therapy</option>
                <option value="Psychotherapy">Psychotherapy</option>
                <option value="Art Therapy">Art Therapy</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Education</p>
              <input onChange={(e)=> setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='Education' required />
            </div>


            <div className='flex-1 flex flex-col gap-1'>
              <p>Address</p>
              <input onChange={(e)=> setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='address 1' />
              <input onChange={(e)=> setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='address 2' />
            </div>

          </div>
        </div>


        <div>
          <p className='mt-4 mb-2'>About Therapist</p>
          <textarea onChange={(e)=> setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' type="text" placeholder='Write about therapist' rows={5} required />
        </div>

        <button type ='submit' className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add therapist</button>
      </div>
    </form>
  )
}

export default AddTherapist