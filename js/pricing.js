(function () {
        const pricingList = document.querySelector(".pricing_list");
        const pricingBtn = document.querySelectorAll(".pricing_btn");
        const modalCart = document.querySelector('.modal')
        for (let btns of pricingBtn) {
                btns.addEventListener('click', function () {
                          modalCart.classList.add('.visible');
                });
        };


        function renderProducts(products){
                for (let product of products)
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
        // const productJSON =`[
        //     {   
        //         "id": "1",
        //         "name": "ESTANDAR",
        //         "countInPack": 10,
        //         "price": 12, 
        //         "imgUrl": "img/icons/icon1.svg"
        //     },
        //     {
        //         "id": "2",
        //         "name": "RESERVA",
        //         "countInPack": 24,
        //         "price": 20,
        //         "imgUrl": "img/icons/icon2.svg"
        //     },
        //     {   
        //         "id": "3",
        //         "name": "LIMITADA",
        //         "countInPack": 6,
        //         "price": 27,
        //         "imgUrl": "img/icons/icon1.svg"
        //     }
        // ]
        // `;
        // const products = JSON.parse(productJSON);
        // renderProducts(products);

        async function loadProducts (){
                const response = await fetch('products.json');
                const products = await response.json();
                renderProducts(products);
        };
        loadProducts();
})();