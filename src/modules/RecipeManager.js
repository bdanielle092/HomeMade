const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/recipes/${id}`).then(result => result.json())
    },
    getAll(){
        return fetch(`${remoteURL}/recipes`).then(result => result.json())
    },

    delete(id) {
        return fetch(`${remoteURL}/recipes/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newRecipe) {
        return fetch(`${remoteURL}/recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecipe)
    }).then(data => data.json())
  },
  updated(editedRecipe){
      return fetch(`${remoteURL}/recipes/${editedRecipe.id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(editedRecipe)
      }).then(data => data.json())
  }

//   getRecipesByRecipeName(name){
//     return fetch(`${remoteURL}/recipes?q=${name}`).then(result => result.json())
//   }
//   http://localhost:5002/recipes?q=blueberry

}