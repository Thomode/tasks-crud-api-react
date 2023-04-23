import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <div>
            <Link to="/tasks">
                <h1>Tasks</h1>
            </Link>
            <Link to="/create-task">Create Task</Link>
        </div>
    )
}