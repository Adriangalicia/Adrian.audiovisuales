var swiperLeft = new Swiper(".mySwiper-left", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        991: {
            slidesPerView: 4
        }
    }
});

var swiperRight = new Swiper(".mySwiper-right", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        reverseDirection: true, // Hace que el carrusel se mueva en la dirección opuesta
        disableOnInteraction: false,
    },
    breakpoints: {
        991: {
            slidesPerView: 4
        }
    }
});