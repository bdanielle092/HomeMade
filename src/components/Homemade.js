import React, {useState} from "react"
import ApplicationViews from "./ApplicationViews";
import "./Homemade.css"

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
              
              <ApplicationViews hasUser={hasUser} setUser={setUser} />
              </>
          )
      }
   
    

}
export default Homemade