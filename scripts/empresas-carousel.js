// Selecionar os elementos do carrossel
const empresascarousel = document.querySelector('.empresas-carousel');
const empresascarouselInner = document.querySelector('.empresas-carousel-inner');
const empresascarouselItems = document.querySelectorAll('.empresas-carousel-item');
const empresascarouselPrev = document.querySelector('#empresas-carousel-prev');
const empresascarouselNext = document.querySelector('#empresas-carousel-next');

// Inicializar o contador
let contadorEmpresas = 0;

// Adicionar a classe empresascarousel-active ao primeiro item do carrossel
empresascarouselItems[contadorEmpresas].classList.add('empresas-carousel-active');
console.log(empresascarouselItems[contadorEmpresas]);

// Função para navegar pelo carrossel
function navigateempresasCarousel(direction) {
  // Remover a classe empresascarousel-active de todos os itens do carrossel
  for (let i = 0; i < empresascarouselItems.length; i++) {
    empresascarouselItems[i].classList.remove('empresas-carousel-active');
  }

  // Atualizar o contadorEmpresas
  if (direction === 'prev') {
    contadorEmpresas = Math.max(contadorEmpresas - 1, 0);
  } else if (direction === 'next') {
    contadorEmpresas = Math.min(contadorEmpresas + 1, empresascarouselItems.length - 1);
  }

  // Adicionar a classe empresascarousel-active ao item do carrossel atual
  empresascarouselItems[contadorEmpresas].classList.add('empresas-carousel-active');
}

// Adicionar eventos de click aos botões de navegação
empresascarouselPrev.addEventListener('click', () => {
  navigateempresasCarousel('prev');
});

empresascarouselNext.addEventListener('click', () => {
  navigateempresasCarousel('next');
});