import express from 'express'; 
import { therapistList } from '../controllers/therapistController.js';

const therapistRouter = express.Router()

therapistRouter.get('/list', therapistList)  

export default therapistRouter  