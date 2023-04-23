import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, getTask, updateTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'

export const TaskFormPage = () => {
    const { register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
        } else {
            await createTask(data)
        }

        navigate('/tasks')
    })

    const handleDeleteTask = async () => {
        const accept = window.confirm('Are you sure?')

        if (accept) {
            await deleteTask(params.id)
            navigate('/tasks')
        }
    }

    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const res = await getTask(params.id)

                setValue('title', res.data.title)
                setValue('description', res.data.description)
            }
        }
        loadTask()
    }, [])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    {...register('title', { required: true })}
                />
                {errors.title && <span>Title is required</span>}

                <textarea
                    placeholder="description"
                    {...register('description', { required: true })}
                ></textarea>
                {errors.description && <span>Description is required</span>}

                <button>Save</button>

                {params.id && <button onClick={handleDeleteTask}>Delete</button>}
            </form>
        </div >
    )
}