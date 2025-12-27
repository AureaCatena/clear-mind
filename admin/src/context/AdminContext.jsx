import axios from "axios";
//import { get } from "mongoose";
import { createContext, useState } from "react";
import {toast} from 'react-toastify'



export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [aToken,setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const [therapists,setTherapists] = useState([])
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllTherapists = async () => {

        try {

            const {data} = await axios.post(backendUrl + '/api/admin/all-therapists', {}, {headers:{aToken}}) 
            if(data.success){
                setTherapists(data.therapists)
                console.log(data.therapists)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }

    }

    const changeAvailability = async (therId) => {
        try {

            const {data} = await axios.post(backendUrl + '/api/admin/change-availability', {therId}, {headers:{aToken}})
            if(data.success){
                toast.success(data.message)
                getAllTherapists()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getAllAppointments = async () => {

        try {
            const {data} = await axios.get(backendUrl + '/api/admin/all-appointments', {headers:{aToken}})

            if (data.success) { 
                setAppointments(data.appointments)
                console.log(data.appointments)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }

    }

    const cancelAppointment = async (appointmentId) => {
        try {
            const {data} = await axios.post(backendUrl + '/api/admin/cancel-appointment', {appointmentId}, {headers:{aToken}})
            if (data.success) {
                toast.success(data.message)
                getAllAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)        
        }   
    }
    
    const getDashData = async () => {
        try {
            
           const {data} = await axios.get(backendUrl + '/api/admin/dashboard', {headers:{aToken}})

           if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
           } else {
                toast.error(data.message)
           }

        } catch (error) {
           toast.error(error.message)  
        }
    }

    const value = {
        aToken,setAToken,
        backendUrl, therapists,
        getAllTherapists, changeAvailability,
        appointments, setAppointments,
        getAllAppointments,
        cancelAppointment,
        dashData, getDashData
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>

    )
}

export default AdminContextProvider