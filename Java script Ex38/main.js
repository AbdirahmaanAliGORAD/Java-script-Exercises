const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', (e) => {
    e.preventDefault();  // Ka hortag bogga inuu u boodo "#" marka la riixo
    navbar.classList.toggle('active');  // Ku dar/ka saar fasalka "active" ee navbar-ka
});
// Page Switching
const links = document.querySelectorAll('[data-page]');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetPage = link.dataset.page;

        // Dhammaan pages qaari
        pages.forEach(page => page.classList.remove('active'));

        // Page cusub muuji
        document.getElementById(targetPage).classList.add('active');

        // Mobile menu xidh
        navbar.classList.remove('active');
    });
});