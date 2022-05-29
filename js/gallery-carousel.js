(function(){
    const slides = [
        '<div class="slide"><img src="img/our_gallery/gallery_1.png" alt="Gallery 1"></div>',
        '<div class="slide"><img src="img/our_gallery/gallery_2.png" alt="Gallery 2"></div>',
        '<div class="slide"><img src="img/our_gallery/gallery_3.png" alt="Gallery 3"></div>',
        '<div class="slide"><img src="img/our_gallery/gallery_4.png" alt="Gallery 4"></div>',
        '<div class="slide"><img src="img/our_gallery/gallery_5.png" alt="Gallery 5"></div>'
    ];

    let currentSlide = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.our-gallery-carousel .slide');
        slideContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    setInterval(nextSlide, 3000);

})();