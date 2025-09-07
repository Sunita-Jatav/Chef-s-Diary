import React, { useState } from 'react'
import RecipeCard from '../Components/RecipeCard';

const Favourites = () => {

  const fav = JSON.parse(localStorage.getItem("fav")) ||[]
 
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = fav.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
   
  return (
    <div className="px-6 py-5 bg-[#0D0D0D] min-h-screen">
     
      <div className="mb-6 flex gap-5 justify-center">
        <i className="ri-search-line text-2xl"></i>
        <input
          type="text"
          placeholder="Search Favourite recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      
      <div className="p-2 flex flex-wrap justify-start gap-4">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <h2 className="text-red-500 text-lg font-semibold">
            Your favourites list is empty. Start adding some tasty recipes!
          </h2>
        )}
      </div>
    </div>
  );
}

export default Favourites
