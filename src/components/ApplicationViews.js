import {Route, Redirect} from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";
import RecipeEditForm from "./recipe/RecipeEditForm";
import RecipeDetails from "./recipe/RecipeDetails";
import RecipeForm from "./recipe/RecipeForm";
import CommentForm from "./comments/CommentForm";
import Home from "./home/Home";
import CommentEditForm from "./comments/CommentEditForm";
import Register from "./login/Register";


const ApplicationViews = (props) => {
// these are props that are being passed down on homemade
// its just a shorter way of saying props hasUser
    const hasUser = props.hasUser;
    const setUser = props.setUser;
    // we are building an empty var so we can push whatever user is logged in 
    let userId ="";
    // this hasUser is checking they are authenicated 
    if(hasUser) {
        userId = JSON.parse(sessionStorage.getItem("credentials"));
    }
    return (
        
        <React.Fragment> 
            <Route exact path="/"
            render={props => {
                return<Home {...props} hasUser={hasUser} setUser={setUser} />
            }}/>
            
        <Route path="/register" render={props => {
              return <Register {...props} />
        }}/>
            
            <Route exact
            path="/Dashboard"
            render={props => {
                return<Dashboard {...props} />
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