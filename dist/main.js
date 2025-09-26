const navToggle = document.getElementById("nav-toggle");
const navbar = document.querySelector(".navbar");

navToggle.addEventListener("click", function() {
  // console.log(navbar.classList.contains("navbar"))
  navbar.classList.toggle("hidden")
})