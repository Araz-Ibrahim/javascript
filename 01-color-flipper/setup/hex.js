const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  const randomColor = random();

  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
})

function random () {
  let colorTxt = "#";
  for(i=0; i < 6; i++) {
    const randomIndex = randomI();
    colorTxt += hex[randomIndex];
    console.log(colorTxt);
  }
  return colorTxt;
}

function randomI() {
  return Math.floor(Math.random() * hex.length);
}