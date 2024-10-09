const empresascarouselItems = document.querySelectorAll('.empresas-carousel-item');
const empresascarouselPrev = document.querySelector('#empresas-carousel-prev');
const empresascarouselNext = document.querySelector('#empresas-carousel-next');

let contadorEmpresas = 0;

empresascarouselItems[contadorEmpresas].classList.add('empresas-carousel-active');

function navigateempresasCarousel(direction) {

  empresascarouselItems.forEach(item => {
    item.classList.remove('empresas-carousel-active');
  });

  if (direction === 'prev') {
    contadorEmpresas = (contadorEmpresas === 0) ? empresascarouselItems.length - 1 : contadorEmpresas - 1;
  } else if (direction === 'next') {
    contadorEmpresas = (contadorEmpresas === empresascarouselItems.length - 1) ? 0 : contadorEmpresas + 1;
  }
  
  empresascarouselItems[contadorEmpresas].classList.add('empresas-carousel-active');
}

empresascarouselPrev.addEventListener('click', () => {
  navigateempresasCarousel('prev');
});

empresascarouselNext.addEventListener('click', () => {
  navigateempresasCarousel('next');
});

function autoRotateCarousel() {
  setInterval(() => {
    navigateempresasCarousel('next');  
  }, 4000);  
}

autoRotateCarousel();