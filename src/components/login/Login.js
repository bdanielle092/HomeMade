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
//    hides the login form
    // const [showForm, setShowForm] = useState(true)
    // const handleClick = (evt) => {
    // setShowForm(!showForm)
    // }
//   checking to make sure credentails are right 
    const handleLogin = (e) => {
        e.preventDefault();
        UserManager.searchUser(credentials.username).then((existingUser) => {
            if(!credentials.password || !credentials.username){
                window.alert("Please fill out user name and password") 
             }else if (credentials.password === existingUser[0].password) {
                 props.setUser(existingUser[0].id);
                //  props.history.push("/")
             }else {
                 window.alert("no match, please create an account")
             }
        })
    //    .then(users => {
    //        users.find(user => {
    //            if(user.username === credentials.user && user.password === credentials.user){
    //                loginAccepted = true
    //                sessionStorage.setItem("credentials", JSON.stringify(credentials))
    //                sessionStorage.setItem("activeUser", user.id)
    //                props.setUser(credentials)
    //                props.history.push("/")

    //            }
            //    if false alerts you that input fields are wrong
    //            if(loginAccepted === false)
    //            window.alert("Incorrect username or password")
    //        })
    //    })
    }
    
    // login form 
    return (
        // <div className={ showForm ? "showForm": "hidden"}>
        <form onSubmit={handleLogin}>

        <fieldset>
            <h3>Please sign in </h3>
            
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
                    // onClick={handleClick}
                    >Login</button>
                    <div className="register"> &nbsp;
        <Link to="/register"> Register a new account </Link>
     </div>
        
        </fieldset>
        </form>
        // </div>
    );
};

export default Login