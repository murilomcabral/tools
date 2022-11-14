const tagSVG = document.querySelector('svg');

const pathDoSVG = document.querySelector('svg path');
const tamanhoTotalDoPath = pathDoSVG.getTotalLenght();
tagSVG.style.setProperty('--tamanhoTotalDoPath',tamanhoTotalDoPath);

console.log(tamanhoTotalDoPath);

window.addEventListener('scroll',
function(){
   let navBar = document.querySelector('.notSticky')
   if (window.pageYOffset >= 200) {
      navBar.classList.add('sticky');
   }
});