import React from "react";
import { Link } from "react-router-dom"
import "./Recipe.css";

const RecipeCard = props => {
     // if you are the current user you can view this page else you can only view recipe details 
    const currentUser = parseInt(sessionStorage.getItem("credentails"))
    if(props.recipe.userId === currentUser) {
    return (
        
        <div className="recipe" >
            <div className="recipe-content">
            <h3>
                <span className="recipeName">{props.recipe.name}</span>
                </h3>
                <picture> 
                    <img src={props.recipe.url} alt="ice cream pictures" />
                </picture>
                
                <Link to={`/recipes/${props.recipe.id}`}>
                    <button >Recipe</button>
                </Link>
                <button type="button"
                onClick={() => props.history.push(`/recipes/${props.recipe.id}/edit`)}>
                    Edit Recipe
                </button>
                <button type="button" onClick={() => props.deleteRecipe(props.recipe.id)}>Delete Recipe</button>
                
            </div>
        </div>
        
    );
    } else {
        return(
            
            <div className="recipe">
                <div className="recipe-content-user">
                    <h3>
                        <span className="recipeName">{props.recipe.name}</span>
                    </h3>
                    <picture>
                        <img src={props.recipe.url} alt="ice cream pictures"/>
                    </picture>
              
                <Link to={`/recipes/${props.recipe.id}`}>
                    <button className="detail">Recipe</button>
                </Link>
              
                </div>
            </div>
            
        )
    }
};

export default RecipeCard;