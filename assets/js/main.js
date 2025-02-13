// mobile menu
let mobileMenuIcon = document.querySelector('header .fa-bars');
let menu = document.querySelector("header .menu")

mobileMenuIcon.addEventListener('click',function (){
    menu.classList.toggle('open'); 
})
