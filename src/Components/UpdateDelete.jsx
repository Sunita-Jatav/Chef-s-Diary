import React, { useContext } from 'react'
import { recipecontext } from '../Context/RecipeContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateDelete = () => {

     const {data,setData,userdata,currentUser} = useContext(recipecontext)
      const navigate = useNavigate();
    
      const params = useParams();
    
      const recipe = data.find((recipe) =>{
        return params.id == recipe.id
      })

      const {
      register,
      handleSubmit,
      reset,
    } = useForm({defaultValues :{
      imageUrl : recipe?.imageUrl,
      title : recipe?.title,
      chefName : recipe?.chefName,
      category : recipe?.category,
      description : recipe?.description,
      ingredients : recipe?.ingredients,
      steps : recipe?.steps,
      story : recipe?.story
    }});
     
    const fav = JSON.parse(localStorage.getItem("fav")) ||[]

    const submitHandler = (recipe) => {
      // console.log(recipe)
      const index = data.findIndex((r)=> params.id == r.id)
      const copyData = [...data];
      copyData[index] = {...copyData[index],...recipe}
      setData(copyData)
      localStorage.setItem("recipes", JSON.stringify(copyData))
      reset(recipe)
      toast.success("recipe Updated Successfully!")
    };

  const deleteHandler = (id)=>{
      const filtered = data.filter((recipe) => recipe.id != params.id)
      setData(filtered)
      localStorage.setItem("recipes", JSON.stringify(filtered))

      const fav = JSON.parse(localStorage.getItem("fav")) || [];
      const filteredFav = fav.filter(
      (recipe) => (recipe.id) !== (params.id));
      localStorage.setItem("fav", JSON.stringify(filteredFav));

      toast.success("Recipe Deleted")
      navigate('/recipes')
   }

  return (
    <div className='right w-full p-10 font-medium text-xl '>
    <h1 className="text-4xl font-bold tracking-tighter text-red-700 mb-4">
  Edit or Delete Recipe
</h1>
       <form
        className="space-y-4 mx-auto font-thin text-lg "
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Image URL:</label>
          <input
            type="url"
            placeholder="Enter image URL"
            {...register("imageUrl")}
            className="w-full p-2 rounded border-b border-white outline-none"
          />
        </div>

        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Recipe Title:</label>
          <input
            type="text"
            placeholder="Recipe title"
            {...register("title")}
            className="w-full p-2 rounded border-b border-white outline-none"
          />
        </div>
        
        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Chef's Name:</label>
          <input
            type="text"
            placeholder="Name"
            {...register("chefName")}
            className="w-full p-2 rounded border-b border-white outline-none"
          />
        </div>

        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Category:</label>
          <select
            {...register("category")}
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
        </div>

        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Ingredients:</label>
          <input
            type="text"
            placeholder="Ingredients"
            {...register("ingredients")}
            className="w-full p-2 rounded border-b border-white outline-none"
          />
        </div>

        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Description:</label>
          <textarea
            placeholder="Description"
            {...register("description")}
            className="w-full p-2 rounded border-b border-white outline-none"
          ></textarea>
        </div>

        <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Steps:</label>
          <textarea
            placeholder="Steps to follow"
            {...register("steps")}
            className="w-full p-2 rounded border-b border-white outline-none"
          ></textarea>
        </div>

         <div className="bg-[#0D0D0D] px-6 py-2 rounded">
          <label className="block mb-1 font-semibold">Chef's Story:</label>
          <textarea
            placeholder="Story"
            {...register("story")}
            className="w-full p-2 rounded border-b border-white outline-none"
          ></textarea>
        </div>

        <button type='submit' className='ml-20 mr-10 bg-blue-950 px-5 py-2 rounded text-xl font-thin hover:scale-95'>Update Recipe</button>
        <button onClick={()=>deleteHandler(recipe.id)} className=' bg-red-900 px-5 py-2 rounded text-xl font-thin hover:scale-95'>Delete Recipe</button>  
        </form>
       
       
    </div>
  )
}

export default UpdateDelete
