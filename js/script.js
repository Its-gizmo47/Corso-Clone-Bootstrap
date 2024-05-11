// Navbar Effect
function navbarEffect() {
  let nav = document.querySelector("nav")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      nav.classList.add("navbar-effect")
    } else {
      nav.classList.remove("navbar-effect")
    }
  })
}
document.addEventListener("DOMContentLoaded", navbarEffect)
