import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../components/Home'
import Product from '../components/Product'
import Service from '../components/Service'
import About from '../components/About'
import Productdetail from '../components/Productdetail'

const Mainroutes = () => {
  return (
    <div>
        <Routes >
        <Route  path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/detail/:name' element={<Productdetail />} />
      </Routes>
    </div>
  )
}

export default Mainroutes