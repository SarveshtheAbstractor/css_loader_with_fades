document.body.onload = function () {
  showText();
};

const animatedText = document.querySelector(".animateText");
const loader = document.querySelector(".loader");
const body = document.querySelector("body");
function showText() {
  setTimeout(() => {
    animatedText.classList.add("active");
    loader.classList.add("unactive");
    body.classList.remove("flex");
  }, 2000);
}
