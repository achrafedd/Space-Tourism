const btns = document.querySelectorAll(".enumirate .num");
let name = document.querySelector(".name");
let description = document.querySelector(".description");
let image = document.querySelector(".image");
let allData = [];
let num = 0;
let img = "";

fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.technology.length; i++) {
      allData.push(data.technology[i]);
    }
  });

(function () {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;
    // your size calculation code here
    if (myWidth >= 1100) {
      img = "portrait";
    } else {
      img = "landscape";
    }
    image.src = allData[num].images[img];
  }
})();

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    num = btn.innerText - 1;
    name.innerText = allData[num].name;
    description.innerText = allData[num].description;
    image.src = allData[num].images[img];
  });
});
