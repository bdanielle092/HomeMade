import {Route} from "react-router-dom";
import React from "react";
import RecipeList from "./recipe/RecipeList"
import Banner from "./banner/Banner";
// import "/Dashboard.css";

const Dashboard = (props) => {
   

    return (
        <React.Fragment>
            <Route 
                exact path="/"
                render={props => {
                    return <>
                    <div className="Banner">
                        <Banner {...props}/>
                    </div>
                    <div>
                        <RecipeList {...props}/>
                    </div>

                    </>
                }}/>

          




        </React.Fragment>
    )
}
export default Dashboard