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
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    setInterval(nextSlide, 3000);
})();