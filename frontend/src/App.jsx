import { useState } from 'react'
import './App.css'
import Signin from './components/Signin'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Consent from './components/Consent'
import Home from './components/Home'
import Search from './components/Search'
import Addaccount from './components/Addaccount'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='/consent' element={<Consent/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/add-account' element={<Addaccount/>} />
        
      </Routes>
    </div>
  )
}

export default App
