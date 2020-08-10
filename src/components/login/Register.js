import React, { useState, useEffect } from "react";
import UserManager from "../../modules/UserManager";
import Banner from "../banner/Banner";



const Register = props => {
    const [credentials, setCredentails] = useState({ username: "", email: "", password: "" });
    const [user, setUser] = useState([]);

    // updates state whenever an input is edited
    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentails(stateToChange)
    };

    // this is getting the ids for each item 
    const handleRegister = evt => {
        const newUser = document.getElementById("username").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const confirmPassword = document.getElementById("confirmPassword").value

        evt.preventDefault();



        UserManager.searchUser(credentials.username)
            .then(existingUserByUsername => UserManager.searchUser(credentials.email).then(existingUserByEmail => {
                if (newUser === "" || email === "" || password === "" || confirmPassword === "") {
                    window.alert("Please fill out fields")
                    // checking if there anything withing the array 
                } else if (existingUserByUsername.length !== 0) {
                    window.alert("User already exist")
                    // > is going to bring back an array if it finds it  if notthing then it dosen't exist
                } else if (existingUserByEmail.length > 0) {
                    window.alert("Email already exist")
                    // checking that password match 
                } else if (password !== confirmPassword) {
                    window.alert("Passwords don't match")
                    // if you pass all the above it will take you to login page
                } else {
                    UserManager.createUser(credentials).then(() => {
                        sessionStorage.setItem("credentials", JSON.stringify(credentials))
                        props.history.push("/")
                    })
                }
            }))
        }

 // Register form 
 return (
   <>
    <div className="Banner">
       <Banner {...props}/>
    </div>
        
    <form>

    <fieldset>
  
        <div className="formgrid">
            <input onChange={handleFieldChange}
            type="text"
            id="username"
            placeholder="username"
            required=""
            />
            <label htmlFor="inputUsername">Username</label>
            
            <input onChange={handleFieldChange}
            type="email"
            id="email"
            placeholder="email"
            required=""
            />
            <label htmlFor="inputEmail">Email</label>

            <input onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="password"
            required
            />
            <label htmlFor="inputPassword">Password</label>   

            
            <input 
            type="password"
            id="confirmPassword"
            placeholder="confirmPassword"
            required
            />
            <label htmlFor="inputconfirmPassword">Comfirm Password</label>   
        </div>
       
        <button className="alignRight"
                type="submit" 
                id="login" 
                onClick={handleRegister}
                >Register</button>
    
    </fieldset>
    </form>
    </>
);
 }


export default Register