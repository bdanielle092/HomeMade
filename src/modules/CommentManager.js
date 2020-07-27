const remoteURL = "http://localhost:5002"

export default {
    get(id){
        return fetch(`${remoteURL}/comments/${id}`).then(result => result.json())
    },
    getAll(){
        return fetch(`${remoteURL}/comments`).then(result => result.json())
    },
    post(newComment) {
        return fetch(`${remoteURL}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        }).then(data => data.json())
    }

}