const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
let color = document.getElementById("color");

btn.addEventListener("click", function () {
  let colorName = "#";
  for (let i = 0; i < 6; i++) {
    colorName += hex[getRandomNumber()];
  }
  color.textContent = colorName;
  document.body.style.backgroundColor = colorName;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
