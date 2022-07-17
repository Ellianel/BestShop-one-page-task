const btn = document.querySelector(".page-burger");
const body = document.querySelector("body");

btn.addEventListener("click", function(){

    body.classList.toggle("menu-open");
})