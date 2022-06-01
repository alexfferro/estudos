# Anotações sobre a aula 1 

## HTML

### Estrutura HTML

Uma estrutura básica HTML, utilizando tags semânticas, como header para cabeçalhos, nav para menu de navegação, main e sections para o conteúdo do site.
links apontando para os estilos e fontes.
foram atribuídos também identificadores e classes para algumas tags, para manter uma organização melhor quando for estilizar os componentes.

## CSS

### Estrutura CSS

O CSS é onde a magia aconteceu, foram apresentados muitos conteúdos e vou tentar listar todos aqueles que foram mais relevantes para mim.

Começando com uma estrutura que comentamos como RESET, basicamente foi zerado toda a margin e o padding do nosso site, margin é o espaço de fora da nossa caixa, e o padding é o espaço de dentro da nossa caixa.

Além de ter utilizado um atributo chamado de *box-sizing: border-box*, Maykão falou que o box-sizing se comporta de forma automática, reajustando a largura total do nosso bloco, por exemplo: 

20px -> margin | 100px Box | 20px <- margin => Totalizando 140px 

Com o border-box, só precisamos passar o parâmetro o tamanho total de 140px, que a propriedade faz o calculo automaticamente, garantindo que teremos a caixa no tamanho especificado.

Criamos também uma seção de variáveis, basicamente utilizando a root, é possível criar variáveis para aplicar em todo o documento, e é uma boa prática. Nele colocamos a paleta de cores em hsl, que é uma forma de cor utilizando saturação e luminosidade.

O Botão é o proximo componente que irei mencionar, confesso que não entendi bem o conceito de inline-flex, mas pelo que entendi faz referencia com o tipo de display da tag, como a tag <a> é inline, o CSS não consegue dar uma altura ou largura para ela, assim é necessário transformar ela em display block. porém o block iria pegar a largura total do pai dele, que seria basicamente a largura toda da viewport. o que também não é interessante.
Então ele usou um display chamado de inline-flex. que pelo que entendi, garante que possamos alterar a altura do nosso botão como quisermos, como se fosse um block, mas também conseguimos posicionar os elementos dentro do bloco com o align-itens.

O Divider é bem simples e intuitivo de fazer, e é bem legal de fazer esses divisores.

A seção de conteúdos, ou seja as sections foram nomeadas de containers, no CSS existe uma config especifica que se aplica a basicamente todas as seções e por isso foi colocada logo aqui, que é um padrão de de margin do conteúdo. 

o container que segura a primeira seção também tem outra classe chamada de grid, o objetivo de ter essa classe foi para utilizar uma propriedade chamada gap, que pelo que entendi, distancia os elementos filhos entre si.

O Header, nosso cabeçalho ficou fixo, graças a uma propriedade chamada de position: fixed.
foi necessário utilizar também o top e left e z-index, para garantir que as caixas de baixo, não iriam empurrar o conteúdo do header, evitando de quebrar o site.

Nosso Menu, a tag semântica <nav> ta utilizando display flex, o que deixa todo os elementos na mesma linha, e utilizando o justify-content: space-between, foi possível alinhar os conteúdos como se estivessem justificados, cada um em uma extremidade.

Na sessão home, foi colocado uma propriedade chamada de overflow:hidden, que basicamente vai esconder o conteúdo que passou demais da largura da viewport.

na parte da imagem, foi utilizado uma pseudo-classe, chamada de ::before, onde foi construído uma especie de caixa colorida, por trás da imagem. é um efeito bem bacana.
o segredo em deixar ela por trás da imagem, se da ao position relative e z-index.
é necessário também usar bem a cabeça, na hora de calcular a posição da caixa.

