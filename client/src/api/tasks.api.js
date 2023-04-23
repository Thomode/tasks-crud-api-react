import axios from "axios"

const tasksAPI = axios.create({
    baseURL: 'http://localhost:5000/tasks'
})

export const getAllTasks = () => tasksAPI.get()

export const getTask = (id) => tasksAPI.get(`/${id}`)

export const createTask = (task) => tasksAPI.post('/', task)

export const updateTask = (id, task) => tasksAPI.put(`/${id}`, task)

export const deleteTask = (id) => tasksAPI.delete(`/${id}`)