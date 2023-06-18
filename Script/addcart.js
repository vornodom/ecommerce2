//Cart Working js

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

// Making function

function ready(){
    //remove items from cart

    var removeCartbuttons = document.getElementsByClassName("cart-remove");
    
    console.log(removeCartbuttons);
    for ( var i = 0 ; i < removeCartbuttons.length; i++){
        var button = removeCartbuttons[i];
        button.addEventListener("click",removeCartItem);
    }

    // Quantity Change

    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for ( var i = 0 ; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change",quantityChanged);
    }

    // Add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for( i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    
     //buy button work

     document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked)

}
//Buy button
function buyButtonClicked(){
    alert('Your Order is placed');
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
     // number of cart 
     var cart_box = document.querySelectorAll(".cart-content .cart-box");
     document.querySelector(".num").innerText = cart_box.length;
    updatetotal();
}
// Remove Items From Cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
     // number of cart 
     var cart_box = document.querySelectorAll(".cart-content .cart-box");
     document.querySelector(".num").innerText = cart_box.length;
    updatetotal()
}

//Quantity Changes
function quantityChanged(event){
    var input = event.target;
    if( input.value <= 0){
        input.value = 1;
    }
    updatetotal()
}

//Add to Cart

function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productImg);
    // number of cart 
    var cart_box = document.querySelectorAll(".cart-content .cart-box");
    document.querySelector(".num").innerText = cart_box.length;
    updatetotal();
}

function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsName = cartItems.getElementsByClassName("cart-product-title");
    for ( var i = 0 ; i< cartItemsName.length; i++){
        if(cartItemsName[i].innerHTML == title){
            alert("You have already add this item to cart");
            return;
        }
    }
    var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!-- remove cart -->
                        <i class="fa-solid fa-trash-can cart-remove"></i>
    `;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click",removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged)
}
// Update Total 
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for ( var i = 0; i < cartBoxes.length ; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;

        total = total + (price * quantity);

    }
      
            
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}