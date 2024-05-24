const hamburger1 = document.querySelector(".image-list")
const hamburger2 = document.querySelector(".image-X")
const mobile_menu = document.querySelector(".hamburger-menu")

hamburger1.addEventListener('click', ()=>{
    hamburger1.classList.add("invisible")
    hamburger2.classList.add("visible")
    mobile_menu.classList.toggle("switch")
})

hamburger2.addEventListener('click', ()=>{
    hamburger1.classList.remove("invisible")
    hamburger2.classList.remove("visible")
    mobile_menu.classList.toggle("switch")
})