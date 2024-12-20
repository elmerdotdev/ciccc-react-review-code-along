import { ChangeEvent, FormEvent, useState } from "react"
import TodoForm from "./TodoForm"
import { Todo } from "../../types/todo.types"
import TodoItem from "./TodoItem"
import toast from "react-hot-toast"

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [formData, setFormData] = useState<Omit<Todo, 'id'>>({
    title: "",
    description: "",
    completed: false
  })
  const [editingId, setEditingId] = useState<number>(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (editingId) {
      // if editing
      setTodos(prev => (
        prev.map(todo => (
          todo.id === editingId ? { ...todo, ...formData } : todo
        ))
      ))
      setEditingId(0)
    } else {
      // if adding
      setTodos(prev => ([
        ...prev,
        { id: prev.length + 1, ...formData }
      ]))
    }

    setFormData({
      title: "",
      description: "",
      completed: false
    })

    toast.success('Todo saved!')
  }

  const handleToggleComplete = (id: number) => {
    setTodos(prev => (
      prev.map(todo => (
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      ))
    ))
    toast.success("Todo updated")
  }

  const handleEdit = (id: number) => {
    const todo = todos.find(todo => todo.id === id)
    if (todo) {
      setFormData({
        title: todo.title,
        description: todo.description,
        completed: todo.completed
      })
      setEditingId(todo.id)
    }
  }

  const handleDelete = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
    toast.success("Todo deleted")
  }

  return (
    <div>
      <h2>My Todo App</h2>
      <TodoForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        editId={editingId}
      />
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onComplete={handleToggleComplete}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoApp