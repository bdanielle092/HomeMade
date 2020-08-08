import React, {useState, useEffect} from 'react';
import RecipeCard from "./RecipeCard";
import RecipeManager from "../../modules/RecipeManager";


const RecipeList = (props) => {

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    // this useState is storing the filtered results
    const [filteredRecipes, setFilteredRecipes] = useState ([])

    const getRecipes = () => {
        return RecipeManager.getAll().then(recipesFromAPI => {
            setRecipes(recipesFromAPI)
        });
    };
   
  
    const deleteRecipe = id => {
        RecipeManager.delete(id)
        .then(() => RecipeManager.getAll().then(setRecipes));
    };

    // Whenever something changes in the search variable it will trigger this effect 
    // I am setting the setFilterRecipes
    // then filtering through the recipes and getting the recipes by name. tolowercase converts a string to lower case letters
    // .includes checks to see if there are any lower case letters in the search 
    useEffect(() => {
        getRecipes()
    }, [])
    useEffect(() => {
        setFilteredRecipes(
            recipes.filter(recipe =>
               recipe.name.toLowerCase().includes(search.toLowerCase())
            )
        )
        // if something changes in the recipes again search for the fliters
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
            getRecipes={getRecipes} 
            {...props}/> )}
        </div>
        </>
    )
}
export default RecipeList
