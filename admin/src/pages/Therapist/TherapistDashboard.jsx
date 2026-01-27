import react from "react";

const TherapistDashboard = () => {
    const {dashData, setDashData, getDashData} = useContext(TherapistContext)

    useEffect(()=> {
        if(tToken) {
            getDashData()
        }
    
    },[tToken])

    return dashData && (
        <div>

        </div>
    )
}

export default TherapistDashboard;