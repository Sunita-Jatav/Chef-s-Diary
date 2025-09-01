import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-gray-800 w-full h-[5rem] text-white flex px-15 py-4 items-center justify-between'>
      <h1>Chef's Diary</h1>
      <div className='flex gap-20 justify-start'>
        <NavLink className={(e)=> e.isActive && "text-red-500"} to='/'>Home</NavLink>
      <NavLink className={(e)=> e.isActive && "text-red-500"} to='/recipes'>Recipes</NavLink>
      <NavLink className={(e)=> e.isActive && "text-red-500"} to='/create-recipe'>Create Recipe</NavLink>
      <NavLink className={(e)=> e.isActive && "text-red-500"} to='/about'>About</NavLink></div>
    </div>
  )
}

export default Navbar
