import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TodoApp from "./components/TodoApp/TodoApp"
import UncontrolledForm from "./components/TodoApp/UncontrolledForm"
import { Toaster } from "react-hot-toast"
// import Todos from "./components/Todos"

const App = () => {
  const [count, setCount] = useState<number>(0)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const pet = {
    animalType: "dog",
    name: "Emmanuel"
  }

  const menuItems = ["home", "about"]

  const handleClick = (message: string) => {
    alert(`Hello ${message}`)
  }

  const handleCount = () => {
    setCount(prev => prev + 1)
  }

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div style={{ backgroundColor: isDarkMode ? "black" : "gray" }}>
      <Header username="johnsmith" age={50} isAgeVisible={false} pet={pet} menu={menuItems} />
      <h1>Welcome to my site</h1>
      <h3>Theme: {isDarkMode ? "Dark" : "Light"}</h3>
      <button onClick={handleCount}>{count}</button>
      <button onClick={handleDarkMode}>Toggle Mode</button>

      <hr />
      {/* <Todos /> */}
      <TodoApp />
      <hr />
      <UncontrolledForm />

      <Footer onAlert={handleClick} />
      
      <Toaster />
    </div>
  )
}

export default App