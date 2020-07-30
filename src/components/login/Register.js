import React, {useState, useEffect} from "react";
import UserManager from "../../modules/UserManager";



const Register = props => {
    const [credentials, setCredentails] = useState({username: "", email: "",  password: ""});
    const [user, setUser] = useState([]);
   
    // updates state whenever an input is edited
    const handleFieldChange = (evt) => {
        const stateToChange = {...credentials};
        stateToChange[evt.target.id] = evt.target.value;
        setCredentails(stateToChange)
    };

    // this is getting the ids for each item 
    const handleRegister = evt => {
        const newUser = document.getElementById("username").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const confirmPassword = document.getElementById("confirmPassword").value
        // checking that email and username are new 
        let checkEmail = true
        let checkUsername = true
        evt.preventDefault();
      
    // checks to make sure the fields are filled out and alerts you if not
        if(newUser === "" || email === "" || password === "" || confirmPassword === ""){
            window.alert("Please fill out  fields ")
            // checking email isn't being used 
        }else{
            user.forEach(useUser => {
                if(useUser.email === email ){
                     checkEmail = false 
                    //  checking username isn't being used
                     if(useUser.username === newUser){
                         checkUsername = false
                     }
                    }
            })
            // checking the passwords are the same and checking the password and username are not in the database already 
            if(checkEmail === true ){
                if(checkUsername === true){
                    if(password === confirmPassword){
                         UserManager.createUser(credentials)
                        //   redirects user to login page
                          .then(() => {
                              sessionStorage.setItem("credentials", JSON.stringify(credentials))
                              props.history.push("/")
                          });
                        }else {
                            window.alert("Password don't match, please try again")
                        }
                    }else {
                        window.alert("Username is already taken, please pick another name")
                    }
                }else{
                    window.alert("This email is already being used, please try another email")
                }
            }
        
         
    };  
    // if the value changes the effect runs again 
     useEffect(() => {
       UserManager.getAll().then((response) => setUser(response) )
     }, [])
   

    // Register form 
    return (
        
        <form onSubmit={handleRegister}>

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
           
            <button type="submit" 
                    id="login" 
                    onClick={handleRegister}
                    >Register</button>
        
        </fieldset>
        </form>
        
    );
};

export default Register