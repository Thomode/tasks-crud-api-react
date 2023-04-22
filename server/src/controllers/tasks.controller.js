import { Task } from "../models/Task.js"

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll()
        return res.json(tasks)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getTask = async (req, res) => {
    try {
        const { id } = req.params

        const task = await Task.findOne({
            where: {
                id
            }
        })

        return res.json(task)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createTask = async (req, res) => {
    try {
        const { title, description, done } = req.body

        const result = await Task.create({
            title,
            description,
            done
        })

        return res.json(result)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, done } = req.body

        const task = await Task.findOne({
            where: { id }
        })

        task.set({
            title,
            description,
            done
        })

        await task.save()

        return res.json(task)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params

        await Task.destroy({
            where: { id }
        })

        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}