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
    }
  
    function nextSlide() {
      currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      renderCarousel();
    }
  
    setInterval(nextSlide, 1000);
    renderCarousel();
  }) ();