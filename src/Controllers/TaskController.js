import {
    create,
    findAll,
    // findById,
    // update,
    // deleteTaskById
} from '../Services/TaskService.js'




export async function getAllTasks(req, res) {
    try {
        const tasks = await findAll();
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar tarefas", error: error.message})
    }
}

export async function createTask(req, res) {
    try {
        if (!req.body.title) {
            return res.status(400).json({ message: "O Título é Obrigatório!"})
        }
        const task = await create(req.body);
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar tarefa", error: error.message })
    }

}
// export async function getTaskById(req, res) {

// }

// export async function putTaskById(req, res) {

// }

// export async function patchTaskById(req, res) {

// }

// export async function deleteTaskById(req, res) {

// }