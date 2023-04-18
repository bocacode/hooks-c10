import { useState } from "react"

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <section>
      <h1>{(isLoggedIn) ? 'Welcome Back!' : 'Please Login...'}</h1>
      {(isLoggedIn)
        ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        : <button onClick={() => setIsLoggedIn(true)}>Login</button>
      }      
    </section>
  )
}
