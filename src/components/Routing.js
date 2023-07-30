import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../components/pages/Homepage'
import Reservations from './pages/Reservations'
import About from './pages/About'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PageNotFound from './pages/PageNotFound'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/menu' element={<Menu />} />
                <Route exact path='/reservation' element={<Reservations />} />
                <Route exact path='/orderonline' element={<Order />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route exact path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Routing