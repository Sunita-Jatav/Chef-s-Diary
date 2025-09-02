import React, { useContext } from 'react'
import { recipecontext } from '../Context/RecipeContext'
import RecipeCard from '../Components/RecipeCard'

const Recipes = () => {

  const {data} = useContext(recipecontext)

  const renderRecipe = data.map((recipe)=>{
     return <RecipeCard key={recipe.id} recipe={recipe}/>
  })
  return (
    <div className=' px-15 py-5 bg-[#0D0D0D] flex flex-wrap'>
      {data.length > 0 ? renderRecipe : (
    <h2 className="text-red-600">No recipe available</h2>
  )}
    </div>
  )
}

export default Recipes
