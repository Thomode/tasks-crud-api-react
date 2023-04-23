import express from 'express'
import cors from 'cors'
import tasksRoutes from './routes/tasks.routes.js'


const app = express()

app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(tasksRoutes)

export default app

