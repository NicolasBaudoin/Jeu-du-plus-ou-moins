//fonction du nombre aléatoire
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let mystery = randomNumber(1, 100);

console.log(mystery);
