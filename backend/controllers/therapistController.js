import therapistModel from "../models/therapistModel.js";
import bcrypt from 'bcrypt' 
import jwt from 'jsonwebtoken' 
import appointmentModel from "../models/appointmentModel.js";

const changeAvailability = async (req, res) => {
    try {
       
        const {therId} = req.body

        const therData = await therapistModel.findById(therId)
        await therapistModel.findByIdAndUpdate(therId, {available:!therData.available})
        res.json({success:true, message:'Availability Changed'})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const therapistList = async (req, res) => {
    try {
        const therapists = await therapistModel.find({}).select(['-password', '-email'])   
        
        res.json({success:true, therapists})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API for therapist Login
const loginTherapist = async (req, res) => {
    try {
        
      const { email, password } = req.body
      const therapist = await therapistModel.findOne({email})

      if (!therapist) {
        return res.json({success:false,message:'Invalid Credentials'})
      }

      const isMatch = await bcrypt.compare(password, therapist.password ) 
       
      if (isMatch) {

        const token = jwt.sign({id:therapist._id}, process.env.JWT_SECRET)
        res.json({success:true,token})  

      } else {
        res.json({success:false,message:'Invalid Credentials'})
      }

    } catch (error) {
      console.log(error)
      res.json({success:false, message:error.message})  
    }
}

// API to get therapist appointments for therapist panel
const appointmentsTherapist = async (req, res) => {
  try {
  
    const { therId } = req.body 
    const appointments = await appointmentModel.find({ therId })

    res.json({success:true, appointments})

  } catch (error) {
      console.log(error)
      res.json({success:false, message:error.message})  
  }
}

export { changeAvailability, therapistList, loginTherapist, appointmentsTherapist }