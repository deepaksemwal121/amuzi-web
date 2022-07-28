import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Screens/AuthScreens/Login'
import Home from '../Screens/Home'

export const Nav = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}
