import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/login"
import Home from "./components/home"
import Signup from "./components/signup"

function App(){
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App