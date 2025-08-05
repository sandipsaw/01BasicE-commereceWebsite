import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-10 pt-3'>
        <NavLink className={(e)=>e.isActive ? "text-pink-400 font-semibold ":""} to='/'>Home</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-pink-400 font-semibold":""} to='/product'>Product</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-pink-400 font-semibold":""} to='/service'>Service</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-pink-400 font-semibold":""} to='/about'>About</NavLink>
        
    </div>
  )
}

export default Nav