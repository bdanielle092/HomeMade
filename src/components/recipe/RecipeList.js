import React, {useState, useEffect} from 'react';
import RecipeCard from "./RecipeCard";
import RecipeManager from "../../modules/RecipeManager";



const RecipeList = (props) => {

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    // this useState is storing the filtered results
    const [filteredRecipes, setFilteredRecipes] = useState ([])

    // fetch call that gets the usernames for recipes
    const getAllRecipeByUsername = () => {
        return RecipeManager.getRecipesByUsername().then((results) => {
            setRecipes(results)
        })
    }
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
        getAllRecipeByUsername()
       
    }, [])

  
    
    // Whenever something changes in the search variable it will trigger this effect 
    // I am setting the setFilterRecipes
    // then filtering through the recipes and getting the recipes by name. tolowercase converts a string to lower case letters
    // .includes checks to see if there are any lower case letters in the search 
    useEffect(() => {
        setFilteredRecipes(
            recipes.filter(recipe =>
               recipe.name.toLowerCase().includes(search.toLowerCase())
            )
        )
        // this is watching search and anytime it changes it will filtered through the recipes.  recipes it what irritating over.
    }, [search, recipes])
       

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
            {/* the onChange is updating the state variable  */}
                <input type="text" placeholder="search recipes" onChange={e => setSearch(e.target.value)}/>
         </div>

        <div className="container-cards">
            {filteredRecipes.map(recipe => <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            deleteRecipe={deleteRecipe} 
            getRecipe={getRecipes} 
            {...props}/> )}
        </div>
        </>
    )
}
export default RecipeList
