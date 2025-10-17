import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props)=>{

    const currencySymbol = '£'
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [therapists, setTherapists] = useState([])

    const value = {
        therapists, 
        currencySymbol
    }

    const getTherapistsData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/therapist/list')
            if(data.success){
                setTherapists(data.therapists)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        getTherapistsData()
    }, []) 

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>

    )


}

export default AppContextProvider
