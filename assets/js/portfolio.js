const closeMenu = document.querySelectorAll(".mobile-menu-toggle");
closeMenu.forEach((element) => {
  element.addEventListener("click", () => {
    const overlay = document.querySelector(".menu-overlay");
    overlay.classList.toggle("hide-menu");

    const hamburgerMenu = document.querySelector(".mobile-menu");
    hamburgerMenu.classList.toggle("hide-hamburger");
  });
});

const popup = document.getElementById("popup");

// Get the button that opens the modal
const seeProjectButton = document.querySelectorAll("see-project-button");
seeProjectButton.forEach((element) => {
  element.addEventListener("click", () => {
    popup.style.display = "block";
  });
});
/*
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }*/
