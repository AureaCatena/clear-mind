

// API for adding therapist
const addTherapist = async (req,res) => {
    try {

        const { name, email, password, image, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        console.log({name,email,password,image,speciality,degree,experience,about,fees,address},imageFile)
    } catch (error) {
    }
}

export {addTherapist}