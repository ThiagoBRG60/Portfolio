const hamburguerMenu = document.querySelector("header nav .fa-bars");
const menuMobile = document.querySelector(".menu-mobile");
const menuLinks = document.querySelectorAll(".menu-mobile ul li a");

hamburguerMenu.addEventListener("click", handleMobileMenu)

function handleMobileMenu() {
   const closeMenu = hamburguerMenu.classList.contains("fa-xmark")
   hamburguerMenu.classList.add("fa-xmark")

   if (!closeMenu) {
      menuMobile.style.display = "block"
      setTimeout(() => {
         menuMobile.classList.add("opened")
      }, 100)
   }else {
      closeMobileMenu()
   }
}

function closeMobileMenu() {
   hamburguerMenu.classList.remove("fa-xmark")
   menuMobile.classList.remove("opened")
   setTimeout(() => {
      menuMobile.style.display = "none"
   }, 500)
}

menuLinks.forEach((link) => {
   link.addEventListener("click", closeMobileMenu)
})