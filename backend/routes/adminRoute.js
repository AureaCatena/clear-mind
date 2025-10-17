import express from 'express'
import { addTherapist , allTherapists, loginAdmin} from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/therapistController.js'

const adminRouter = express.Router()

adminRouter.post('/add-therapist',authAdmin,upload.single('image'), addTherapist)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-therapists', authAdmin, allTherapists)
adminRouter.post('/change-availability', authAdmin, changeAvailability)

export default adminRouter
