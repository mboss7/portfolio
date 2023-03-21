import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      </div>
      <h1>M4tt Portfolio</h1>
      <div className="card">
        <p>
           Welcome in my portfolio page ! 
        </p>
      </div>
      <p>
        Made with passion by M4tt 
      </p>
    </div>
  )
}

export default App
