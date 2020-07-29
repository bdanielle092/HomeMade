import React, { useState, useEffect} from "react";
import RecipeManager from "../../modules/RecipeManager";


const RecipeEditForm = props => {
    const [recipe, setRecipe] = useState({name: "", recipe: "", url: ""});
    const [image, setImage] = useState("")
    const [isLoading, setIsLoading ] = useState(false);

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', "icecream")
          setIsLoading(true)
          const res = await fetch(
            'https://api.cloudinary.com/v1_1/dszckhcld/image/upload', 
            {
              method: 'POST',
              body: data
            }
          )
        const file = await res.json()
        // this will save your photo
        setImage(file.secure_url)
        setRecipe({...recipe, url: file.secure_url})
        RecipeManager.getAll()
        setIsLoading(false)
      }

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
            recipe: recipe.recipe,
            url: recipe.url
       
        };

        RecipeManager.updated(editedRecipe)
        .then(() => props.history.push("/Dashboard"))
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

                   
                    <textarea
                      required
                      onChange={handleFieldChange}
                      id="recipe"
                      value={recipe.recipe}
                      placeholder="Recipe"
                      row="5" cols="50">
                    </textarea>
                    <label htmlFor="recipe">Recipe</label>

                    <input 
                    type="file"
                    name="file"
                    id="file"
                    onChange={uploadImage}
                    placeholder="upload"
                    />

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