import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import therapistModel from "../models/therapistModel.js"
import jwt from "jsonwebtoken"
import appointmentModel from "../models/appointmentModel.js"


// API for adding therapist
const addTherapist = async (req, res) => {
    try {

        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        // checking for all data to add therapist
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing Details" })
        }

        //validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // hashing therapist password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url

        const therapistData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newTherapist = new therapistModel(therapistData)
        await newTherapist.save()

        res.json({ success: true, message: "Therapist added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API for admin login

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({ success: true, token })

        } else {
            res.json({ success: false, message: "Invalid Credentials" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
       
}

// API to get all thersapists list for admin panel

const allTherapists = async (req,res) => {
    try {
        const therapists = await therapistModel.find({}).select('-password')
        res.json({success:true, therapists})
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get all appointments list
const appointmentAdmin = async (req,res) => {

    try {

        const appointments = await appointmentModel.find({})
        res.json({success:true, appointments})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// API to cancel appointments

const appointmentCancel = async (req, res) => {
  try {

    const {appointmentId} = req.body

    const appointmentData = await appointmentModel.findById(appointmentId)

    await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})

//releasing therapist slot

    const {therId, slotDate, slotTime} = appointmentData

    const therapistData = await therapistModel.findById(therId) 

    let slots_booked = therapistData.slots_booked

    slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime) 

    await therapistModel.findByIdAndUpdate(therId, {slots_booked})

    res.json({success: true, message: 'Appointment Cancelled'})

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

export { addTherapist , loginAdmin, allTherapists, appointmentAdmin, appointmentCancel}
