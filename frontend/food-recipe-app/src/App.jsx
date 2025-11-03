import React from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainNavigation from "./components/MainNavigation.jsx";
import axios from "axios";
import AddRecipe from "./pages/AddRecipe.jsx";
import EditRecipe from "./pages/EditRecipe.jsx";
import { useEffect } from "react";
import Chatbot from "./pages/Chatbot.jsx";

const getallRecipes = async () => {
    let allRecipes = []
    await axios.get("http://localhost:5000/recipes").then((res) => {
        allRecipes = res.data;
    })
    return allRecipes;
  }

const getMyRecipes = async () => {
    let user = JSON.parse(localStorage.getItem("user"))
    let allRecipes=await getallRecipes()
    return allRecipes.filter(item=>item.createdBy===user._id)
}  

const getFavRecipes = () => {
  return JSON.parse(localStorage.getItem("fav")) 
}


const router = createBrowserRouter([
  {path:"/",element:<MainNavigation />,children:[
    {path:"/",element:<Home />,loader:getallRecipes},
    {path:"/myRecipe",element:<Home/>,loader:getMyRecipes},
    {path:"/favRecipe",element:<Home/>,loader:getFavRecipes},
    {path:"/addRecipe",element:<AddRecipe/>},
    {path:"/editRecipe/:id",element:<EditRecipe/>},
    {path:"/chatbot",element:<Chatbot/>}
  ]}
])
function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    
    </>
  );
}

export default App;