close_pro(); 
showdetailP();

function close_pro(){
    let clo = document.getElementById("close-pro");

    clo.addEventListener("click",function(){
        document.querySelector(".popup-p").style.top = "-2000";
        document.querySelector(".popup-p .pre-body .info-pro").remove();
    });
}
function showdetailP(){
    let allPro = document.querySelectorAll(".flash-item .txt .product-title");
   
    for( i = 0; i < allPro.length; i++){
        var button = allPro[i];
        button.addEventListener("click", addCartClicked1);
    }

    // allPro.forEach((item, n) =>{
    //     item.addEventListener("click",function(){
    //         let popup_p = document.createElement("div");
    //         popup_p.classList.add("popup-p");
    //         let pro = ` <div class="pre-body">
    //                         <div class="img">
    //                             <div class="img-container">
    //                                 <img src="img2/phone/p3-1.jpg" alt="">
    //                             </div>
    //                         </div>
    //                         <div class="txt">
    //                             <h2 class="p-title">Iphone Xr</h2>
    //                             <hr>
    //                             <h3 class="p-price">$200</h3>
    //                             <ul>
    //                                 <li>Wireless, Bluetooth, USB, HDMI</li>
    //                                 <li>4K Ultra HD (2160P)</li>
    //                                 <li>Quantum Processor 4K</li>
    //                             </ul>
    //                             <input type="number" value="1">
    //                             <div>
    //                                 <button>Add to Cart</button>
    //                             </div>
                                
    //                             <hr>
    //                             <div class="social">
    //                                 <i class="fa-brands fa-facebook"></i>
    //                                 <i class="fa-brands fa-pinterest"></i>
    //                                 <i class="fa-brands fa-twitter"></i>
    //                                 <i class="fa-brands fa-linkedin"></i>
    //                             </div>
    //                             <div class="store">
    //                                 <p><i class="fa-solid fa-shop"></i> &nbsp;Pickup: Available today at store</p>
    //                                 <p><i class="fa-solid fa-shield-dog"></i> &nbsp;&nbsp;1 Year Local Official Distributor Warranty</p>
    //                             </div>
    //                         </div>
    //                         <div class="war">
    //                             <div class="war-con">
    //                                 <i class="fa-solid fa-truck-arrow-right"></i>
    //                                 <h3>International Shipment</h3>
    //                                 <p>Your orders are shipped seamlessly between countries</p>
    //                             </div>
    //                             <div class="war-con">
    //                                 <i class="fa-solid fa-user-shield"></i>
    //                                 <h3>30 Days Warranty</h3>
    //                                 <p>You have the right to return your orders within 30 days.</p>
    //                             </div>
    //                             <div class="war-con">
    //                                 <i class="fa-regular fa-credit-card"></i>
    //                                 <h3>Secure Payment</h3>
    //                                 <p>Your payments are secure with our private security network.</p>
    //                             </div>
    //                         </div>
    //                     </div>`;

    //         popup_p.innerHTML  = pro;

    //         document.body.appendChild(popup_p);

    //     });
    // });
}

//Add to Cart

function addCartClicked1(event){
    var button = event.target;
    var shopProducts = button.parentElement.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    document.querySelector(".popup-p").style.top = "0";
   
    addProductToCart1(title,price,productImg);
    // number of cart 
    // var cart_box = document.querySelectorAll(".cart-content .cart-box");
    // document.querySelector(".num").innerText = cart_box.length;
    // updatetotal();
   
}
function addProductToCart1(title,price,productImg){
    var cartShopBox1 = document.createElement("div");
    cartShopBox1.classList.add("info-pro");
    
    // cartShopBox1.classList.add("popup-p");
    // var cartItems = document.getElementsByClassName("cart-content")[0];
    // var cartItemsName = cartItems.getElementsByClassName("cart-product-title");
    // for ( var i = 0 ; i< cartItemsName.length; i++){
    //     if(cartItemsName[i].innerHTML == title){
    //         alert("You have already add this item to cart");
    //         return;
    //     }
    // }

//    var imgcontent = `
//                     <div class="img">
//                         <div class="img-container">
//                             <img src="img2/phone/p3-1.jpg" alt="">
//                         </div>
//                     </div>
//    `;

  var  cartBoxContent1 = `
                       

                             <div class="img">
                                <div class="img-container">
                                    <img src="${productImg}" alt="">
                                </div>
                            </div>
                            <div class="txt">
                                <h2 class="p-title">${title}</h2>
                                <hr>
                                <h3 class="p-price">${price}</h3>
                                <ul>
                                    <li>Wireless, Bluetooth, USB, HDMI</li>
                                    <li>4K Ultra HD (2160P)</li>
                                    <li>Quantum Processor 4K</li>
                                </ul>
                                <input type="number" value="1">
                                <div>
                                    <button>Add to Cart</button>
                                </div>
                                
                                <hr>
                                <div class="social">
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-pinterest"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-linkedin"></i>
                                </div>
                                <div class="store">
                                    <p><i class="fa-solid fa-shop"></i> &nbsp;Pickup: Available today at store</p>
                                    <p><i class="fa-solid fa-shield-dog"></i> &nbsp;&nbsp;1 Year Local Official Distributor Warranty</p>
                                </div>
                            </div>
                            <div class="war">
                                <div class="war-con">
                                     <i class="fa-solid fa-truck-arrow-right"></i>
                                     <h3>International Shipment</h3>
                                     <p>Your orders are shipped seamlessly between countries</p>
                                 </div>
                                 <div class="war-con">
                                     <i class="fa-solid fa-user-shield"></i>
                                  <h3>30 Days Warranty</h3>
                                  <p>You have the right to return your orders within 30 days.</p>
                               </div>
                               <div class="war-con">
                                   <i class="fa-regular fa-credit-card"></i>
                                   <h3>Secure Payment</h3>
                                    <p>Your payments are secure with our private security network.</p>
                                </div>
                             </div>
                        
    `;
    cartShopBox1.innerHTML = cartBoxContent1;
    document.querySelector(".popup-p .pre-body").appendChild(cartShopBox1);
    
    
    // cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click",removeCartItem);
    // cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged)
}
 
   

