import React, {useState, useEffect} from 'react';
import RecipeCard from "./RecipeCard";
import RecipeManager from "../../modules/RecipeManager";
import RecipeForm from "./RecipeForm"

const RecipeList = (props) => {
    const [recipes, setRecipes] = useState([])

    const getRecipes = () => {
        
        return RecipeManager.getAll().then(recipesFromAPI => {
            setRecipes(recipesFromAPI)
        });
    };

    const deleteRecipe = id => {
        RecipeManager.delete(id)
        .then(() => RecipeManager.getAll().then(setRecipes));
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
        <RecipeForm
            getRecipes={getRecipes}/>

        <div className="container-cards">
            {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} getRecipes={getRecipes} {...props}/> )}
        </div>
        </>
    )
}
export default RecipeList
