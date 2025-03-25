import dotenv from "dotenv" 
import connectDb from "./db/index.js";
import { App } from "./app.js";

dotenv.config({
    path: './env'
})

connectDb().then(()=>{
    App.listen(process.env.PORT||8000,()=>{
        console.log(`process is running at ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err);
})