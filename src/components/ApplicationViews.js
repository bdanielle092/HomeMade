import {Route,} from "react-router-dom";
import React from "react";
import DashBoard from "./Dashboard";
import RecipeEditForm from "./recipe/RecipeEditForm";
import RecipeDetails from "./recipe/RecipeDetails";
import RecipeForm from "./recipe/RecipeForm";


const ApplicationViews = () => {
    return (
        <React.Fragment>
            <Route exact
            path="/"
            render={props => {
                return<DashBoard />
            }}
            />
           
           <Route exact path="/recipes/:recipeId(\d+)/edit" render={(props) => {
               return <RecipeEditForm {...props} />
           }}/>
             <Route exact path="/recipes/:recipeId(\d+)" render={(props) => {
                return <RecipeDetails recipeId={parseInt(props.match.params.recipeId)}
                {...props} />
            }} />
              <Route exact path="/recipes/new" render={(props) => {
                return <RecipeForm {...props} />
           }} />
      
     
         </React.Fragment>
    )
}

export default ApplicationViews