import jwt from 'jsonwebtoken'

//therapist authentication middleware
const authTherapist = async (req,res,next) => {
    try {

        const {ttoken} = req.headers
        if (!ttoken) {
            return res.json({ success: false, message: "Not Authorized Login Again" })
        }
    const token_decode = jwt.verify(ttoken, process.env.JWT_SECRET)

    if (!req.body) req.body = {}
    req.body.therId = token_decode.id 

        next()

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
    }

    export default authTherapist 