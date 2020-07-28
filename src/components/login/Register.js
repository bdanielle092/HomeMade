import React, {useState} from "react";
import UserManager from "../../modules/UserManager";



const Register = props => {
    const [credentials, setCredentails] = useState({username: "", email: "",  password: ""});

    // updates state whenever an input is edited
    const handleFieldChange = (evt) => {
        const stateToChange = {...credentials};
        stateToChange[evt.target.id] = evt.target.value;
        setCredentails(stateToChange)
    };
//    hides the login form
    const [showForm, setShowForm] = useState(true)
    const handleClick = (evt) => {
    setShowForm(!showForm)
    }

    // checks to make sure the fields are filled out and alerts you if not
    const handleRegister = evt => {
        evt.preventDefault();
        if(credentials.username || credentials.email || credentials.password){
            window.alert("Please fill out  fields ")
            // create new user 
        }else{
          UserManager.createUser(credentials)
        //   redirects user to login page
          .then(() => {
              sessionStorage.setItem("credentials", JSON.stringify(credentials))
              props.history.push("/login")
          });
        }
    };

   

    // Register form 
    return (
        <div className={ showForm ? "showForm": "hidden"}>
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
            </div>
           
            <button type="submit" 
                    id="login" 
                    onClick={handleClick}
                    >Register</button>
        
        </fieldset>
        </form>
        </div>
    );
};

export default Register