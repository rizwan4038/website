const hamburgerIcon = document.querySelector(".hamburger-icon");
const navbarLinks = document.querySelector(".navbar-links");

let isMenuOpen = false;

hamburgerIcon.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    navbarLinks.classList.add("active");
  } else {
    navbarLinks.classList.remove("active");
  }
});
