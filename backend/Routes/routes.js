const express = require('express');
const Task = require('../model/taskmodel');
const { createTask,getTasks,getTask,deleteTask,updateTask } = require('../controller/taskController');
const Router = express.Router();

  Router.route("/").get(getTasks).post(createTask)
  Router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)


module.exports = Router;