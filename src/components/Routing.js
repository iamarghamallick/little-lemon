import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../components/pages/Homepage'
import Reservations from './pages/Reservations'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/reservation' element={<Reservations />} />
            </Routes>
        </>
    )
}

export default Routing