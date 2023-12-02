const Task = require('../model/taskmodel')

const createTask= async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json(task)
       
      }catch (error){
        res.status(500).json({msg:error.message})
      }
}

const getTasks= async (req,res)=>{
    try {
        const tasks= await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const getTask = async(req,res)=>{
    try {
        const {id}= req.params
        const task= await Task.findById(id)
        if(!task){
            return res.status(400).json(`no task with id ${id} is found`)
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const deleteTask = async(req,res)=>{
    try {
        const {id}= req.params;
        const task= await Task.findByIdAndDelete(id)
        if(!task){
            res.status(404).json({"id":"not found"})
        }
        res.status(200).send("Task Deleted")
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const updateTask=async (req,res)=>{
    try {
        const {id}=req.params;
        const task= await Task.findByIdAndUpdate({_id:id},req.body,{new : true})
        if(!task){
            res.status(404).send("No task to update")
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({msg:error.message})
    }
}


module.exports = {createTask,getTasks,getTask,deleteTask,updateTask}