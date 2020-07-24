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
    }
}