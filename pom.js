var boutonValider = document.getElementById("valider"); //bouton valider
var result = document.querySelector("#reponse"); // cadre des résultats
var guessInput = document.getElementById("guess");

//fonction du nombre aléatoire
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const MIN = 1;
const MAX = 99;
const MYSTERY = randomNumber(MIN, MAX);

//min et max de l'input guess
guessInput.min = MIN;
guessInput.max = MAX;

function submitGuess(e) {
  let guessValue = e.target[0].value;
  e.preventDefault();

  if (guessValue > MYSTERY) {
    result.textContent = "C'est moins !";
  } else if (guessValue < MYSTERY) {
    result.textContent = "c'est plus !";
  } else result.textContent = "c'est gagné !";
}
