import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext}  from '../Context/RecipeContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import UpdateDelete from '../Components/UpdateDelete'


const SingleRecipe = () => {
  
 const {data,setData,userdata,currentUser} = useContext(recipecontext)
  const navigate = useNavigate();

  const params = useParams();

  const recipe = data.find((recipe) =>{
    return params.id == recipe.id
  })
  // console.log(currentUser.id)
  // console.log(recipe.userId)
  
  return recipe? <div className='p-5 h-full bg-[#0D0D0D] flex-col'>
    <i className="ri-arrow-left-line text-2xl  hover:text-blue-500" onClick={()=>navigate('/recipes')}></i>
    <div className='left  w-full flex items-center justify-between'>
     <div className='w-1/2 text-center'> <h1 className='text-5xl tracking-tight mb-2'>{recipe.title}</h1>
      <h2 className='text-lg text-orange-500'>Category : {recipe.category}</h2>
      <h2 className='text-xl text-yellow-300 '>Chef's Name : {recipe.chefName}</h2>
    <img className=' mt-3 w-130 h-100 object-cover mx-auto rounded mb-5' src={recipe.imageUrl} alt="" /></div>
    <div className='w-1/2'><li className='text-xl mb-3'>Ingredients : {recipe.ingredients}</li>
    <li  className='text-xl mb-3'>Description : {recipe.description}</li>
    <li  className='text-xl mb-3'>Instructions : {recipe.steps}</li>
     <li  className='text-xl'>Chef's Story : {recipe.story}</li></div>
    </div>
    {currentUser && currentUser.id === recipe.userId && (
      <UpdateDelete recipe={recipe}/>
    )}
  </div> :<div className='p-15'>"Loading..."</div>;
}

export default SingleRecipe
