const url = "http://localhost:5500/api"
const newUser = {
  name: 'Alex Ferro',
  avatar: 'https://picsum.photos/400/200',
  city: 'Arapiraca'
}
const updatedUser = {
  name: 'Jubileu Silva',
  avatar : 'https://picsum.photos/400/200',
  city: 'Arkham'
}

/**
 * It fetches the data from the url, then it converts the response to json, then it
 * renders the data to the page, and if there's an error, it logs it to the
 * console.
 */
function getUsers(){
  fetch(url)
  .then( res => res.json())
  .then( data => renderApiResult.textContent = JSON.stringify(data))
  .catch(err => console.error(err))
}

/**
 * It fetches the user data from the API, then it updates the DOM with the user
 * data.
 * @param id - the id of the user you want to get
 */
function getUser(id){
  fetch(`${url}/${id}`)
  .then( res => res.json())
  .then( data => {
    userName.textContent = data.name
    userCity.textContent = data.city
    userAvatar.src = data.avatar
  })
  .catch( err => console.error(err))
}

/**
 * It takes a newUser object, sends it to the server, and then displays the
 * response from the server.
 * @param newUser - {
 */
function addUser(newUser){
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  })
  .then( res => res.json())
  .then( data => Alert.textContent = data)
  .catch( err => console.error(err))
}
/**
 * It takes an object and an id, and then it sends a PUT request to the server with
 * the object and the id.
 * @param updatedUser - the updated user object
 * @param id - the id of the user you want to update
 */
function updateUser(updatedUser, id){
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  })
  .then( res => res.json())
  .then( data => Alert.textContent = data)
  .catch( err => console.error(err))
}
/**
 * It takes an id, makes a DELETE request to the server, and then displays the
 * response in the alert div.
 * @param id - the id of the user you want to delete
 */
function deleteUser(id){
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json; charset=utf-8'}
  })
  .then( res => res.json())
  .then( data => Alert.textContent = data)
  .catch( err => console.error(err))
}



// addUser(newUser)
getUsers()
getUser(1)
// updateUser(updatedUser, 1)
// deleteUser(5)