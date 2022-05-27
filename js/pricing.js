(function () {
        const pricingList = document.querySelector(".pricing_list");
        const pricingBtn = document.querySelectorAll(".pricing_btn");


        changeBackground(pricingList);

        for (let btns of pricingBtn){
                btns.addEventListener('click', function(){
                        console.log("cliked");
                });
        };
})();

function changeBackground(pricingList) {
        window.addEventListener('scroll', function () {
                let scrollPos = window.scrollY;
                if (scrollPos > 9000 && scrollPos < 9900) {
                        pricingList.classList.add('visible');
                } else {
                        pricingList.classList.remove('visible');
                }
        });
}
