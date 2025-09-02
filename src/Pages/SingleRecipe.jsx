import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext}  from '../Context/RecipeContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'


const SingleRecipe = () => {
  
 const {data,setData} = useContext(recipecontext)
  const navigate = useNavigate();

  const params = useParams();

  const recipe = data.find((recipe) =>{
    return params.id == recipe.id
  })
  
  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({defaultValues :{
      imageUrl : recipe.imageUrl,
      title : recipe.title,
      category : recipe.category,
      description : recipe.description,
      ingredients : recipe.ingredients,
      steps : recipe.steps
    }});
  
    const submitHandler = (recipe) => {
      // console.log(recipe)
      const index = data.findIndex((r)=> params.id == r.id)
      const copyData = [...data];
      copyData[index] = {...copyData[index],...recipe}
      setData(copyData)
      reset(recipe)
      toast.success("recipe Updated Successfully!")
    };
    // console.log(data)
  
   const deleteHandler = (id)=>{
      const filtered = data.filter((recipe) => recipe.id != params.id)
      setData(filtered)
      toast.success("Recipe Deleted")
      navigate('/recipes')
   }
  return recipe? <div className='p-5 h-full bg-[#0D0D0D] flex'>
    <div className='left  w-1/2 text-center'>
      <h1 className='text-5xl tracking-tight mb-1'>{recipe.title}</h1>
      <h2 className='text-lg'>Category : {recipe.category}</h2>
    <img className=' mt-3 w-150 h-90 object-cover mx-auto rounded mb-5' src={recipe.imageUrl} alt="" />
    <li className='text-xl mb-3'>Ingredients : {recipe.ingredients}</li>
    <li  className='text-xl mb-3'>Description : {recipe.description}</li>
    <li  className='text-xl'>Instructions : {recipe.steps}</li>
  
    </div>
    <div className='right w-1/2  font-medium text-xl p-2'>
    <h1 className="text-3xl font-thin text-center text-white mb-4">
  Edit or Delete Recipe
</h1>
       <form
        className="space-y-4 max-w-lg mx-auto font-thin text-lg "
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Image URL:</label>
          <input
            type="url"
            placeholder="Enter image URL"
            {...register("imageUrl", { required: true })}
            className="w-full p-2 rounded border-b border-white outline-none"
          />
          {errors.imageUrl && (
            <span className="text-red-500 text-sm">Image URL is required</span>
          )}
        </div>

        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Recipe Title:</label>
          <input
            type="text"
            placeholder="Recipe title"
            {...register("title", { required: true })}
            className="w-full p-2 rounded border-b border-white outline-none"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">Title is required</span>
          )}
        </div>

        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Category:</label>
          <select
            {...register("category", { required: true })}
            className="w-full p-2 rounded border-b border-white bg-[#0D0D0D] outline-none"
          >
            <option value="">-- Select Category --</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snacks">Snacks</option>
            <option value="desserts">Desserts</option>
            <option value="beverages">Beverages / Drinks</option>
            <option value="vegetarian">Vegetarian / Vegan</option>
            <option value="non-vegetarian">Non-Vegetarian (Chicken, Fish, Meat)</option>
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">Category is required</span>
          )}
        </div>

        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Ingredients:</label>
          <input
            type="text"
            placeholder="Ingredients"
            {...register("ingredients", { required: true })}
            className="w-full p-2 rounded border-b border-white outline-none"
          />
          {errors.ingredients && (
            <span className="text-red-500 text-sm">Ingredients are required</span>
          )}
        </div>

        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Description:</label>
          <textarea
            placeholder="Description"
            {...register("description", { required: true })}
            className="w-full p-2 rounded border-b border-white outline-none"
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">Description is required</span>
          )}
        </div>

        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Steps:</label>
          <textarea
            placeholder="Steps to follow"
            {...register("steps", { required: true })}
            className="w-full p-2 rounded border-b border-white outline-none"
          ></textarea>
          {errors.steps && (
            <span className="text-red-500 text-sm">Steps are required</span>
          )}
        </div>
        <button type='submit' className='ml-20 mr-10 bg-blue-950 px-5 py-2 rounded text-xl font-thin hover:scale-95'>Update Recipe</button>
        <button onClick={()=>deleteHandler(recipe.id)} className=' bg-red-900 px-5 py-2 rounded text-xl font-thin hover:scale-95'>Delete Recipe</button>  
        </form>
       
       
    </div>
  </div> :<div className='p-15'>"Loading..."</div>;
}

export default SingleRecipe
