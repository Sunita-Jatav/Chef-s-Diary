import React, { useContext, useEffect, useState } from 'react'
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
  

const [fav, setFav] = useState(JSON.parse(localStorage.getItem("fav")) || []);

const favHandler = () => {
    const updatedFav = [...fav, recipe];
    setFav(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
  
};

const unFavHandler = () => {
  const updatedFav = fav.filter(f => f.id !== recipe?.id);
  setFav(updatedFav);
  localStorage.setItem("fav", JSON.stringify(updatedFav));
};


  return recipe? <div className='p-5 h-full bg-[#0D0D0D] flex-col'>
    <div className='flex items-center justify-between px-10'>
      <i className="ri-arrow-left-line text-3xl  hover:text-blue-500" onClick={()=>navigate('/recipes')}></i>
    <div className="favourite relative">
  {fav.find(f => f.id === recipe?.id) ? (
    <i
      onClick={unFavHandler}
      className="ri-heart-fill text-4xl text-pink-600 cursor-pointer"
    ></i>
  ) : (
    <i
      onClick={favHandler}
      className="ri-heart-line text-4xl text-pink-600 cursor-pointer"
    ></i>
  )}
</div>

    </div>
    <div className='left  w-full flex items-center justify-between'>
     <div className='w-1/2 text-center'> 
      <h1 className='text-5xl tracking-tight mb-2'>{recipe.title}</h1>
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
