const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.getElementById("color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
  
  const randomNamber = random();
  document.body.style.backgroundColor = colors[randomNamber];

  color.innerHTML = colors[randomNamber];
})

function random() {
  return Math.floor(Math.random() * colors.length);
}