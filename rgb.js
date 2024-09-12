let btn = document.getElementById("btn");
let div = document.getElementById("div");

// function randomNumber() {
//   let number = Math.ceil(Math.random() * 1000000);

//   return number;
// }
// setInterval(() => {
//   console.log(randomNumber());
// }, 2000);

btn.addEventListener("click", () => {
  let number = Math.ceil(Math.random() * 1000000);
  let color = `#${number}`;
  div.style.backgroundColor = color;
});
