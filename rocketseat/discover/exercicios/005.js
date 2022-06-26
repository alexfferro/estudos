/**
 * Buscando e contando dados em arrays
 * 
 * Baseado no array de livros por categorias abaixo, faça os seguintes desafios
 *  Contar o número de categorias e o número de livros em cada categoria
 *  Contar o número de autores
 *  Mostrar os livros do autor Augusto Cury
 *  Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
 */

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [{
      title: 'Os segredos da mente milionaria',
      author: "T. Harv Eker",
    },{
      title: "O Homem mais rico da Babilônia",
      author: "George S. Clason",
    },{
      title: "Pai rico, Pai pobre",
      author: "Robert T. Kiyosaki e Sharon L. Lechter",
    },
    ],
  },
  {
    category: "Inteligencia Emocional",
    books: [
      {
        title: "Você é insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      }
    ],
  },
]

// Contar o número de categorias abaixo
const categories = booksByCategory.length
console.log(categories)
// contar o número de livros em cada categoria
for( category of booksByCategory){
  console.log('Total de livros da categoria: ' + category.category)
  console.log(category.books.length)
}
// contar o número de autores
function countAuthor(){
  let authors = [];
  
  for(let category of booksByCategory){
    for(let book of category.books){
      if(authors.indexOf(book.author) == -1){
        authors.push(book.author);
      }
    }  
  }
  console.log("Total de autores: " + authors.length)
}

countAuthor()

function booksOfAuthor(author){
  let books = [];
  
  for(let category of booksByCategory){
    for(let book of category.books){
      if(book.author === author){
        books.push(book.title);
      }
    }  
  }
  console.log("Livros do author: " + books)
}

booksOfAuthor('Augusto Cury')