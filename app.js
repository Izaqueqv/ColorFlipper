const colors = [
  "green",
  "red",
  "purple",
  "rgb(255, 0, 128)",
  "yellow",
  "brown",
  "blue",
  "grey",
];

const btn = document.getElementById("btn");
let color = document.getElementById("color");

btn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
