

const phone = [
    {
        name: 'Iphone XR, Us Version',
        img : 'img2/phone/p1-1.jpg',
        price: 290
    },
    {
        name : 'Iphone 11, 64GB',
        img :'img2/phone/p2-1.jpg',
        price : 324.06
    },
    {
        name : 'SAMSUNG Galaxy Z Fold 4',
        img : 'img2/phone/p3-1.jpg',
        price : 1799
    },
    {
        name : 'SAMSUNG Galaxy s22 Ultra',
        img :'img2/phone/p4-1.jpg',
        price : 1199
    },
    {
        name : 'TracFone TCL Flip 2',
        img : 'img2/phone/p5-1.jpg',
        price : 19.88
    }
];

const compu = [
    {
        name: 'ApoliSign 2023 laptop 15.6inch',
        img : 'img2/computer/c1-1.jpg',
        price: 398
    },
    {
        name : 'HP Premium 14-inch HD',
        img :'img2/computer/c2-1.jpg',
        price : 299
    },
    {
        name : 'SGIN 17" Laptop, 17 inch',
        img : 'img2/computer/c3-1.jpg',
        price : 399
    },
    {
        name : 'Gateway 15.6 HD Ultra',
        img :'img2/computer/c4-1.jpg',
        price : 148
    },
    {
        name : 'ASUS ChromeBook c424',
        img : 'img2/computer/c5-1.jpg',
        price : 249
    }
];

const headset = [
    {
        name: 'BENGOO G9000 Stereo Gaming',
        img : 'img2/headset/h1-1.jpg',
        price: 21.99
    },
    {
        name : 'Razer Kraken X Ultralight Gaming ',
        img :'img2/headset/h2-1.jpg',
        price : 29.99
    },
    {
        name : 'Logitech H390 Wired Headset for PC/Laptop',
        img : 'img2/headset/h3-1.jpg',
        price : 19.99
    },
];
const camera = [
    {
        name: 'Digital Camera, FHD 1080P',
        img : 'img2/camera/m1-1.jpg',
        price: 49
    },
    {
        name : '4K Digital Camera for Photography and Video',
        img :'img2/camera/m2-1.jpg',
        price :112
    },
    {
        name : 'Digital Cameras for Photography',
        img : 'img2/camera/m3-1.jpg',
        price : 99.99
    },
];
const tablet = [
    {
        name: 'ZZB Tablet 10 Inch Android Tablets, 32GB ROM 512GB Expand',
        img : 'img2/tablet/t1-1.jpg',
        price: 54
    },
    {
        name : 'Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch',
        img :'img2/tablet/t2-1.jpg',
        price :290
    },
    {
        name : '2022 Apple iPad (10.9-inch, Wi-Fi, 64GB)',
        img : 'img2/tablet/t3-1.jpg',
        price : 397.99
    },
];
const tv = [
    {
        name: 'All-new Amazon Fire TV 55" Omni QLED Series 4K UHD ',
        img : 'img2/tv/t1-1.jpg',
        price: 429
    },
    {
        name : 'GTUOXIES New 105 Inch LCD Panel 4K UHD Smart TV Television',
        img :'img2/tv/t2-1.jpg',
        price :9900
    },
    {
        name : 'INSIGNIA 32-inch Class F20 Series Smart HD 720p',
        img : 'img2/tv/t3-1.jpg',
        price : 69.99
    },
];
const watch = [
    {
        name: 'Smart Watch, 1.8 Fitness Watch with Text and Call ',
        img : 'img2/watch/w1-1.jpg',
        price: 41
    },
    {
        name : 'SAMSUNG Galaxy Watch 4 40mm Smartwatch',
        img :'img2/watch/w2-1.jpg',
        price :179
    },
    {
        name : 'Lightweight Sports Fitness Tracker Smart Watch 1.7',
        img : 'img2/watch/w3-1.jpg',
        price : 19.99
    },
];





var bar = document.getElementById("bar");
var mobile = document.querySelector(".mobile-menu");
var icon = document.querySelector(".menu-bar .left-menu i")

function myFunction(x) {
    if (x.matches) { // If media query matches
        mobile.style.top = "-550px";
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-circle-xmark");
    }
  }
  
  var x = window.matchMedia("(min-width: 767.98px)");
  myFunction(x);
  x.addListener(myFunction);
bar.onclick = function(){
    if(icon.className == "fa-solid fa-bars"){
        mobile.style.top = "150px";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-circle-xmark");


    }
    else if(icon.className == "fa-solid fa-circle-xmark"){
        mobile.style.top = "-500px";
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-circle-xmark");
    }
};

// signup

var signup = document.getElementById("signup");
var signup_con = document.getElementById("sign-content");
var close_signup = document.getElementById("close-signup");
signup.onclick = function(){
    signup_con.style.display = "block";
    
    
}

close_signup.onclick = function(){
    signup_con.style.display = "none";
   
}

//cart

var cart = document.getElementById("cart");
var cart_con = document.getElementById("cart_content");
var popup = document.getElementById("popup-cart");
var close_cart = document.getElementById("close-cart");
cart.onclick = function(){
    popup.style.display = "block";
    cart_con.classList.add("active-cart-menu");
}
popup.onclick = function(){
    popup.style.display = "none";
    cart_con.classList.remove("active-cart-menu");
}
close_cart.onclick = function(){
    popup.style.display = "none";
    cart_con.classList.remove("active-cart-menu");
}

$('.slider').slick({
    infinite: true,
    speed: 500,
    autoplay: true,
    autospeed: 3000,
    arrows: false,
    dots: true,
    fade: true,
    pauseOnFocus: false,
});

// flash-date

var countDownDate = new Date("june 30, 2023 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now ;
    
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
    var seconds = Math.floor((distance % (1000 * 60  )) / 1000 );
   
    document.getElementById('hours').innerHTML = hours; 
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if( distance < 0){
        clearInterval(x);
        document.getElementById('hours').innerHTML = "00"; 
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
    }
},1000);




flash_con_item();
addpro();
// addpro_shop();
// n-a-box slider

$('.n-a-box').slick({
    dots: false,
    rows: 2,
    slidesPerRow: 4,
    infinite: true,
    speed: 800,
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            rows: 2,
             slidesPerRow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            rows: 2,
            slidesPerRow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            rows: 2,
            slidesPerRow: 1,
            slidesToShow: 1,
          
            
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});




// Add array object to website

function flash_con_item(){
    let fl_con = document.createElement("div");
    fl_con.classList.add("flash-con-item");
    var fl_item = "";
    for( i = 0; i < 1; i++){
      
       fl_item =fl_item + `<div class="flash-item">
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
    for( i = 0; i < 1; i++){
      
       fl_item =fl_item + `<div class="flash-item">
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
    for( i = 0; i < 1; i++){
      
       fl_item =fl_item + `<div class="flash-item">
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
    for( i = 0; i < 1; i++){
      
       fl_item =fl_item + `<div class="flash-item">
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
    fl_con.innerHTML = fl_item;
  

    document.querySelector(".flash .flash-con").appendChild(fl_con);
}

function addpro(){
    let fl = document.createElement("div");
    fl.classList.add("n-a-box");
    var item = "";
  

    for( i = 0; i < 3; i++){
      
        item = item + `<div class="flash-item">
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

    for( i = 0; i < 3; i++){
      
        item = item + `<div class="flash-item">
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
    for( i = 0; i < 2; i++){
      
        item = item + `<div class="flash-item">
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
    for( i = 0; i < 2; i++){
      
        item = item + `<div class="flash-item">
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
    for( i = 0; i < 2; i++){
      
        item = item + `<div class="flash-item">
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
    for( i = 0; i < 2; i++){
      
        item = item + `<div class="flash-item">
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
    for( i = 0; i < 2; i++){
      
        item = item + `<div class="flash-item">
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

    fl.innerHTML = item;

    document.querySelector(".n-a .n-a-con").appendChild(fl);
    
   
   
}

// add product to shop


