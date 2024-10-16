import React from 'react'
import Home from "./components/pages/Home/Home"
import {BrowserRouter,Routes,Route} from'react-router-dom'
function App() {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter  >
      <Routes>
        <Route path="/" element={<Home/>}/> 
       
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
