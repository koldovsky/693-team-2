(function(){
    const slides = [
       '<div class = slidep><img src="img/partners/partner_ann.png" alt = "Partner Ann"></div>',
       '<div class = slidep><img src="img/partners/partner_orysia.png" alt = "Partner Orysia"></div>',
       '<div class = slidep><img src="img/partners/partner_stepan.png" alt = "Partner Stepan"></div>',
       '<div class = slidep><img src="img/partners/partner_taras.png" alt = "Partner Taras"></div>'
    ];

    let currentSlide = 0;

    function renderCarousel() {
       const carouselContainer = document.querySelector('.main-partners-carousel');
       carouselContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    setInterval(nextSlide, 3000);
})();