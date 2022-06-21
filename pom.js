//fonction du nombre aléatoire
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//document.addEventListener("keydown", guessKey);
const boutonValider = document.getElementById("valider"); //bouton valider
const result = document.querySelector("#reponse"); // cadre des résultats
var guess = document.getElementById("guess"); //trouver comment récupérer la value de textContent #guess

const mystery = randomNumber(1, 100); // variable du nombre aléatoire

console.log(mystery);

//var key = e.key;

boutonValider.addEventListener("click", (e) => {
  if (guess.value > mystery) {
    result.textContent = "C'est moins !";
  } else if (guess.value < mystery) {
    result.textContent = "c'est plus !";
  } else result.textContent = "c'est gagné !";
});
