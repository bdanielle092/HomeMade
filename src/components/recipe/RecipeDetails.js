import React, {useState, useEffect} from 'react';
import RecipeManager from "../../modules/RecipeManager";
import "./RecipeDetail.css"

const RecipeDetail = props => {
    const [recipe, setRecipe] = useState({name: "", recipe: "", url: ""})

   useEffect(() => {
       RecipeManager.get(props.recipeId)
       .then(recipe => {
           setRecipe({
               name: recipe.name,
               recipe: recipe.recipe,
               url: recipe.url
           });
       });
   }, [props.recipeId]);

   return (
       <div className="recipe">
           <div className="recipe-content">
           <h3>Name: {recipe.name}</h3>
               <picture>
               <img src={recipe.url} alt="ice cream pictures" />
               </picture>
               <p className="textbox">Recipe: {recipe.recipe}</p>

           </div>
       </div>
   );
}

export default RecipeDetail