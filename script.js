const toggleLinks = document.querySelectorAll(".spoiler__toggle");

for (let toggleLink of toggleLinks) {
  toggleLink.addEventListener("click", function () {
    toggleLink.nextElementSibling.classList.remove("spoiler__text_off");
  });
}
