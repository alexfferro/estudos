const axios = require('axios')
const url = 'https://api.github.com/users/alexfferro'

axios.get(url)
.then( res => axios.get(res.data.repos_url))
.then( repos => console.log(repos))
.catch(err => console.log(err))

/**
 * Uma concorrência de promessas
 *  varias promessas serão executadas ao mesmo tempo
 */

Promise.all([
  axios.get(`${url}/repos`),
  axios.get(url)
]).then( responses => {
  console.log(responses[0].data.length)
  console.log(responses[1].data.login)
}).catch(err => console.log(err))