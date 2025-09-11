import express from "express";
const routes = express.Router();
import { 
    getAllTasks,
    // getTaskById,
    createTask,
    // putTaskById,
    // patchTaskById,
    // deleteTaskById
    } from '../Controllers/TaskController.js';


routes.get('/tasks', getAllTasks)
routes.post('/tasks', createTask)
// routes.get('/tasks/:id', getTaskById)
// routes.put('/tasks/:id', putTaskById)
// routes.patch('/tasks/:id', patchTaskById)
// routes.delete('/tasks/:id', deleteTaskById)



export default routes;