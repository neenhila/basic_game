let cubeHTML = `<div class="cube">
<div class="cube__face cube__face--front">
  <i class="fa-solid fa-heart"></i>
</div>
<div class="cube__face cube__face--back">
  <i class="fa-solid fa-heart"></i>
</div>
<div class="cube__face cube__face--right">
  <i class="fa-regular fa-face-smile"></i>
</div>
<div class="cube__face cube__face--left">
  <i class="fa-regular fa-face-smile"></i>
</div>
<div class="cube__face cube__face--top">
  <i class="fa-solid fa-turkish-lira-sign"></i>
</div>
<div class="cube__face cube__face--bottom">
  <i class="fa-solid fa-turkish-lira-sign"></i>
</div>
</div>`;
let currentNumber = 0;
window.onload = function () {
  let dressPath = (number) => `./assets/png-dress${number}.png`;
  let getRandomNumber = () => Math.floor(Math.random() * cubers.length) + 1;
  let shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
  let cubes = document.getElementById("cubes");
  if (!cubes) {
    let cubespl = document.createElement("div");
    cubespl.id = "cubes";
    document.body.appendChild(cubespl);
    cubes = document.getElementById("cubes");
  }
  cubes.innerHTML = cubeHTML.repeat(10);

  let cubers = document.getElementsByClassName("cube");

  let dressNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let cubesDresses = shuffleArray(dressNumbers);

  for (let i = 0; i < cubers.length; i++) {
    cubers[i].addEventListener("click", function () {
      let dresses = document.getElementById("dresses");
      if (dresses.childNodes.length > 1) {
        dresses.childNodes[2].remove();
      }
      let clickedDress = document.createElement("div");
      let clickedImage = document.createElement("img");
      clickedDress.classList.add("new_dress");
      clickedImage.setAttribute("src", dressPath(cubesDresses[i]));
      clickedDress.appendChild(clickedImage);
      dresses.appendChild(clickedDress);
      if (cubesDresses[i] == currentNumber)
        setTimeout(() => alert("TEBRİKLER KAZANDIN"), 50);
    });
  }
  let firstNumber = getRandomNumber();
  currentNumber = firstNumber;
  console.log(firstNumber);
  console.log(dressNumbers);
  console.log(cubesDresses);
  let img = document.getElementById("new_dress");
  img.setAttribute("src", dressPath(firstNumber));
};
