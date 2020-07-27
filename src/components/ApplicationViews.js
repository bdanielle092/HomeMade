import {Route, Redirect} from "react-router-dom";
import React from "react";
import DashBoard from "./Dashboard";
import RecipeEditForm from "./recipe/RecipeEditForm";
import RecipeDetails from "./recipe/RecipeDetails";
import RecipeForm from "./recipe/RecipeForm";
import CommentForm from "./comments/CommentForm";
import Home from "./home/Home";
import CommentEditForm from "./comments/CommentEditForm";


const ApplicationViews = () => {
    return (
        
        <React.Fragment> 
            <Route exact path="/"
            render={props => {
                return<Home {...props} />
            }}/>
            
            <Route exact
            path="/"
            render={props => {
                return<DashBoard />
            }}
            />
           {/* recipe cards */}
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

           {/* comments */}

           <Route exact path="/comments/new" render={(props) => {
               return <CommentForm {...props} />
           }} />

           <Route path="/comments/:commentId(\d+)/edit" render={props => {
               return <CommentEditForm {...props}/>
           }}/>
      
     
         </React.Fragment>
    )
}

export default ApplicationViews