let home = document.getElementById("home");
let about = document.getElementById("about");
let feature = document.getElementById("feature");
let header = document.getElementById("header");
let scrollUp = document.getElementById("scroll");

window.addEventListener("scroll", () => {
  let scrolled = window.scrollY;
  let aboutPosition = about.offsetTop;
  if (Math.ceil(scrolled) === aboutPosition) {
    scrollUp.style.display = "grid";
  }
});
