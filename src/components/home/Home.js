import React from "react";
import Login from "../login/Login";




const Home = (props) => {
  //// these are props that are being passed down on homemade
// its just a shorter way of saying props hasUser
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  // we are building an empty variable so we can push whatever user is logged in 
  let userId ="";
  // this hasUser is checking they are authenicated 
  if(hasUser) {
      userId = JSON.parse(sessionStorage.getItem("credentials"));
  }
    return (
     <>
      
      
      <Login hasUser={hasUser} setUser={setUser} {...props}/>
    
      </>
    )
        
}

export default Home;