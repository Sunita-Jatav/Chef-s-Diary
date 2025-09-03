import React, { createContext, useState } from 'react'

export const recipecontext = createContext(null)
const RecipeContext = (props) => {
  const [data,setData] = useState([]);  
  const [userdata,setUserData] = useState([])
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
      <recipecontext.Provider value={{data,setData,userdata,setUserData,currentUser,setCurrentUser}}>
       {props.children}
      </recipecontext.Provider>
    </>
  )
}

export default RecipeContext
