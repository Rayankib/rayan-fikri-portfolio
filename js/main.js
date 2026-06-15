const projectItems = document.querySelectorAll(".project-item");

projectItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("active");
  });
});