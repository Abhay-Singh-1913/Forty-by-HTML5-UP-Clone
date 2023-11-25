let menu = document. getElementById("menu");
function openMenu() {
    menu.classList.add("open-menu");
}
function closeMenu() {
    menu.classList.remove("open-menu");
}
window.addEventListener("scroll", function(){
    var header = document.querySelector("header") ;
    header.classList.toggle("sticky", window.scrollY >0)
});
