const links = document.querySelectorAll(".navigation li");
let image = document.querySelector(".image");
let name = document.querySelector(".name");
let description = document.querySelector(".description");
let distance = document.querySelector(".distance");
let travel = document.querySelector(".travel");
let elements = [];

fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.destinations.length; i++) {
      elements.push(data.destinations[i]);
    }
  });

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    switch (e.target.innerText) {
      case "Moon":
        image.src = elements[0].images.webp;
        name.innerText = elements[0].name;
        description.innerText = elements[0].description;
        distance.innerText = elements[0].distance;
        travel.innerText = elements[0].travel;
        break;
      case "Mars":
        image.src = elements[1].images.webp;
        name.innerText = elements[1].name;
        description.innerText = elements[1].description;
        distance.innerText = elements[1].distance;
        travel.innerText = elements[1].travel;
        break;
      case "Europa":
        image.src = elements[2].images.webp;
        name.innerText = elements[2].name;
        description.innerText = elements[2].description;
        distance.innerText = elements[2].distance;
        travel.innerText = elements[2].travel;
        break;
      case "Titan":
        image.src = elements[3].images.webp;
        name.innerText = elements[3].name;
        description.innerText = elements[3].description;
        distance.innerText = elements[3].distance;
        travel.innerText = elements[3].travel;
        break;
      default:
        break;
    }
  });
});
