import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Admin from '../pages/admin/Admin'
import Notfound from '../pages/notfound/Notfound'
import Basket from '../pages/basket/Basket'
import Detailpage from '../pages/detailPage/Detailpage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/detail' element={<Detailpage />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
