import { FormEvent, useRef } from 'react'
import toast from 'react-hot-toast'

const UncontrolledForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (usernameRef.current && passwordRef.current) {
      const username = usernameRef.current.value
      const password = passwordRef.current.value

      if (!username || !password) {
        toast.error("Make sure fields are not empty")
      } else {
        console.log(username, password)
      }
    }
  }

  return (
    <div>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" ref={usernameRef}  />
        <input type="password" name="password" ref={passwordRef}  />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default UncontrolledForm