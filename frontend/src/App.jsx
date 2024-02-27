import { useState } from 'react'
import './App.css'
import Signin from './components/Signin'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Consent from './components/Consent'
import Home from './components/Home'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='/consent' element={<Consent/>} />
        <Route path='/home' element={<Home/>} />
        
      </Routes>
    </div>
  )
}

export default App
