import { useState } from "react"

type Todo = {
  id: number,
  text: string,
  completed: boolean
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Wash hands", completed: false },
    { id: 2, text: "Eat food", completed: false },
    { id: 3, text: "Walk around", completed: true }
  ])
  const [todoInput, setTodoInput] = useState<string>("")

  const handleAddTodo = () => {
    setTodos(prev => (
      [
        ...prev,
        { id: todos.length + 1, text: todoInput, completed: false }
      ]
    ))
  }

  const handleUpdateTodo = (id: number) => {
    setTodos(prev => (
      prev.map(todo => (
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ))
    ))
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(prev => (
      prev.filter(todoItem => todoItem.id !== id)
    ))

    // setTodos(prev => {
    //   const index = prev.findIndex(todo => todo.id === id)
    //   if (index !== -1) {
    //     const newArr = prev.splice(index, 1)
    //     return newArr
    //   }
    //   return prev
    // })
  }

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map(todoItem => (
          <li key={todoItem.id}>
            {todoItem.text} - {todoItem.completed ? "Completed" : "Not Completed"}
            <button onClick={() => handleUpdateTodo(todoItem.id)}>
              {todoItem.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => handleDeleteTodo(todoItem.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  )
}

export default Todos