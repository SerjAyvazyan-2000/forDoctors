


let reviewsSwiper = new Swiper(".reviews-swiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop:true,

    pagination: {
        el: '.reviews-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.reviews-button-prev',
        prevEl: '.reviews-button-next',
    },
    breakpoints: {
        320: {slidesPerView: 1, spaceBetween: 12},
        540: {slidesPerView: 1, spaceBetween: 12,},
        576: {slidesPerView: 1.2},
        779: {slidesPerView: 1.5},
        954: {slidesPerView: 2},
        1200: {slidesPerView: 2},
        1400: {slidesPerView: 1},

    }


});



let howWorkSwiper = new Swiper(".opportunities-swiper", {
    spaceBetween: 30,
    slidesPerView: 2.4,
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true

    },

    navigation: {
        nextEl: '.reviews-button-prev',
        prevEl: '.reviews-button-next',
    },
    breakpoints: {
        320: {slidesPerView: 1.1,spaceBetween: 12},
        540: {slidesPerView: 1.1,spaceBetween: 12,},
        576: {slidesPerView: 1.5},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2},
        1139: {slidesPerView: 2.4},

    },



});




