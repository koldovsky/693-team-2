(function () {
        const pricingList = document.querySelector(".pricing_list");
        const firstPricingBtn = document.getElementById('first_pricing_btn');
        const pricingBtn = document.querySelectorAll(".pricing_btn");


        firstPricingBtn.addEventListener('click', function(){
               // console.log("clicked");
        });


        window.addEventListener('scroll', function () {
                let scrollPos = window.scrollY;
                console.log(scrollPos);
                if (scrollPos > 9500 && scrollPos<9900 ) {
                        pricingList.classList.add('visible');
                }else{
                        pricingList.classList.remove('visible');
                }
        });

        for (let btns of pricingBtn){
                btns.addEventListener('click', function(){
                        console.log("clicked");
                });
        };
})();