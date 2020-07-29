import React, {useState} from "react"
import "./Homemade.css";
import ApplicationViews from "./ApplicationViews";

const Homemade = () => {
   const isAuthenicated = () => sessionStorage.getItem("credentials") != null;
   const [hasUser, setHasUser] = useState(isAuthenicated());

   const setUser = (userId) => {
       sessionStorage.setItem("credentails", JSON.stringify(userId));
       setHasUser(isAuthenicated());
   }
//    if user is authenicated take them to dashboard
    if(isAuthenicated()){   
        return (
        <React.Fragment>
          <ApplicationViews hasUser={hasUser} setUser={setUser} />
          </React.Fragment>
        // else take them to login page
      )}else {
          return(
              <>
              <h1>Hi</h1>
              <ApplicationViews hasUser={hasUser} setUser={setUser} />
              </>
          )
      }
   
    

}
export default Homemade