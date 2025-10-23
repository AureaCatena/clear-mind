import axios from "axios";
//import { get } from "mongoose";
import { createContext, useState } from "react";
import {toast} from 'react-toastify'


export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [aToken,setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const [therapists,setTherapists] = useState([])

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

    const value = {
        aToken,setAToken,
        backendUrl, therapists,
        getAllTherapists, changeAvailability

    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>

    )
}

export default AdminContextProvider