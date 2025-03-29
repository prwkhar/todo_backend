import express from 'express'
import {addtask , gettask, updatetask, deletetask, updatestatus} from "./controllers/task.controllers.js"
import cors from "cors"

const App = express();

// 🔑 Improved CORS Configuration
const corsOptions = {
    origin: "*", // Allow requests from ANY origin
    methods: "GET, POST, PUT, DELETE", // Allow common HTTP methods
    allowedHeaders: "Content-Type, Authorization", // Allow common headers
    optionsSuccessStatus: 200
}

App.use(cors(corsOptions))


App.use(express.json())
App.use(express.urlencoded({ extended: true }))

App.get("/", gettask);
App.post("/addtask", addtask);
App.put("/updatetask/:id", updatetask);
App.delete("/deletetask/:id", deletetask);
App.put("/updatestatus/:id", updatestatus);

export { App };
