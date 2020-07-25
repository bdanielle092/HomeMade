import React, {useState} from  "react";
import RecipeManager from  "../../modules/RecipeManager";
import "./RecipeForm.css";

const RecipeForm = props => {
    const [recipe, setRecipe] = useState({name: "", recipe: ""})
    const [isLoading, setIsLoading ] = useState(false)

    const [showForm, setShowform] = useState(false)
    
    const handleFieldChange = evt => {
        const stateToChange = {...recipe};
        stateToChange[evt.target.id] = evt.target.value;
        setRecipe(stateToChange);
    };
    const handleclick = evt => {
        setShowform(!showForm)
    }


    const constructNewRecipe = evt => {
        evt.preventDefault();
        if(recipe.name === "" || recipe.recipe === "") {
            window.alert("Please input field");
        }else {
            setShowform(!showForm)
            setIsLoading(true);
           
            RecipeManager.post(recipe)
            .then(() => { props.getRecipes()
            setIsLoading(false)
        });
            
        };
    };

    return (
        <>
        <section className="section-content">
            <button type="button"
            className="btn"
            onClick={handleclick}>
            Add Recipe
            </button>
        </section>

        <form className={showForm? "show" : "hidden"}>
            <fieldset>
                <div className="formgrid">
                    <input 
                    type="text"
                    required
                    OnChange={handleFieldChange}
                    id="name"
                    placeholder=" Recipe Name"
                    />
                    <label html="name">Name</label>

                    <input
                    type="text"
                    required
                    OnChange={handleFieldChange}
                    id="recipe"
                    placeholder="Recipe"
                    />
                    <label html="recipe">Recipe</label>

                </div>
                <div className="alignRight">
                    <button 
                    type="button"
                    disabled={isLoading}
                    onClick={constructNewRecipe}
                    >Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    )
}

export default RecipeForm