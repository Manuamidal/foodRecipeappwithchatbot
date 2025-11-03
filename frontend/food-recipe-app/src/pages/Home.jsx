import React, { useState } from "react";
import food from "../assets/food.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipeItems from "../components/RecipeItems";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import InputForm from "../components/InputForm";
import { useEffect } from "react";
import { IoMdArrowDropupCircle } from "react-icons/io";

export default function Home() {
    const navigate= useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const [ischOpen, setIschOpen] = useState(false)

    const addRecipe =() =>{
        let token = localStorage.getItem("token")
        if(token){
            navigate("/addRecipe")
        }
        else{
            setIsOpen(true)
        }
    }
    return (
        <>
        <section className="home">
            <div className="left">
                <h1>FOODIE..?</h1><br></br>
                <p>Discover delicious recipes and cooking tips!</p><br></br>
                <button onClick={addRecipe}>Share Recipe</button>
            </div>
            <div className="right">
             <img src={food} width="420px" height="400px"/>
             <div style={{fontSize:"30px", color:"#141414ff", position:"absolute", bottom:"10px", right:"10px", cursor:"pointer"}} onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}>
               <NavLink to="/chatbot"> < IoMdArrowDropupCircle /></NavLink> 
             </div>
            </div>
        </section>
         {(isOpen) && <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}
        
       
        <div className="recipe">
        <RecipeItems />
        </div>
          
        </>
    );
}