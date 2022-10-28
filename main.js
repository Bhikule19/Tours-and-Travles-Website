let searchBtn = document.getElementById('search-btn');
let searchBar = document.querySelector('.search-bar-container')
let formBtn = document.getElementById('login-btn');
let loginForm = document.querySelector('.login-form-container')
let formClose = document.getElementById('form-close')
let menuBar = document.getElementById('menu-bar')
let navBar = document.querySelector('.navbar')
let videoBtn = document.querySelectorAll('.vid-btn')



window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
})

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.getElementById('video-slider').src = src;
    })
})


var swiper = new Swiper(".review-slider", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});


