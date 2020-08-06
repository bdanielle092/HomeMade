// import {Route} from "react-router-dom";
import React from "react";
import RecipeList from "./recipe/RecipeList"
import Banner2 from "./banner/Banner2";
import CommentList from "./comments/CommentList";

// this is displaying the main card to the dashboard
const Dashboard = (props) => {
   

    return (
        <React.Fragment>
          
                    
                    <div className="Banner">
                        <Banner2 {...props}/>
                    </div>
                    <div>
                        <RecipeList {...props}/>
                    </div>
                    <div>
                        <CommentList {...props}/>
                    </div>

                
            

        </React.Fragment>
    )
}
export default Dashboard