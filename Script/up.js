//bottom to top button

const toTop = document.querySelector(".up"); 
window.addEventListener("scroll", () => {
    if( window.scrollY > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");

    }
});
toTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});