- Foi necessário utilizar o seguinte comando para iniciar um projeto com vite
  > npm create vite@latest <appName> --template react
  > npm install
  > npm run dev 

- Fragment 
  É uma regra utilizada em arquivos .jsx que necessariamente devem retornar apenas um elemento, ou uma única tag, então uma solução é usar um fragment, ele é considerado uma div, porém não possui nenhum conteúdo, nem altera nenhum aspecto visual dentro da estrutura HTML. serve apenas para embrulhar outros componentes dentro de si.
  > Abertura de um fragment: <> | Fechamento de um fragment: </> 

- Export Function || Export Default
  **Export default**, funciona como um import normal
    > import Home from '../path'
  **Export Function**, economiza algumas linhas no componente, mas a forma de importar muda um pouco, sendo necessário embrulhar com chaves o nosso componente
    > import { Home } from '../path'

- Nomenclature para classes, atributes no JSX
  Uma diferença entre o HTML normal para a forma declarativa do React é que alguns atributos das tags, mudaram para o camelCase, ou seja no lugar de usar **background-color** por exemplo, utilizaremos **backgroundColor**.
  Outra mudança é o atributo de **class**, para que não conflite com algumas palavras reservadas do próprio react, alterou-se para **className**.
  
- Dicas de Organização de Páginas
  1. Utilizar uma pasta com o mesmo nome do componente, para organizar melhor os estilos e a importação. renomeando o arquivo para index.jsx. o Exemplo da pagina Home. Foi feito uma pasta de mesmo nome, e renomeando o arquivo que era Home.jsx para index.jsx, o react entende que se não tiver um caminho na importação, ele vai abrir o arquivo index.

- Propriedades de um componente
  um componente pode receber propriedades, e podemos resgata-las de diversas maneiras
  > <Card name='Alex' />
  O componente Card, esta recebendo uma propriedade chamada "name", posso resgata-la dessa forma.
  > `export function Card( props ){}`
  > `<h1> { props.name } </h1>`
  Ou então, posso desestruturar essas propriedades, utilizando as chaves {}
  > `export function Card( { name } ){}`
  > `<h1> { name } </h1>`