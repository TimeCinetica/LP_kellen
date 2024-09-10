const headerLinks = document.getElementsByClassName("Header-link");
const nLinks = headerLinks.length;

document.querySelectorAll('.Header-link').forEach((elemento) => {
    elemento.addEventListener('click', () => {
        removeClassActive();
        elemento.classList.add('active');
    });
});

function removeClassActive () {
    for (let i = 0; i < nLinks; i++) {
        headerLinks[i].classList.remove('active');
    }
}

// carousel 
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

let contador = 0;

carouselItems[contador].classList.add('active');

  
carouselPrev.addEventListener('click', () => {
    for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].classList.remove('active');
    }
    
});
  
carouselNext.addEventListener('click', () => {
    for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].classList.remove('active');
    }
});

