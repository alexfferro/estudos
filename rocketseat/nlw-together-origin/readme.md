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

# Anotações sobre a aula 2

## HTML

### Estrutura HTML
Foi inserido um novo link, agora para compor alguns ícones no nosso trabalho, diretamente do <a href="https://icomoon.io/"> Icomoon</a>.

Adicionamos também duas novas seções, uma referente ao conteúdo "SOBRE" onde possui uma estrutura bem parecida com a "HOME", e também uma sessão "SERVIÇOS" que apesar de ser bem parecida com a anterior, é composta também por alguns cards, que foram estilizados de uma forma bem interessante.

No final do body, inserimos um link para os script do JavaScript.

Irei deixar como lembrete, quando finalizar o projeto do OriginSix, voltar para esse Documento HTML e estudar novamente, o Professor Mayk utilizou muitos id e classes nas tags, principalmente nas semânticas.
E eu gostaria de entender perfeitamente o motivo do porquê.

## CSS

### Estrutura CSS

Novamente, essa é a parte onde a magia aconteceu, o CSS foi recheado de novas informações interessantes, inclusive animações foram feitas através do CSS. Achei fantástico.

Começando então na ordem que o documento esta disposto.

Durante a aula 2 foi proposto embelezar o menu, aplicar animações, ícones e fazer as sessões de "SOBRE" e "SERVIÇOS".

Primeiro aplicamos no seletor de lista uma configuração de list-style, para retirar os marcadores para none.

Logo abaixo, realizamos também uma configuração em toda a página. Através do seletor `html{}` foi possível aplicar uma propriedade chamada *scroll-behavior: smooth*, essa propriedade faz com que a movimentação dentro da página utilizando o scroll ou o index do menu, seja suave e agradável.

Durante a criação e estilização do menu, foi feito uma animação, para que quando o mouse ficasse sobre o menu, iria aparecer uma listra abaixo do item. Foi realmente interessante o jeito que o professor fez isso.

Basicamente, foi feito através da pseudo-classe after, ele criou uma listra, de 2px de altura, e a animação da largura iria transicionar de 0% até 100%, quando o hover fosse ativado.
O segredo do posicionamento foi os position absolute do after, que ficou absoluto em relação a classe pai dela, que seria o `nav ul li a` então com os posicionamento de left e bottom, foi posta diretamente abaixo da ancora.
Achei muito massa de fazer isso.

A parte do Toggle é uma sacada bem interessante também, a função do toggle basicamente é como se fosse um interruptor, onde quando clicamos no hambúrguer do menu, ele vai se estender e preencher a tela toda, quando apertar em alguma opção do menu ou no X, ele deve fechar a janela do menu e voltar para o nosso site.

Essa parte vou explicar melhor com o JavaScript, mas no geral as sessões que foram feitas, tiveram uma configuração bem parecida com as anteriores.

## JavaScript

### Estrutura JavaScript

A primeira introdução ao JavaScript foi bem bacana, é bem complicado chegar de paraquedas e entender de fato como funciona um algoritmo, mas com a prática a gente se acostuma, preciso entender melhor como funciona o DOM, mas vamos focar no que foi preparado na aula.

A primeira funcionalidade foi fazer o toggle funcionar. Então, através do DOM, conseguimos guardar em variáveis os elementos dentro de nav, e também uma lista dos elementos que possuem o id toggle.

Em seguida, foi utilizado um bloco de repetição, o for para percorrer a lista de elementos com toggle. quando encontrasse um elemento, ia disparar um Event Listener, basicamente é um ouvinte de eventos, sempre que acontecer um evento naquela tag, ele é acionado.
O Evento que estamos esperando é um click, sempre que se clicar em um elemento do toggle, iremos atribuir ao nav a classe "show".
Então basicamente é isso que acontece: clicamos no hambúrguer e acionamos o evento, a nav que antes não tinha a classe show, passa a ter, e a classe show foi estilizada para preencher toda a viewport, e mostrar o menu todo bonito.
quando clicamos novamente no outro elemento toggle, que é o X, a tag nav remove a classe "show", voltando ao site normal.

O próximo passo foi fazer com que ao clicar em um item do menu, o menu sumia e direcionava o usuário para o local especificado.

para isso foi necessário guardar a referencia a todos os links, com o DOM também.
Depois foi a mesma ideia anterior, sempre que o event listener detectava um click em algum dos links, ele removia a classe show da nav e o site voltava ao normal, e o direcionamento do link levou o usuário ate a seção escolhida.

A ultima parte do JavaScript foi fazer com que ao utilizar o scroll, a barra de rolagem, fosse criado uma sombra no header da página.
Para isso foi utilizado o DOM, e uma das variadas funções dele, detectar a altura do header, depois disso foi um simples "if" para detectar se barra de rolagem no eixo Y, scrollY fosse maior que a altura do header, significava que a rolagem começou e então aplicava uma classe no header, chamada de scroll. que no CSS aplicava a sombra.
Caso o resultado fosse menor que a altura do header, removia a classe scroll do header.