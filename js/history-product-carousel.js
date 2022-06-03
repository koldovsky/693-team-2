(function() {
    const slides = [
        '<div class="slide"><img class="history-product__img-carousel" src="img/cigars-carousel/cigarillos.jpg" alt="cigarillos"></div>',
        '<div class="slide"><img class="history-product__img-carousel" src="img/cigars-carousel/classic-maduro.jpg" alt="classic-maduro"></div>',
        '<div class="slide"><img class="history-product__img-carousel" src="img/cigars-carousel/cohiba-black.jpg" alt="cohiba-black"></div>',
        '<div class="slide"><img class="history-product__img-carousel" src="img/cigars-carousel/padron.jpg" alt="padron"></div>',
        '<div class="slide"><img class="history-product__img-carousel" src="img/cigars-carousel/slr.jpg" alt="slr"></div>'
    ];

let currentSlide = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.cigars__carousel .slide');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth >= 700) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth >= 990) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
                if (window.innerWidth >= 1300) {
                const fourthSlide = thirdSlide + 1 >= slides.length ? 0 : thirdSlide + 1;
                slideContainer.innerHTML += slides[fourthSlide];
                }
            }     
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        renderCarousel();
    }

    renderCarousel();

    const btnRight = document.querySelector('.cigars__carousel .right');
    btnRight.addEventListener('click', nextSlide);

    const btnLeft = document.querySelector('.cigars__carousel .left');
    btnLeft.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderCarousel);

}) ();