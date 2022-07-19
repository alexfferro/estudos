/**
 * Importando Bibliotecas externas através do require
 */
const express = require('express');
const axios = require('axios');

const app = express();

// Middleware para transformar as requisições em json
app.use(express.json());

app.listen('3000');

let author = 'Alex Silva'

/**
 * VERB GET EXAMPLE
 * CONSUMING API GITHUB USERS WITH AXIOS 
 */
app.route('/').get( (req, res) => {
  axios.get('https://api.github.com/users/alexfferro')
  .then(result => res.send(`<img src="${result.data.avatar_url}" />`))
  .catch(error => console.error(error))
} );
// VERB POST EXAMPLE
app.route('/').post( (req, res) => res.send( req.body) );
// VERB PUT EXAMPLE
app.route('/').put( (req, res) => {
  author = req.body.author;
  res.send( author);
  console.log(author);
} );
// ROUTE PARAMS EXAMPLE
app.route('/:id').delete( (req, res) => {
  author = "";
  res.send( req.params.id);
})