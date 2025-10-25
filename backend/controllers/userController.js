import validator from 'validator';
import bcrypt from 'bcrypt';
import usertModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';




// API to register user
const registerUser = async (req,res) => {
    try {

        const { name, email, password } = req.body

        if(!name || !email || !password) {
            return res.json({success: false, message: "Missing details"})
        }

        //validating email format

        if(!validator.isEmail(email)) {
            return res.json({success: false, message: "Enter a valid email"})

        }

        //validating password length

        if(password.length < 8) {
            return res.json({success: false, message: "Password must be at least 8 characters long"})  
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password : hashedPassword
        }

        const newUser = new usertModel(userData)
        const user = await newUser.save()

        const token = jwt.sign ({id:user._id}, process.env.JWT_SECRET )

        res.json({success:true,token})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})

    }
}

//API for userLogin

const loginUser = async (req,res) => {
    try {

        const { email, password } = req.body
        const user = await usertModel.findOne({email})

        if(!user) {
            return res.json({success:false, message:"User not found"})
        }
        
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign ({id:user._id}, process.env.JWT_SECRET )
            res.json({success:true, token})
        } else {
            res.json({success:false, message:"Invalid credentials"})
        }

    } catch (error) { 
        console.log(error)
        res.json({success:false, message:error.message})  
    }
}

//API to get user profile data
const getProfile = async (req,res) => {
    try {

        const { userId } = req.body
        const user = await usertModel.findById(userId).select('-password')
        res.json({success:true, userData})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})  
    }
}

export { registerUser, loginUser, getProfile }