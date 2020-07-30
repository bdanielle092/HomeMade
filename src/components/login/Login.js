import React, {useState} from "react";
import UserManager from "../../modules/UserManager";
import {Link}  from "react-router-dom"
import "./Login.css";


const Login = props => {
    const [credentials, setCredentails] = useState({username: "", password: ""});

    // updates state whenever an input is edited
    const handleFieldChange = (evt) => {
        const stateToChange = {...credentials};
        stateToChange[evt.target.id] = evt.target.value;
        setCredentails(stateToChange)
    };

//   1. if username or password are empty fill out fileds
// 2.if user is has an account and is authenticated go to dashboard
// 3. if user doesn't have an account, please create an account 
    const handleLogin = (e) => {
        e.preventDefault();
        UserManager.searchUser(credentials.username).then((existingUser) => {
            if(!credentials.password || !credentials.username){
                window.alert("Please fill out username and password") 
             }else if (existingUser.length === 0) {
                window.alert("no match, please create an account")
             }else {
               props.setUser(existingUser[0].id);
                props.history.push("/Dashboard")
               
             }
        })
 
    }
    
    // login form 
    return (
        <form onSubmit={handleLogin}>

        <fieldset>
        
            
            <div className="formgrid">
                <input onChange={handleFieldChange}
                type="username"
                id="username"
                placeholder="username"
                required=""
                />
                <label htmlFor="inputUsername">Username</label>

                <input onChange={handleFieldChange}
                type="password"
                id="password"
                placeholder="password"
                required
                />
                <label htmlFor="inputPassword">Password</label>   
            </div>
           
            <button type="submit" 
                    id="login" 
                    >Login</button>
                    <div className="register"> &nbsp;
        <Link to="/register"> Register a new account </Link>
     </div>
        
        </fieldset>
        </form>
       
    );
};

export default Login