import mongoose from "mongoose";
import { Schema } from "mongoose";

const taskschema = new Schema({
    // title: Brief description of the task.
    // ○ description: (Optional) Detailed information about the task.
    // ○ completed: Boolean flag indicating task status.
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    completed:{
        type:Boolean,
    }
},{
    timestamps:true
})



export const Task = mongoose.model("Task",taskschema);
