import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0)
  const shoot = () => {
    alert("Great Shot!");
  }

  return (  
   
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
       </Route>
      </Routes>
    </BrowserRouter>
     <div className="card">
        <p>
           Welcome in my portfolio page ! 
        </p>
      </div>
      <button onClick={shoot}>Take the shot!</button>
    </div>
    
  ) 

}

export default App 



