import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full h-20  flex px-15 py-5 items-center justify-between'>
      <h1>Chef's Diary</h1>
      <div className='flex gap-10 justify-start'>
        <NavLink className={(e)=> e.isActive ? "text-red-500" :""} to='/'>Home</NavLink>
      <NavLink className={(e)=> e.isActive ? "text-red-500" :""} to='/recipes'>Recipes</NavLink>
      <NavLink className={(e)=> e.isActive ? "text-red-500" :""} to='/create-recipe'>Create Recipe</NavLink>
      <NavLink className={(e)=> e.isActive ?"text-red-500" :""} to='/about'>About</NavLink>
      <NavLink className={(e)=> e.isActive ?"text-red-500" :""} to='/sign-in'>SignIn</NavLink>
      <NavLink className={(e)=> e.isActive ?"text-red-500" :""} to='/sign-up'>SignUp</NavLink> </div>
    </div>
  )
}

export default Navbar
