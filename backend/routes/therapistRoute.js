import express from 'express'; 
import { therapistList, loginTherapist, appointmentsTherapist } from '../controllers/therapistController.js';
import authTherapist from '../middlewares/authTherapist.js';

const therapistRouter = express.Router()

therapistRouter.get('/list', therapistList) 
therapistRouter.post('/login', loginTherapist)  
therapistRouter.get('/appointments', authTherapist, appointmentsTherapist)

export default therapistRouter  