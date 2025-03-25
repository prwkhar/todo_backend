import express from 'express'
import {addtask , gettask} from "./controllers/task.controllers.js"
import cors from "cors"
const App=express();

var corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
   
App.use(express.json())
App.use(express.urlencoded({extended: true}))
App.use(cors(corsOptions))

App.get("/",gettask);
App.post("/addtask",addtask);

export {App};