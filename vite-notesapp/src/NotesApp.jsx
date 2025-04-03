import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './NotesApp.css'
import Hello from './components/Hello'

function NotesApp() {
  const [count, setCount] = useState(0)

  return (
    <div className="NotesApp">

      {/* <Hello name = "Sarah"  age="56" msg = "Hello, your name is " courses={courses} grades={grades}/> */}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default NotesApp
