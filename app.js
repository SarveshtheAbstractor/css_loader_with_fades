document.body.onload = function () {
  showText();
};

const animatedText = document.querySelector(".animateText");
const loader = document.querySelector(".loader");
function showText() {
  setTimeout(() => {
    animatedText.classList.add("active");
    loader.classList.add("unactive");
  }, 2000);
}
