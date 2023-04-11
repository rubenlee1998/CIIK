// JavaScript 코드
const title = document.getElementById("title");

const subtitle = document.getElementById("subtitle");

title.addEventListener("mouseover", function () {
  setTimeout(function () {
    title.classList.remove("animated-text");
  }, 1600);
  title.classList.add("hidden");
  subtitle.classList.remove("hidden");
  subtitle.classList.add("animated-text");
});

subtitle.addEventListener("mouseleave", function () {
  setTimeout(function () {
    subtitle.classList.remove("animated-text");
  }, 1600);
  subtitle.classList.add("hidden");
  title.classList.remove("hidden");
  title.classList.add("animated-text");
});
