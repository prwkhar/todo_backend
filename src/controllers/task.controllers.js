import { Task } from "../model/task.model.js";
import { asyncHandler } from "../utils/asynchandler.js";

const gettask=asyncHandler(async(req,res)=>{
    const tasks=await Task.find();
    res.json({message:"task fetched successfully",tasks});
});

const addtask=asyncHandler(async(req,res)=>{
    const {title,description}=req.body;
    await Task.create({title,description,completed:false});
    res.json({message:"data recieved successfully",title,description});
});

export {gettask,addtask};