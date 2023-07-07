import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../components/pages/Homepage'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
            </Routes>
        </>
    )
}

export default Routing