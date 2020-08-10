import React from "react";
import "./Banner.css";

const Banner = props => {

    
    const handleLogout = () => {
        sessionStorage.clear();
        props.history.push("/")
       }

    
    return(
       
        <header>
            <h1 className="site-title">
                    HomeMade
            </h1>
            
            <div className="alignRight-logout">
            <button 
              className="button-logout" 
              onClick={handleLogout}> 
              Logout </button>
              </div>
          
   
        </header>
        
    )
  
}
export default Banner