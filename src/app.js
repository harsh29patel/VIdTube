import express from 'express'
import cors from "cors"

const app = express()

app.use(
    cors({                  //CORS Middleware
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)  

app.use(express.json({limit:"16kb"}))   // express Middleware
app.use(express.urlencoded({extended:true , limit:"16kb"})) // urlencoded because in url when space is there it represents %20 
app.use(express.static("public")) // in public folder any image or anything to be served i go to static.folder

// import route

import healtcheckRouter from "./routes/healthcheck.route.js"

//routes

app.use("/api/v1/healthcheck" , healtcheckRouter)

export {app} 