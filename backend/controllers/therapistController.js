import therapistModel from "../models/therapistModel.js";

const changeAvailability = async (req, res) => {
    try {
       
        const {therId} = req.body

        const therData = await therapistModel.findById(therId)
        await therapistModel.findByIdAndUpdate(therId, {available:!therData.available})
        res.json({success:true, message:'Availability Changed'})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const therapistList = async (req, res) => {
    try {
        const therapists = await therapistModel.find({}).select(['-password', '-email'])   
        
        res.json({success:true, therapists})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export { changeAvailability, therapistList }