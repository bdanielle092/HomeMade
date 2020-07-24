import React, {useState, useEffect} from 'react';
import RecipeManager from "../../modules/RecipeManager";
import "./RecipeDetail.css"

const RecipeDetail = props => {
    const [recipe, setRecipe] = useState({recipe: ""})

   useEffect(() => {
       RecipeManager.get(props.recipeId)
       .then(recipe => {
           setRecipe({
               recipe: recipe.recipe
           });
       });
   }, [props.recipeId]);

   return (
       <div className="card">
           <div className="card-content">
               <picture>
                   <img src={require('./icecream.jpg')} alt="ice cream pic"/>
               </picture>
               <h3>Recipe: {recipe.recipe}</h3>
           </div>
       </div>
   );
}

export default RecipeDetail