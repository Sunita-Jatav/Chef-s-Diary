import React from 'react'
import Home from '../Pages/Home'
import Recipes from '../Pages/Recipes'
import About from '../Pages/About'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import CreateRecipe from '../Pages/CreateRecipe'
import SingleRecipe from '../Pages/SingleRecipe'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import PageNotFound from '../Pages/PageNotFound'
import Favourites from '../Pages/Favourites'
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/recipes' element={<Recipes/>}></Route>
        <Route path='/recipes/details/:id' element={<SingleRecipe/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/create-recipe' element={<CreateRecipe/>}></Route>
        <Route path='/fav' element={<Favourites/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
