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
                Home Made
            </h1>
            
            <div className="alignRight">
            <button 
              className="button" 
              onClick={handleLogout}> 
              Logout </button>
              </div>
          
   
        </header>
        
    )
}
export default Banner