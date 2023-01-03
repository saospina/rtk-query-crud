import { useGetTasksQuery, useDeleteTaskMutation, useUpdateTaskMutation } from "../api/apiSlice"

const TasksList = () => {

  const { data: tasks, isError, isLoading, error } = useGetTasksQuery()
  const [updateTask] = useUpdateTaskMutation()
  const [deleteTask] = useDeleteTaskMutation()

  const handleUpdateTask = (e, task) => {
    updateTask({
      ...task,
      completed: e.target.checked
    })
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <input type="checkbox" id={task.id} checked={task.completed} onChange={(e) => handleUpdateTask(e, task)} />
          <label htmlFor={task.id}>Completed</label>
        </li>
      ))}
    </ul>
  )
}

export default TasksList