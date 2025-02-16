// mobile menu
let mobileMenuIcon = document.querySelector('header .fa-bars');
let menu = document.querySelector("header .menu")
let ismoved = false;
let navHeader = document.querySelector("nav-header")

menu.classList.add("move-right");
mobileMenuIcon.addEventListener('click',function (){
    
    ismoved = !ismoved;
    
    if(ismoved){
        menu.classList.add("open");
        menu.classList.add("move-right");
        // navHeader.style.overflow="display";
        menu.classList.remove("move-left");
        
    }
    else{
        menu.classList.add("open");
        menu.classList.add("move-left");
        menu.classList.remove("move-right");
        
        
        

    }

})




