const toggleLinks = document.querySelectorAll(".task__toggle");

for (let toggleLink of toggleLinks) {
  toggleLink.addEventListener("click", function () {
    toggleLink.nextElementSibling.classList.remove("task__spoiler_off");
  });
}
