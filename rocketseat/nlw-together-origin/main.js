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

/* TESTIMONIALS CARROUSEL */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* SCROLL REVEAL */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,

{ interval: 100})


/* BOTÃO DO BACK TO TOP */

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if(window.scrollY >= 560){
    backToTopButton.classList.add('show');
  }else {
    backToTopButton.classList.remove('show');
  }
})