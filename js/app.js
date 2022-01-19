const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector("header nav");
openMenu.addEventListener("click", () => {
  menu.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});
