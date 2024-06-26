import {apiResponse} from "../utils/apiresponse.js"
import {asyncHandler} from "../utils/asynchandler.js"

const healthCheck = asyncHandler(async(req , res)=>{
    return res.status(200).json(
        new apiResponse(200 , "OK" , "Health check passes"))
})

export {healthCheck}