// Selecionar os elementos do carrossel
const feedbackscarousel = document.querySelector('.feedbacks-carousel');
const feedbackscarouselInner = document.querySelector('.feedbacks-carousel-inner');
const feedbackscarouselItems = document.querySelectorAll('.feedbacks-carousel-item');
const feedbackscarouselPrev = document.querySelector('#feedbacks-carousel-prev');
const feedbackscarouselNext = document.querySelector('#feedbacks-carousel-next');

// Inicializar o contador
let contador = 0;

// Adicionar a classe feedbackscarousel-active ao primeiro item do carrossel
feedbackscarouselItems[contador].classList.add('feedbacks-carousel-active');

// Função para navegar pelo carrossel
function navigatefeedbacksCarousel(direction) {
  // Remover a classe feedbackscarousel-active de todos os itens do carrossel
  for (let i = 0; i < feedbackscarouselItems.length; i++) {
    feedbackscarouselItems[i].classList.remove('feedbacks-carousel-active');
  }

  // Atualizar o contador
  if (direction === 'prev') {
    contador = Math.max(contador - 1, 0);
  } else if (direction === 'next') {
    contador = Math.min(contador + 1, feedbackscarouselItems.length - 1);
  }

  // Adicionar a classe feedbackscarousel-active ao item do carrossel atual
  feedbackscarouselItems[contador].classList.add('feedbacks-carousel-active');
}

// Adicionar eventos de click aos botões de navegação
feedbackscarouselPrev.addEventListener('click', () => {
  navigatefeedbacksCarousel('prev');
});

feedbackscarouselNext.addEventListener('click', () => {
  navigatefeedbacksCarousel('next');
});