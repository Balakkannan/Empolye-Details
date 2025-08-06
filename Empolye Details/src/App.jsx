import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Nav/Navbar'
import Createuser from './Crud/Createuser'
import Users from './Crud/Users'
import Edituser from './Crud/Edituser'

const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
       <Routes> 
            <Route element={<Createuser/>} path='/'></Route>
            <Route element={<Users/>} path='/users'></Route>
            <Route element={<Edituser/>} path='/edit/:id'></Route>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App