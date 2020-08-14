import React, {useState, useEffect} from 'react';
import RecipeManager from "../../modules/RecipeManager";
import "./RecipeDetail.css"

const RecipeDetail = props => {
    const [recipe, setRecipe] = useState({name: "", recipe: "", url: "", type: {}, user: {}})

   useEffect(() => {
       RecipeManager.getRecipeByType(props.recipeId)
       .then(recipe => {
           setRecipe({
               name: recipe.name,
               recipe: recipe.recipe,
               url: recipe.url,
               type: recipe.type,
               user: recipe.user
           });
       });
   }, [props.recipeId]);

   return (
       <div className="container-detail">
       <div className="recipe">
           <div className="recipe-content">
           <h3>Name: {recipe.name}</h3>
           <h4>Username: {recipe.user.username}</h4>
               <picture>
               <img src={recipe.url} alt="ice cream pictures" />
               </picture>
               <h4>Type: {recipe.type.type}</h4>
               <p className="textbox">Recipe: {recipe.recipe}</p>

           </div>
       </div>
       </div>
   );
}

export default RecipeDetail