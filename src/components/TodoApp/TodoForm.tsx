import { ChangeEvent, FormEvent } from "react"
import { Todo } from "../../types/todo.types"

type Props = {
  formData: Omit<Todo, 'id'>,
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  onSubmit: (e: FormEvent) => void,
  editId: number
}

const TodoForm = ({ formData, onChange, onSubmit, editId }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={onChange} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" value={formData.description} onChange={onChange}></textarea>
      </div>
      <div>
        <label htmlFor="completed">Completed</label>
        <input type="checkbox" name="completed" id="completed" checked={formData.completed} onChange={onChange} />
      </div>
      <div>
        <button type="submit">
          {editId ? "Save Changes" : "Add To Do"}
        </button>
      </div>
    </form>
  )
}

export default TodoForm