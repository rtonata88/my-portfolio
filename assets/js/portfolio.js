let closeMenu = document.querySelectorAll(".mobile-menu-toggle");
closeMenu.forEach(function (menu) {
  menu.addEventListener("click", function () {
    let overlay = document.querySelector(".menu-overlay");
    overlay.classList.toggle("hide-menu");
  });
});
