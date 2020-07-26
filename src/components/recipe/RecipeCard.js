import React from "react";
import { Link } from "react-router-dom"
import "./Recipe.css";

const RecipeCard = props => {
    return (
        <div className="card">
            <div className="card-content">
            <h3>
                <span className="card-recipeName">{props.recipe.name}</span>
                </h3>
                <picture> 
                    <img src={require("./icecream.jpg")} alt="ice cream pic" />
                </picture>
             
                <Link to={`/recipes/${props.recipe.id}`}>
                    <button>Recipe</button>
                </Link>
                <button type="button"
                onClick={() => props.history.push(`/recipes/${props.recipe.id}/edit`)}>
                    Edit Recipe
                </button>
                <button type="button" onClick={() => props.deleteRecipe(props.recipe.id)}>Delete Recipe</button>
            </div>
        </div>
    );
};

export default RecipeCard;