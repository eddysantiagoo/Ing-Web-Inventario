import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Estado from '../components/estado/Estado'
import Inventario from '../components/inventario/Inventario'
import BarraNav from '../components/iu/BarraNav'
import Marca from '../components/marca/Marca'
import TipoEquipo from '../components/tipoequipo/TipoEquipo'

export default function MainRouter() {
  return (
    <BrowserRouter>
        <BarraNav />
        <Routes>
            <Route path='/' element={<Estado />}/>
            <Route path='/marcas' element={ <Marca />}/>
            <Route path='/tipoequipos' element={ <TipoEquipo />}/>
            <Route path='/inventarios' element={ <Inventario />}/>
        </Routes>
    </BrowserRouter>
  )
}
