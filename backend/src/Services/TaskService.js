// implementando Regras de Negócios.
import Task from "../Routes/Models/TaskModel.js";

export async function findAll() {
    return await Task.find();
}

export async function findById(id) {
    return await Task.findById(id);
}

export async function create(taskData) {
    const task = new Task(taskData);
    return await task.save();
}

export async function update(id, taskData) {
    await Task.findByIdAndUpdate(id, taskData)
    return await findById(id)

}


export async function deleteTask(id) {
    return await Task.findByIdAndDelete(id);
}