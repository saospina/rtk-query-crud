import { useCreateTaskMutation } from "../api/apiSlice"
import { useForm } from "../hooks/useForm"

const TaskForm = () => {
    const [createTask] = useCreateTaskMutation()

    const [formTaskValues, handleTaskInputChange] = useForm({
        name: '',
        description: '',
        completed: false
    })

    const { name, description, completed } = formTaskValues

    const handleCreateTask = (e) => {
        e.preventDefault()
        createTask(formTaskValues)
    }
    return (
        <form onSubmit={handleCreateTask}>
            <input type="text" name="name" placeholder="Name" value={name} onChange={handleTaskInputChange} />
            <input type="text" name="description" placeholder="Description" value={description} onChange={handleTaskInputChange} />
            <input type="checkbox" name="completed" value={completed} onChange={handleTaskInputChange} />
            <button>Add task</button>
        </form>
    )
}

export default TaskForm