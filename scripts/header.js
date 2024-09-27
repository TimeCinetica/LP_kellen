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

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        header.classList.add('scrolled');
    } else header.classList.remove('scrolled');
});
