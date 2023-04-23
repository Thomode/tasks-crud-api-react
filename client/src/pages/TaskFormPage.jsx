import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, getTask, updateTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

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
            toast.success('Task updated', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            })

        } else {
            await createTask(data)
            toast.success('Task created', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            })
        }

        navigate('/tasks')
    })

    const handleDeleteTask = async () => {
        const accept = window.confirm('Are you sure?')

        if (accept) {
            await deleteTask(params.id)
            toast.success('Task deleted', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            })
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
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    type="text"
                    placeholder="title"
                    {...register('title', { required: true })}
                />
                {errors.title && <span>Title is required</span>}

                <textarea
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    placeholder="description"
                    {...register('description', { required: true })}
                ></textarea>
                {errors.description && <span>Description is required</span>}

                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
            </form>
            {params.id && (
                <div className="flex justify-end">
                    <button
                        className="bg-red-500 p-3 rounded-lg w-48 mt-3"
                        onClick={handleDeleteTask}>
                        Delete
                    </button>
                </div>
            )}
        </div >
    )
}