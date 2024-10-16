import React from 'react'
import Home from "./components/pages/Home/Home"
import Contact from './components/pages/Contact/Contact'
import About from './components/pages/about/About'
import Signup from './components/pages/login/Signup'
import Signin from './components/pages/login/Signin'
import {BrowserRouter,Routes,Route} from'react-router-dom'
import ManageAc from './components/ManageAc'
function App() {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter  >
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Contact" element={<Contact/>}/> 
        <Route path="/About" element={<About/>}/> 
        <Route path="/Signup" element={<Signup/>}/> 
        <Route path="/Signin" element={<Signin/>}/> 
        <Route path="/Manageaccount" element={<ManageAc/>}/> 
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
