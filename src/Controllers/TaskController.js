import {
    create,
    findAll,
    findById,
    update,
    deleteTask
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
export async function getTaskById(req, res) {
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: "O Id é obrigatório "})
        }
            const task = await findById(req.params.id);
            res.status(200).json(task)
    } catch (error) {
        res.status(500).json({message: "Id inexistente", error: error.message })
    }
}

export async function putTaskById(req, res) {
    try {
        if(!req.params.id) {
            return res.status(400).json({ message: "O Id é obrigatório "})
        }
        const task = await update(req.params.id, req.body);
        
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({message: "Task não reconhecida", error: error.message })
    }
}

export async function patchTaskById(req, res) {
try {
        if(!req.params.id) {
            return res.status(400).json({ message: "O Id é obrigatório "})
        }
        const task = await update(req.params.id, req.params.body);
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({message: "Task não reconhecida", error: error.message })
    }
}

export async function deleteTaskById(req, res) {
    try {
        if (!req.params.id) {
            res.status(400).json({message: "O Id é obrigatório"})
        }
        const taskAtt = await deleteTask(req.params.id)
        res.status(200).json({ message: "Task Deletada com sucesso!"})
    } catch (error) {
        res.status(500).json({ message: "Não foi Possível Deletar a Task, Verifique se os dados estão corretos. ", error: error.message })
    }
}