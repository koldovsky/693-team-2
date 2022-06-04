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
        if (window.innerWidth >= 600) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth >= 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide]; 

            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    // setInterval(nextSlide, 5000);
    
    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        renderCarousel()
    }

    renderCarousel();

    const buttonForward = document.querySelector('.our-gallery-carousel .forward');
    buttonForward.addEventListener('click', nextSlide);

    const buttonBackward = document.querySelector('.our-gallery-carousel .backward');
    buttonBackward.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderCarousel);

})();