// ABRE E FECHA MENU QUANDO CLICAR NO HAMBURGUE R E X 
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

// QUANDO CLICLAR EM UM ITEM DO MENU, ESCONDER O MENU

const links = document.querySelectorAll('nav ul li a');

for(const link of links) {
  link.addEventListener('click', function(){
    nav.classList.remove('show');
  })
}

// MUDAR O HEADER DA PAGINA QUANDO ROLAR O SCROLL

const header = document.querySelector('#header');
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
  if(this.window.scrollY >= navHeight){
    // MAIOR QUE A ALTURA DO HEADER
    header.classList.add('scroll')
  } else{
    // MENOR QUE A ALTURA DO HEADER
    header.classList.remove('scroll')
  }
})