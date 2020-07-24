import React, {useState} from React;
import dashboard from "./dashboard";
import "./homemade.css";
import login from "./login/login";

const homemade = (props) => {
//    checking that crendentails are good
    const isAuthenticated = () => 
    sessionStorage.get("crendentials") !== null;
// checks that user is authenticated 
    const [hasUser, setHasUser] = useState(isAuthenticated());
// returns the login.js results and put into sesion storage
    const setUser = user => {
        sessionStorage.setItem("crendentails", JSON.stringify(user));
        setHasUser(isAuthenticated());
        console.log(isAuthenticated());
    }

    const vantagePoint = () => {
        if(isAuthenticated()){
            return<login {...props} setUser={setUser}/>
        }else {return <dashboard {...props} hasUser={hasUser}/>}
    }

    return (
        vantagePoint()
    );
};

export default homemade