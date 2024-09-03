function listBg() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.classList.toggle('bg-transparent');
    navbarToggler.classList.toggle('bg-slate-950');
}

function scrollSection(link) {
    let href = link.getAttribute('href');
    const html = document.documentElement;
    console.log(href);
    if (href === '#about-section')
    {
        if(window.innerHeight>737 && window.innerWidth>1368) 
        {
            html.classList.remove('scroll-p-14');
            html.classList.add('scroll-p-6');
        }
        else 
        {
            html.classList.remove('scroll-p-6');
            html.classList.add('scroll-p-14');
        }
    }
    else {
        html.classList.remove('scroll-p-6');
        html.classList.add('scroll-p-14');
    }
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