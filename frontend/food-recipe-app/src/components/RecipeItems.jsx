import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import food from "../assets/food.jpg";
import { FaHeart } from "react-icons/fa";
import { PiTimerFill } from "react-icons/pi";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";



export default function RecipeItems() {
    const allRecipes=useLoaderData()
    const [alRecipes, setAlRecipes] = React.useState();
    let path=window.location.pathname==="/myRecipe"?true:false
    let favItem=JSON.parse(localStorage.getItem("fav")) ?? []
    const [isFav, setIsFav] = useState(false)
    useEffect(()=>{
        setAlRecipes(allRecipes)
    },[allRecipes])

const onDelete = async(id) => {
    await axios.delete(`http://localhost:5000/recipes/${id}`)
    .then((res)=>console.log(res)),
    setAlRecipes(allRecipes=>allRecipes.filter(recipe=>recipe._id!==id))
let filterItem =favItem.filter(recipe=>recipe._id!== id)
 localStorage.setItem("fav",JSON.stringify(filterItem))

}

const favRecipe = (item) => {
    let filterItem=favItem.filter(recipe=>recipe._id!==item._id)
    favItem=favItem.filter(recipe=>recipe._id===item._id).length===0 ? [...favItem,item] : filterItem
    localStorage.setItem("fav",JSON.stringify(favItem))
    setIsFav(pre=>!pre)

}
    return (
        <>
        <div className="card-container">
            {      
                   allRecipes?.map((item,index) => {
                    return(
                        <div key={index} className="card">
                            <img src={`http://localhost:5000/images/${item.coverImage}`} width="200px" height="150px"/>
                            <div className="card-body">
                                <div className="title">{item.title}</div>
                                <div className="icons">
                                    <div className="timer"><PiTimerFill />{item.time}</div>
                                   {(!path)? <FaHeart onClick={()=>favRecipe(item)}
                                    style={{color:(favItem.some(res=>res._id===item._id)) ? "red":""}}/>:
                                    <div className="action">
                                      <Link to={`/editRecipe/${item._id}`} className="editIcon"><MdEdit /></Link>  
                                    <MdDelete onClick={()=>onDelete(item._id)} className="deleteIcon"/>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    )  })
        }
        </div>
        </>
    );
}
          