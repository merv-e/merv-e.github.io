document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelectorAll(".navbar-container");

  burgerMenu.addEventListener("click", function () {
    navLinks.forEach(function (navLinks) {
      navLinks.classList.toggle("show");
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 640) {
      navLinks.forEach(function (navLinks) {
        navLinks.classList.remove("show");
      });
    }
  });
});
