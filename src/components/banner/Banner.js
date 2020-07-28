import React from "react";
import "./Banner.css";

const Banner = props => {
    
    const handleLogout = (props) => {
        sessionStorage.clear();
       
      }
    return(
 
        <header>
            <h1 className="site-title">
                Home Made
            </h1>
            <h3>
            <button
              className="button-link" 
              onClick={handleLogout}> 
              Logout </button>
          </h3>
   
        </header>
    )
}
export default Banner