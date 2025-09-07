import React, { useContext, useEffect } from "react";
import { recipecontext } from "../Context/RecipeContext";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateRecipe = () => {
  const { data, setData , currentUser , setCurrentUser} = useContext(recipecontext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      toast.error("Please sign in first to create your recipe!");
      navigate("/sign-in");
    }
  }, [currentUser, navigate]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    recipe.userId = currentUser.id;
    // setData([...data, recipe]);
    const copyData = [...data]
    copyData.push(recipe)
    setData(copyData)
    localStorage.setItem("recipes", JSON.stringify(copyData))
    toast.success("Recipe Created Successfully")
    reset();
    navigate('/recipes')
  };
  // console.log(data)

  return (
    <div className="w-full  bg-[#0D0D0D] text-white p-10 ">
  
      <form
        className="space-y-4 max-w-lg mx-auto font-medium text-lg "
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="px-6 py-2">
          <label className="block mb-1 font-semibold">Image URL:</label>
          <input
            type="url"
            placeholder="Enter image URL"
            {...register("imageUrl", { required: true })}
            className="w-full p-2 border-b border-white outline-none"
          />
          {errors.imageUrl && (
            <span className="text-red-500 text-sm">Image URL is required</span>
          )}
        </div>

        <div className="px-6 py-2 ">
          <label className="block mb-1 font-semibold">Recipe Title:</label>
          <input
            type="text"
            placeholder="Recipe title"
            {...register("title", { required: true })}
            className="w-full p-2 border-b border-white outline-none"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">Title is required</span>
          )}
        </div>

        <div className="px-6 py-2">
          <label className="block mb-1 font-semibold">Chef's Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            {...register("chefName", { required: true })}
            className="w-full p-2 border-b border-white outline-none"
          />
          {errors.chefName && (
            <span className="text-red-500 text-sm">Name is required</span>
          )}
        </div>

        <div className=" px-6 py-2">
          <label className="block mb-1 font-semibold">Category:</label>
          <select
            {...register("category", { required: true })}
            className="w-full p-2 border-b border-white bg-[#0D0D0D] outline-none"
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

        <div className=" px-6 py-2 ">
          <label className="block mb-1 font-semibold">Ingredients:</label>
          <input
            type="text"
            placeholder="Ingredients"
            {...register("ingredients", { required: true })}
            className="w-full p-2 border-b border-white outline-none"
          />
          {errors.ingredients && (
            <span className="text-red-500 text-sm">Ingredients are required</span>
          )}
        </div>

        <div className=" px-6 py-2 ">
          <label className="block mb-1 font-semibold">Description:</label>
          <textarea
            placeholder="Description"
            {...register("description", { required: true })}
            className="w-full p-2 border-b border-white outline-none"
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">Description is required</span>
          )}
        </div>

        <div className=" px-6 py-2 ">
          <label className="block mb-1 font-semibold">Steps:</label>
          <textarea
            placeholder="Steps to follow"
            {...register("steps", { required: true })}
            className="w-full p-2 border-b border-white outline-none"
          ></textarea>
          {errors.steps && (
            <span className="text-red-500 text-sm">Steps are required</span>
          )}
        </div>

         <div className=" px-6 py-2 ">
          <label className="block mb-1 font-semibold">Share your recipe story:</label>
          <textarea
            placeholder="Personal story"
            {...register("story")}
            className="w-full p-2 border-b border-white outline-none"
          ></textarea>
        </div>

        <button className="bg-white text-black m-5 px-6 py-2 text-xl rounded w-full hover:bg-[#0D0D0D] hover:text-white hover:scale-95 duration-150 transition">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;

