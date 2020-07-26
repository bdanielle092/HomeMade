import React, { useState, useEffect} from "react";
import RecipeManager from "../../modules/RecipeManager";


const RecipeEditForm = props => {
    const [recipe, setRecipe] = useState({name: "", recipe: ""});
    const [isLoading, setIsLoading ] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = {...recipe};
        stateToChange[evt.target.id] = evt.target.value;
        setRecipe(stateToChange);
    };

    const updatedExistingRecipe = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedRecipe = {
            id: props.match.params.recipeId,
            name: recipe.name,
            recipe: recipe.recipe
        };

        RecipeManager.updated(editedRecipe)
        .then(() => props.history.push("/"))
    }

    useEffect(() => {
        RecipeManager.get(props.match.params.recipeId)
        .then(recipe => {
            setRecipe(recipe)
            setIsLoading(false)
        });
    }, [props.match.params.recipeId]);

    return(
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input 
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="name"
                    value={recipe.name}
                    />
                    <label htmlFor="name">Name</label>

                    <input
                    type="text"
                    required
                    className="from-control"
                    onChange={handleFieldChange}
                    id="recipe"
                    value={recipe.recipe}
                    />
                    <label htmlFor="recipe">Recipe</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button" disabled={isLoading}
                        onClick={updatedExistingRecipe}
                        className="btn btn-primary"
                        >Submit</button>
                    </div>
            </fieldset>
        </form>
        </>
    )
}

export default RecipeEditForm