(function(){
    const slides = [
       '<div class = slidep><img src="img/partners/british-american-tobacco.png" alt = "British-American-tobacco"></div>',
       '<div class = slidep><img src="img/partners/future-company.png" alt = "Future Company"></div>',
       '<div class = slidep><img src="img/partners/cigar-media-assosiation.png" alt = "Sigare Media Assosiation"></div>',
       '<div class = slidep><img src="img/partners/tobacconist.png" alt = "Tobacconist"></div>'
    ];

    let currentSlide = 0;

    function renderCarousel() {
       const slidepContainer = document.querySelector('.main-partners-carousel .slidep');
       slidepContainer.innerHTML = slides[currentSlide];
       if (window.innerWidth >= 600) {
           const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
           slidepContainer.innerHTML += slides[secondSlide];
           if (window.innerWidth >= 900) {
            const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
            slidepContainer.innerHTML += slides[thirdSlide];

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

    const btnForward = document.querySelector('.main-partners-carousel .forwardp');
    btnForward.addEventListener('click', nextSlide);

    const btnBack = document.querySelector('.main-partners-carousel .backp');
    btnBack.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderCarousel);

    renderCarousel();

})();