let home = document.getElementById("home");
let about = document.getElementById("about");
let feature = document.getElementById("feature");
let header = document.getElementById("header");
let scrollUp = document.getElementById("scroll");
let card = document.getElementById("card");
window.addEventListener("scroll", () => {
  let scrolled = window.scrollY;
  let aboutPosition = about.offsetTop;
  console.log(aboutPosition);
  if (Math.ceil(scrolled) >= aboutPosition) {
    scrollUp.style.display = "grid";
  }
  if (Math.ceil(scrolled) < aboutPosition) {
    scrollUp.style.display = "none";
  }
});
