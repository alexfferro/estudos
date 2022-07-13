const express = require('express');

const app = express();

// Middleware para transformar as requisições em json
app.use(express.json());

app.listen('3000');

let author = 'Alex Silva'

app.route('/').get( (req, res) => res.send(author) );

app.route('/').post( (req, res) => res.send( req.body) );

app.route('/').put( (req, res) => {
  author = req.body.author;
  res.send( author);
  console.log(author);
} );

app.route('/:id').delete( (req, res) => {
  author = "";
  res.send( req.params.id);
})