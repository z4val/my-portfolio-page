function listBg() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.classList.toggle('dark:bg-transparent');
    navbarToggler.classList.toggle('dark:bg-slate-950');
}

document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 150) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-slate-950');
        navbar.classList.add('border-b');
    } else {
        navbar.classList.remove('bg-slate-950');
        navbar.classList.remove('border-b');
    }
});