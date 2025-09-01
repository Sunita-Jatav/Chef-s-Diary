import React from 'react'
import Home from '../Pages/Home'
import Recipes from '../Pages/Recipes'
import About from '../Pages/About'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import CreateRecipe from '../Pages/CreateRecipe'
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/recipes' element={<Recipes/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/create-recipe' element={<CreateRecipe/>}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
