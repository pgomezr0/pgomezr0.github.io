/*===== Menu Show =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== Active and Remove Menu Mobile =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== Scroll Reveal Animation =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// Scroll Home
sr.reveal('.home__title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__img',{delay:400})
sr.reveal('.home__social-icon', {interval: 200})

// Scroll About
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text', {delay: 400})

//Scroll Contact
sr.reveal('.contact__input', {interval: 200})

/*===== MIXITUP Filter =====*/
const mixer = mixitup('.portafolio__container', {
    selectors: {
        target: '.portafolio__content'
    },
    animation: {
        duration: 200
    }
});

//Link active portafolio
const linkPortafolio = document.querySelectorAll('.portafolio__item')

function activePortafolio(){
    if(linkPortafolio){
        linkPortafolio.forEach(l => l.classList.remove('active-portafolio'))
        this.classList.add('active-portafolio')
    }
}
linkPortafolio.forEach(l => l.addEventListener('click', activePortafolio))