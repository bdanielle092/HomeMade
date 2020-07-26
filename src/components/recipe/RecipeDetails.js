import React, {useState, useEffect} from 'react';
import RecipeManager from "../../modules/RecipeManager";
// import "./RecipeDetail.css"

const RecipeDetail = props => {
    const [recipe, setRecipe] = useState({name: "", recipe: "" })

   useEffect(() => {
       RecipeManager.get(props.recipeId)
       .then(recipe => {
           setRecipe({
               name: recipe.name,
               recipe: recipe.recipe,
           });
       });
   }, [props.recipeId]);

   return (
       <div className="card">
           <div className="card-content">
           <h3>Name: {recipe.name}</h3>
               <picture>
                   <img src={require('./icecream.jpg')} alt="ice cream pic"/>
               </picture>
               <p>Recipe: {recipe.recipe}</p>

           </div>
       </div>
   );
}

export default RecipeDetail