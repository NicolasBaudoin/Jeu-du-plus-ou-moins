//fonction du nombre aléatoire
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const result = document.querySelector("#reponse");
const mystery = randomNumber(1, 100);
const guess = document.querySelector("#guess"); //trouver comment récupérer la value de textContent #guess

console.log(mystery);

valider.addEventListener("click", () => {
  if (this.guess.value === mystery) {
    result.textContent = "Gagné !";
  } else if (this.guess.value < mystery) {
    result.textCeontent = "Raté ! C'est plus grand !";
  } else {
    result.textContent = "Raté ! C'est plus petit !";
  }
});

//faire le compteur
