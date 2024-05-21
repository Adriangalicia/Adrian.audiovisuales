var swiper = new Swiper(".mySwiper", {

    sliedesPerView: 1,
    spaceBetween: 30,
    grabCursor:true,
    loop:true,
    breakpoints : {
        991: {
            slidesPerView:4
        }
    }

});