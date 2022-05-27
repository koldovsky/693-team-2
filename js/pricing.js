(function () {
        const pricingList = document.querySelector(".pricing_list");
        console.log(pricingList);


        window.addEventListener('scroll', function () {
                let scrollPos = window.scrollY;
                console.log(scrollPos);
                if (scrollPos > 9100 && scrollPos<9800 ) {
                        pricingList.classList.add('visible');
                }else{
                        pricingList.classList.remove('visible');
                }
        })
})();