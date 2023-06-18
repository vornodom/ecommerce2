addpro_shop();
function addpro_shop(){
    let shop_item = document.createElement("div");
    shop_item.classList.add("shop-item");
    var item1 = "";
    

    for( i = 0; i < phone.length; i++){
      
        item1 = item1 + `<div class="flash-item filterDiv phones">
                            <div class="img">
                                <img src="${phone[i]['img']}" alt="" class="product-img">
                                <div class="sale">
                                    Sale!
                                </div>
                            </div>
                            <div class="txt">
                                <h4 class="product-title">${phone[i]['name']}</h4>
                                <div>
                                   
                                    <p class="price">$${phone[i]['price']}</p>
                                </div>
                                <button  class="add-cart">Add to cart</button>
                            </div>
                        </div>`;
         
    }

    for( i = 0; i < compu.length; i++){
      
        item1 = item1 + `<div class="flash-item filterDiv compus">
                            <div class="img">
                                <img src="${compu[i]['img']}" alt="" class="product-img">
                                <div class="sale">
                                    Sale!
                                </div>
                            </div>
                            <div class="txt">
                                <h4 class="product-title">${compu[i]['name']}</h4>
                                <div>
                                    
                                    <p class="price">$${compu[i]['price']}</p>
                                </div>
                                <button  class="add-cart">Add to cart</button>
                            </div>
                        </div>`;
         
    }
    for( i = 0; i < watch.length; i++){
      
        item1 = item1 + `<div class="flash-item filterDiv watchs">
                            <div class="img">
                                <img src="${watch[i]['img']}" alt="" class="product-img">
                                <div class="sale">
                                    Sale!
                                </div>
                            </div>
                            <div class="txt">
                                <h4 class="product-title">${watch[i]['name']}</h4>
                                <div>
                                   
                                    <p class="price">$${watch[i]['price']}</p>
                                </div>
                                <button  class="add-cart">Add to cart</button>
                            </div>
                        </div>`;
         
    }
    for( i = 0; i < headset.length; i++){
      
        item1 = item1 + `<div class="flash-item filterDiv headsets">
                            <div class="img">
                                <img src="${headset[i]['img']}" alt="" class="product-img">
                                <div class="sale">
                                    Sale!
                                </div>
                            </div>
                            <div class="txt">
                                <h4 class="product-title">${headset[i]['name']}</h4>
                                <div>
                                   
                                    <p class="price">$${headset[i]['price']}</p>
                                </div>
                                <button  class="add-cart">Add to cart</button>
                            </div>
                        </div>`;
         
    }
    for( i = 0; i < camera.length; i++){
      
        item1 = item1 + `<div class="flash-item filterDiv cameras">
                            <div class="img">
                                <img src="${camera[i]['img']}" alt="" class="product-img">
                                <div class="sale">
                                    Sale!
                                </div>
                            </div>
                            <div class="txt">
                                <h4 class="product-title">${camera[i]['name']}</h4>
                                <div>
                                    
                                    <p class="price">$${camera[i]['price']}</p>
                                </div>
                                <button  class="add-cart">Add to cart</button>
                            </div>
                        </div>`;
         
    }
    for( i = 0; i < tv.length; i++){
      
        item1 = item1 + `<div class="flash-item filterDiv tvs">
                            <div class="img">
                                <img src="${tv[i]['img']}" alt="" class="product-img">
                                <div class="sale">
                                    Sale!
                                </div>
                            </div>
                            <div class="txt">
                                <h4 class="product-title">${tv[i]['name']}</h4>
                                <div>
                                    
                                    <p class="price">$${tv[i]['price']}</p>
                                </div>
                                <button  class="add-cart">Add to cart</button>
                            </div>
                        </div>`;
         
    }
    for( i = 0; i < tablet.length; i++){
      
        item1 = item1 + `<div class="flash-item filterDiv tablets" >
                            <div class="img">
                                <img src="${tablet[i]['img']}" alt="" class="product-img">
                                <div class="sale">
                                    Sale!
                                </div>
                            </div>
                            <div class="txt">
                                <h4 class="product-title">${tablet[i]['name']}</h4>
                                <div>
                                  
                                    <p class="price">$${tablet[i]['price']}</p>
                                </div>
                                <button  class="add-cart">Add to cart</button>
                            </div>
                        </div>`;
         
    }

    shop_item.innerHTML = item1;
   

    document.querySelector(".shop-body .shop-con").appendChild(shop_item); 
}


