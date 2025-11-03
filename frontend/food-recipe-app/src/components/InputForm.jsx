import React from "react";
import axios from "axios";
import { data } from "react-router-dom";

export default function InputForm({setIsOpen}) {
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const [isSignup, setIsSignup] = React.useState(false);
const [error, setError] = React.useState("");


const handleSubmit = async(e) => {
    e.preventDefault();
    let endpoint = isSignup ? "signup" : "login";
    await axios.post(`http://localhost:5000/${endpoint}`, {email,password})
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setIsOpen()
        })
        .catch(data => setError(data.response?.data?.error))
}

    return (
        <>
       <form className="form" onSubmit={handleSubmit}>
           <div className="form-control">
            <label>Email</label>
            <input type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} className="input" required/>
           </div>
           <div className="form-control">
            <label>Password</label>
            <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} className="input" required/>
           </div>
           <button type="submit" >{(isSignup)?"SignUp":"Login"}</button><br></br>
           {(error!="") && <h6 className="error">{error}</h6>}
           <br></br>
           <p onClick={()=>setIsSignup(prev=>!prev)}>{(isSignup)?"Already have an account":"Create new account"}</p>
        </form>    
        </>
    );
}