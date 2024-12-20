import { Todo } from "../../types/todo.types"

type Props = {
  todo: Todo,
  onDelete: (id: number) => void,
  onComplete: (id: number) => void,
  onEdit: (id: number) => void
}

const TodoItem = ({ todo, onDelete, onComplete, onEdit }: Props) => {
  return (
    <div>
      <p>{todo.title} - {todo.description} - <label htmlFor="">{todo.completed ? "Completed" : "Not Completed"} 
        <input type="checkbox" checked={todo.completed} onChange={() => onComplete(todo.id)} /></label>
      </p>
      <button onClick={() => onEdit(todo.id)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem