const dots = document.querySelectorAll(".dots .dot");
let role = document.querySelector(".role");
let name = document.querySelector(".name");
let bio = document.querySelector(".bio");
let image = document.querySelector(".image");
let elements = [];

fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.crew.length; i++) {
      elements.push(data.crew[i]);
    }
  });

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    dot.classList.add("active");
    role.innerText = elements[dot.dataset.num - 1].role;
    name.innerText = elements[dot.dataset.num - 1].name;
    bio.innerText = elements[dot.dataset.num - 1].bio;
    image.src = elements[dot.dataset.num - 1].images.webp;
  });
});
