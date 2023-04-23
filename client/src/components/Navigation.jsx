import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <div className="flex justify-between py-3 mb-4">
            <Link to="/tasks">
                <h1 className="font-bold text-3xl">Tasks</h1>
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg">
                <Link to="/create-task">Create Task</Link>
            </button>
        </div>
    )
}