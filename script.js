const menuButton = document.getElementById("menu-button");
const menuClose = document.getElementById("menu-close");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  nav.classList.add("open");
});

menuClose.addEventListener("click", () => {
  nav.classList.remove("open");
});

const heroImage = document.getElementById("hero-image");

function updateHeroImage() {
  if (window.innerWidth < 1000) {
    heroImage.src = "image-web-3-mobile.jpg";
  } else {
    heroImage.src = "image-web-3-desktop.jpg";
  }
}

updateHeroImage();

window.addEventListener("resize", updateHeroImage);
