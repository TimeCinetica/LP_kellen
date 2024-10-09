const feedbackscarouselItems = document.querySelectorAll('.feedbacks-carousel-item');
const feedbackscarouselPrev = document.querySelector('#feedbacks-carousel-prev');
const feedbackscarouselNext = document.querySelector('#feedbacks-carousel-next');

let contadorFeedbacks = 0;

feedbackscarouselItems[contadorFeedbacks].classList.add('feedbacks-carousel-active');

function navigatefeedbacksCarousel(direction) {

  feedbackscarouselItems.forEach(item => {
    item.classList.remove('feedbacks-carousel-active');
  });

  if (direction === 'prev') {
    contadorFeedbacks = (contadorFeedbacks === 0) ? feedbackscarouselItems.length - 1 : contadorFeedbacks - 1;
  } else if (direction === 'next') {
    contadorFeedbacks = (contadorFeedbacks === feedbackscarouselItems.length - 1) ? 0 : contadorFeedbacks + 1;
  }
  
  feedbackscarouselItems[contadorFeedbacks].classList.add('feedbacks-carousel-active');
}

feedbackscarouselPrev.addEventListener('click', () => {
  navigatefeedbacksCarousel('prev');
});

feedbackscarouselNext.addEventListener('click', () => {
  navigatefeedbacksCarousel('next');
});

function autoRotateCarousel() {
  setInterval(() => {
    navigatefeedbacksCarousel('next');  
  }, 7000);  
}

autoRotateCarousel();
