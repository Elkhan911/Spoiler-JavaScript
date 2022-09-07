const toggleClicks = document.querySelectorAll(".spoiler__toggle");

for (let toggleClick of toggleClicks) {
  toggleClick.addEventListener("click", function () {
    toggleClick.nextElementSibling.classList.remove("spoiler__text_off");
  });
}
