import React, {useState, useEffect} from 'react';
import RecipeCard from "./RecipeCard";
import RecipeManager from "../../modules/RecipeManager";


const RecipeList = (props) => {
    const getRecipeName = (name) => {
       
        return RecipeManager.getRecipesByRecipeName(name).then((results) => {
            console.log("results", results)
           setSearchResults(results)
        })
    }
    const [recipes, setRecipes] = useState([])
    const [searchRecipeName, setSearchRecipeName] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const getRecipes = () => {
        
        return RecipeManager.getAll().then(recipesFromAPI => {
            setRecipes(recipesFromAPI)
        });
    };
   
    
   const handleChange = event => {
    setSearchRecipeName(event.target.value)
    getRecipeName(searchRecipeName)
   }


    const deleteRecipe = id => {
        RecipeManager.delete(id)
        .then(() => RecipeManager.getAll().then(setRecipes));
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
        <section className="section-content">
            <button type="button"
            className="btn"
            onClick={() => {props.history.push("/recipes/new")}}>
            Add Recipe
            </button>
        </section>

        <div className="search-recipe">
                <input type="text" placeholder="search" value={searchRecipeName} onChange={handleChange}/>
         </div>

        <div className="container-cards">
            {recipes.map(recipe => <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            deleteRecipe={deleteRecipe} 
            getRecipes={getRecipes} 
            {...props}/> )}
        </div>
        </>
    )
}
export default RecipeList
