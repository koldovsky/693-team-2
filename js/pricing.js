(function () {
        const pricingList = document.querySelector(".pricing_list");
        const pricingBtn = document.querySelectorAll(".pricing_btn");
        const containerFromPosition = document.querySelector(".pricing_list");
        const backgroundPosition = containerFromPosition.getBoundingClientRect();

        changeBackground(pricingList);

        for (let btns of pricingBtn) {
                btns.addEventListener('click', function () {
                        console.log("clicked");
                });
        };

        function changeBackground(pricingList) {
                window.addEventListener('scroll', function () {
                        if ((backgroundPosition.top<=200)&&(backgroundPosition.top>(-600))) {
                                pricingList.classList.add('visible');
                        } else {
                                pricingList.classList.remove('visible');
                        }


                });
        }

        
})();