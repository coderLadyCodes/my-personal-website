const menu = document.querySelector('.menu');
const ul = document.querySelector('.ull');

// TOGGLE HUMBERGER
menu.addEventListener('click', () => {
    menu.classList.toggle('change');
    ul.classList.toggle('change');
});

