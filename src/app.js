import express from 'express'
import {addtask , gettask,updatetask,deletetask,updatestatus} from "./controllers/task.controllers.js"
import cors from "cors"
const App=express();

//cors configuration
var corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
   
//app configuration
App.use(express.json())
App.use(express.urlencoded({extended: true}))
App.use(cors(corsOptions))

//api endpoints with the functions
App.get("/",gettask);
App.post("/addtask",addtask);
App.put("/updatetask/:id",updatetask);
App.delete("/deletetask/:id",deletetask);
App.put("/updatestatus/:id",updatestatus);

export {App};