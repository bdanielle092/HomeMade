import React, { useState, useEffect} from "react";
import RecipeManager from "../../modules/RecipeManager";


const RecipeEditForm = props => {
    const [recipe, setRecipe] = useState({name: "", recipe: "", url: "", typeId: 1, userId: parseInt(sessionStorage.getItem("credentails"))});
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
            url: recipe.url,
            typeId: parseInt(recipe.typeId),
            userId: recipe.userId
       
        };

        RecipeManager.updated(editedRecipe)
        .then(() => {
             // change to a number and not a string 
            //  recipe.typeId=parseInt(recipe.typeId)
            props.history.push("/Dashboard")})
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

                    <select
                      required
                      className="form-control"
                      id="typeId"
                      value={recipe.typeId}
                      onChange={handleFieldChange}>
                          <option value="1">Regular</option>
                          <option value="2">Fruit</option>
                          <option value="3">Lactose</option>
                    </select>
                    <label htmlFor="type">Type</label>

                    <input 
                    type="file"
                    name="file"
                    id="url"
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