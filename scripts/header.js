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
