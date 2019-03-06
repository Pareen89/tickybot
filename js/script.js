let about = document.getElementById("about");
let scrollUp = document.getElementById("scroll");
window.addEventListener("scroll", () => {
  let scrolled = window.scrollY;
  let aboutPosition = about.offsetTop;
  console.log(aboutPosition);
  if (Math.ceil(scrolled) >= aboutPosition) {
    scrollUp.style.display = "grid";
  } else if (Math.ceil(scrolled) < aboutPosition) {
    scrollUp.style.display = "none";
  }
});
