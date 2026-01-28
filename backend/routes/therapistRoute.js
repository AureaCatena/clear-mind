import express from 'express'; 
import { therapistList, loginTherapist, appointmentsTherapist, appointmentCompleted, appointmentCancel, therapistDashboard } from '../controllers/therapistController.js';
import authTherapist from '../middlewares/authTherapist.js';

const therapistRouter = express.Router()

therapistRouter.get('/list', therapistList) 
therapistRouter.post('/login', loginTherapist)  
therapistRouter.get('/appointments', authTherapist, appointmentsTherapist)
therapistRouter.post('/complete-appointment', authTherapist, appointmentCompleted)
therapistRouter.post('/cancel-appointment', authTherapist, appointmentCancel)
therapistRouter.get('/dashboard', authTherapist, therapistDashboard)
export default therapistRouter  