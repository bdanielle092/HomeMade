import React from "react";

import Login from "../login/Login";
import Register from "../login/Register";

const Home = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  // we are building an empty var so we can push whatever user is logged in 
  let userId ="";
  // this hasUser is checking they are authenicated 
  if(hasUser) {
      userId = JSON.parse(sessionStorage.getItem("credentials"));
  }
    return (
     <>
      <Login hasUser={hasUser} setUser={setUser} />
      <Register />
      </>
    )
        
}

export default Home;