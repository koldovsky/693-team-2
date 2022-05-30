(function(){
    const slides = [
      '<div class= "slide"><img src = "img/testimonials/linda.jpg" alt= "Linda"</div>',
      '<div class= "slide"><img src = "img/testimonials/devid.jpg" alt= "Devid"</div>',
      '<div class= "slide"><img src = "img/testimonials/kyli.jpg" alt= "Kyli"</div>',
      '<div class= "slide"><img src = "img/testimonials/lucas.jpg" alt= "Lucas"</div>',
    ];
  
    let currentSlide = 0;
  
    function renderCarousel() {
      const slidelContainer = document.querySelector(".testimonials-carousel .slide");
      slidelContainer.innerHTML = slides[currentSlide];
      if (window.innerWidth >= 600) {
        const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slidelContainer.innerHTML += slides[secondSlide];
        if (window.innerWidth >= 900) {
          const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
          slidelContainer.innerHTML += slides[thirdSlide];
        }
      }
    }
  
    function nextSlide() {
      currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      renderCarousel();
    }
    function prevSlide() {
      currentSlide = currentSlide - 1 <= 0  ? slides.length - 1  : currentSlide - 1;
      renderCarousel();
    }
  
    //setInterval(nextSlide, 1000);
    renderCarousel();

    const btnForward = document.querySelector(".testimonials-carousel .forward");
    btnForward.addEventListener('click', nextSlide);

    const btnBack = document.querySelector(".testimonials-carousel .back");
    btnBack.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderCarousel);
  }) ();