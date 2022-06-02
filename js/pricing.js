(function () {
        const pricingList = document.querySelector(".pricing_list");
        const pricingBtn = document.querySelectorAll(".pricing_btn");
        const containerFromPosition = document.querySelector(".pricing_list");
        const backgroundPosition = containerFromPosition.getBoundingClientRect();

        changeBackground(pricingList);

        function changeBackground(pricingList) {
                window.addEventListener('scroll', function () {
                        if ((backgroundPosition.top <= 200) && (backgroundPosition.top > (-600))) {
                                pricingList.classList.add('visible');
                        } else {
                                pricingList.classList.remove('visible');
                        }


                });
        }

        for (let btns of pricingBtn) {
                btns.addEventListener('click', function (event) {
                        console.log(event);
                });
        };
        function renderProducts(product){
                for (let product in products)
                pricingList.innerHTML += `<li class="pricing_li">
                <div class="container_pricing_li">
                    <div class="pricing_icon">
                        <img src="${imgUrl}" alt="circle">
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

        const productsJson =  `[
                            {   
                                "id": "1",
                                "name": "ESTANDAR",
                                "countInPack": 10,
                                "price": 12, 
                                "imgUrl": "img/icons/icon1.svg"
                            },
                            {
                                "id": "2",
                                "name": "RESERVA",
                                "countInPack": 24,
                                "price": 20,
                                "imgUrl": "img/icons/icon2.svg"
                            },
                            {   
                                "id": "3",
                                "name": "LIMITADA",
                                "countInPack": 6,
                                "price": 27,
                                "imgUrl": "img/icons/icon1.svg"
                            }
                        ]`;
         const products = JSON.parse(productsJson);
         renderProducts(products);
        // console.log(product.name);
})();