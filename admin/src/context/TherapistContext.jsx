import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const TherapistContext = createContext();

const TherapistContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [tToken, setTToken] = useState(localStorage.getItem('tToken')?localStorage.getItem('tToken'):'')
    const [appointments, setAppointments] = useState([])

    const getAppointments = async () => {
        try {
            
         const {data} = await axios.get(backendUrl + '/api/therapist/appointments', {headers: {tToken}})
         if(data.success) {
            setAppointments(data.appointments.reverse())
            console.log(data.appointments.reverse())

         } else {
            toast.error(data.message)
         }

        } catch (error) {
            console.log(error);
            toast.error(error.message) 
        }
    }

    const value = {
       tToken, setTToken,
       backendUrl,
       appointments, setAppointments,
       getAppointments 
    }

    return (
        <TherapistContext.Provider value={value}>
            {props.children}
        </TherapistContext.Provider>

    )
}

export default TherapistContextProvider