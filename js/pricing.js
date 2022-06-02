(function () {
        const pricingList = document.querySelector(".pricing_list");
        const pricingBtn = document.querySelectorAll(".pricing_btn");
        // const containerFromPosition = document.querySelector(".pricing_list");
        // const backgroundPosition = containerFromPosition.getBoundingClientRect();

        // changeBackground(pricingList);

        // function changeBackground(pricingList) {
        //         window.addEventListener('scroll', function () {
        //                 if ((backgroundPosition.top <= 200) && (backgroundPosition.top > (-600))) {
        //                         pricingList.classList.add('visible');
        //                 } else {
        //                         pricingList.classList.remove('visible');
        //                 }


        //         });
        // }

        for (let btns of pricingBtn) {
                btns.addEventListener('click', function (event) {
                        console.log(event);
                });
        };


        function renderProducts(products){
                for (let product in products)
                pricingList.innerHTML += `<li class="pricing_li">
                <div class="container_pricing_li">
                    <div class="pricing_icon">
                        <img src="${product.imgUrl}" alt="circle">
                    </div>
                    <div class="pricing_tabacco_kind">
                        <h3 class="pricing_h3">${product.name} </h3>
                    </div>
                    <div class="pricing_quantity">
                        <p class="pricing_p">${product.countInPack}-Pack</p>
                    </div>
                    <div class="pricing_money">
                        <span class="pricing_span_gold">${product.price}$ </span><span class="pricing_span_grey">| per
                            cigar</span>
                    </div>
                    <div class="pricing_button_order">
                        <button class="btn_light pricing_btn" id="first_pricing_btn">ORDER</button>
                    </div>
                </div>
            </li>`;
        };


        async function loadProducts (){
                const response = await fetch('products.json');
                const products = await response.json();
                renderProducts(products);
        };
        loadProducts();
})();