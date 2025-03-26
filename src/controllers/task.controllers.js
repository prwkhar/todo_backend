import { Task } from "../model/task.model.js";
import { asyncHandler } from "../utils/asynchandler.js";

const gettask=asyncHandler(async(req,res)=>{
    const tasks=await Task.find({completed:false});
    const completed=await Task.find({completed: true});
    res.json({message:"task fetched successfully",tasks,completed});
});

const addtask=asyncHandler(async(req,res)=>{
    const {title,description,completed=false}=req.body;
    await Task.create({title,description,completed});
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

const deletetask=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    await Task.findByIdAndDelete(id);
    res.json({message: "task deleted successfully"});
})

const updatestatus=asyncHandler(async(req,res)=>{
    try {
        console.log("got the status update request");
        const {id}=req.params;
        const {completed}=req.body;
        console.log(completed);
        const task=await Task.findById(id);
        if(!task){
            return res.json({message:"no such task found to be updated"});
        }
        task.completed=completed;
        await task.save();
        return res.json({message:"status updated successfully"});
    } catch (error) {
        return res.json({message:"error updating request"},error);
    }
})

export {gettask,addtask,updatetask,deletetask,updatestatus};