import React ,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddRecipe() {
    const [recipeData, setRecipeData] = React.useState({})
    const navigate = useNavigate();
    const onHandleChange = (e) => {
       let value = (e.target.name == "ingredients")?e.target.value.split(","):  (e.target.name == "file")?e.target.files[0] : e.target.value;
       setRecipeData(pre=>({...pre, [e.target.name]:value}))
    }
    const onHandleSubmit = async(e) => {
        e.preventDefault();
        console.log(recipeData)
        axios.post("http://localhost:5000/recipes", recipeData,{
            headers:{
                'Content-Type':'multipart/form-data',
                'authorization':'bearer '+localStorage.getItem("token")
            }
        })
        .then(()=>navigate("/"))
    }

    return (
        <>
        <div className="container">
          <form className="form" onSubmit={onHandleSubmit}>
            <div className="form-control">
              <label>Recipe Title</label>
              <input type="text" placeholder="Enter recipe title" name="title" className="input" onChange={onHandleChange} required/>
              </div>
               <div className="form-control">
              <label>Time</label>
              <input type="text"  name="time" className="input" onChange={onHandleChange} />
              </div>
            <div className="form-control">
              <label>Ingredients</label>
                <textarea placeholder="Enter ingredients" name="ingredients" className="input-textarea" onChange={onHandleChange} rows="5"></textarea>
            </div>
            <div className="form-control">
              <label>Instructions</label>
                <textarea placeholder="Enter instructions" name="instructions" className="input-textarea" onChange={onHandleChange} rows="5"></textarea>
            </div>
            <div className="form-control">
              <label>Recipe Image</label>
              <input type="file"  name="file" className="input" onChange={onHandleChange} />
            </div>
            <button type="submit">Add Recipe</button>
          </form>
        </div>
        
         
        </>
    );
}