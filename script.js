const headerLinks = document.getElementsByClassName("Header-link");

document.querySelectorAll('.Header-link').forEach((elemento) => {
    elemento.addEventListener('click', () => {
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].classList.remove('active');
        }
        elemento.classList.add('active');
    });
});