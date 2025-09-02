import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
  const {id,imageUrl,title,category,description} = props.recipe
  
  return (
     <Link to={`/recipes/details/${id}`} className='w-55 h-80 mr-6 mb-6 bg-[#242424] overflow-hidden rounded hover:scale-105 duration-150'>
        <img  className='w-full h-35 object-cover' src={imageUrl}/>
         <h2 className='text-center mt-2 text-xl'>Title : {title}</h2>
         <h3 className='text-center -mt-2 text-lg'><small>Category : {category}</small></h3>
         <p className='p-3 -mt-2 text-sm'>{description.slice(0,100)}...{""} <small className='text-blue-700'>more</small></p>
     </Link>
  )
}

export default RecipeCard
