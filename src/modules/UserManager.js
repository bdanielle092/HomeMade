const remoteURL = "http://localhost:5002"
const currentUser = sessionStorage.getItem("credentials")
export default {
    get: (id) => {
        return fetch(`{remoteURL}/users/${id}`).then(result => result.json())
    },
    getAll: () => {
        return fetch(`${remoteURL}/users?userId=${currentUser}`).then(result => result.json())
    },
    // ?&q is looking for the username after the = and return the results
    searchUser(username) {
        return fetch(`${remoteURL}/users/?&q=${username}`).then((result) => result.json())
    },
    createUser: (newUser) => {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
    }
}
