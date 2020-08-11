const remoteURL = "http://localhost:5002"

export default {
  
    getAll(){
        return fetch(`${remoteURL}/types`).then(result => result.json())
    }

}