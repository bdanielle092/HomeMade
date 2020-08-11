import React, {useState} from  "react";
import RecipeManager from  "../../modules/RecipeManager";



const RecipeForm = props => {
    const [recipe, setRecipe] = useState({name: "", recipe: "", url: "", typeId: 1, userId: parseInt(sessionStorage.getItem("credentails"))})
    const [image, setImage] = useState("")
    const [isLoading, setIsLoading ] = useState(false)

    
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
    }


    const constructNewRecipe = evt => {
        evt.preventDefault();
        if(recipe.name === "" || recipe.recipe === "" || recipe.url === "" || recipe.type === "") {
            window.alert("Please input field");
        }else {
            // change to a number and not a string 
            recipe.typeId=parseInt(recipe.typeId)
            setIsLoading(true);
            RecipeManager.post(recipe)
            .then(() => props.history.push("/Dashboard"));
            
        
            
        };
    };
  
    return (
        <>
        <section className="section-content">
            <button type="button"
            className="btn"
            onChange={handleFieldChange}>
            Add Recipe
            </button>
        </section>

             <form>
            <fieldset>
                <div className="formgrid">
                    <input 
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="name"
                    placeholder=" Recipe Name"
                    />
                    <label htmlFor="name">Name</label>

                    <textarea
                      required
                      onChange={handleFieldChange}
                      id="recipe"
                      placeholder="Recipe"
                      row="5" cols="50">
                    </textarea>
                    <label htmlFor="recipe">Recipe</label>

                    <select
                      required
                      className="form-control"
                      id="typeId"
                      value={recipe.type}
                      onChange={handleFieldChange}>
                          <option value="1">Regular</option>
                          <option value="2">Fruit</option>
                          <option value="3">Lactose</option>
                    </select>
                    <label htmlFor="type">Type</label>

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