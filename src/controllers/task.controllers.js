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

const updatetask=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const {title}=req.body;
    const task=await Task.findById(id);
    if(!task){
        res.json({message: "task not found"});
    }
    task.title=title||task.title;
    await task.save();
    res.json({message: "task updated successfully"});
})

export {gettask,addtask,updatetask};