import { createContext } from "react";
import { therapists } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props)=>{

    const value = {
        therapists
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>

    )


}

export default AppContextProvider