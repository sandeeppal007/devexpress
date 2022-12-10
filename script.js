

const navToggle = document.querySelector(".hemburger");
const top = document.querySelector(".hero-nav-item-top");
const menu = document.querySelector(".menu");
const topNav = document.querySelector(".top-nav");
const cross = document.querySelector(".cross");
// const links = document.querySelector(".main-nav");

var x = document.getElementById("myTopnav");
var heroBg = document.getElementById("hero-bg");
  
   function menuFunc(){
x.classList.toggle("hero-nav-item")
x.classList.remove("hero-nav-item-top")
topNav.style.position = "static";
menu.style.display = "none";
top.style.marginTop = "0";

   }

   function crossFunc(){
    x.classList.remove("hero-nav-item")
    menu.style.display = "block";
    topNav.style.position = "fixed";
   
    // x.classList.remove("remove-bg-text")
   }

   function navbarRealease(){
   
   }
navToggle.addEventListener('click', menuFunc)
cross.addEventListener('click', crossFunc)
 
