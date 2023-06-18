const list_menu = ["Home", "Shop", "About Us", "Blog", "Contacts"];
const list_link = ["index.html", "shop.html", "#aboutus", "#blog","#contact"]

mo_main();
main();
active_menu();


function main(){
    

    let main_menu = document.querySelector(".main-menu");
    let ul = document.createElement("ul");
    // li.innerHTML = list_menu[0];
    let pro = "";
    for ( i = 0 ; i < list_menu.length; i++){
        pro = pro + `<li><a href="${list_link[i]}" >${list_menu[i]}</a></li>`;
    }
    
    ul.innerHTML = pro;
    main_menu.append(ul);
    
}
function mo_main(){

    let main_menu = document.querySelector(".mobile-menu");
    let ul = document.createElement("ul");
    // li.innerHTML = list_menu[0];
    let pro = "";
    for ( i = 0 ; i < list_menu.length; i++){
        pro = pro + `<li><a href="${list_link[i]}">${list_menu[i]}</a></li>`;
    }
    ul.innerHTML = pro;
    main_menu.append(ul);
    
}

function active_menu(){
    var menu = document.querySelector(".main-menu ul").querySelectorAll("a");
    
    menu.forEach(element => {
        element.addEventListener("click", function(){
            menu.forEach( nav => nav.classList.remove("a-active"));
            this.classList.add("a-active");
        });
    });
}





