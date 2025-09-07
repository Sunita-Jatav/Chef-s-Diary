import React, { createContext, useEffect, useState } from 'react'

export const recipecontext = createContext(null)
const RecipeContext = (props) => {
  const [data,setData] = useState([]);  
  const [userdata,setUserData] = useState([])
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("recipes")) || [])
    setUserData(JSON.parse(localStorage.getItem("userdata")) || [])
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")) || [])
  },[])
  
  return (
    <>
      <recipecontext.Provider value={{data,setData,userdata,setUserData,currentUser,setCurrentUser}}>
       {props.children}
      </recipecontext.Provider>
    </>
  )
}

export default RecipeContext
