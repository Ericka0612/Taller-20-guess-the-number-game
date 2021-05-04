// var: variable global accedida desde varios ambitos en el codigo, let: solo accedida en el codigo, puede seguir cambiando, const: para que el valor no cambie
let randomNumber = Math.floor( Math.random() *100 ) + 1; // math.random retorna un numero entre 0 y 1(0.1, 0.6...) * 100 + 1 para que sea numero entre 1....100
//math.floor -> redondea hacia abajo.
//const -> para constantes. Una vez que adquiere valor, no cambia.
//let -> Si permite que cambie el valor, mejor que usar var.
//var -> se puede redeclarar, es la menos utilizada.
const guesses = document.querySelector('.guesses'); // variables d4e referencia. va al html y busca algo que tenga la clase guesses. Comillas simples para buena practica.
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton; //variables de control
//se inicia con la palabra completa function. 
function  checkGuess(){ //logica del programa
    let userGuess = Number(guessField.value); //Number para convertir de texto a numero.
    if (guessCount === 1) { //=== es igual o diferente, en javascript para que no se ejecute si tenemos un numero y un string, si se pone == se ejecuta aunque no sean del mismo tipo.
    guesses.textContent = 'Previous guesses: '; //le cambia la propiedad con textContent y le asigna un nuevo valor.
    }
    guesses.textContent += userGuess +' '; //el contenido de ese elemento, se esta rehusando.

    if (userGuess === randomNumber){
        lastResult.textContent = 'Congratulations! You got it';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'Game Over :('
        setGameOver();
    } else{
        lastResult.textContent = 'Wrong';
        lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Guess too low...'
    } else {
      lowOrHi.textContent = 'Guess too high...'
    }
  }

  guessCount ++; // le suma 1
  guessField.value = '';
  guessField.focus();
}

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetPara[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.Value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1
}

guessSubmit.addEventListener('click', checkGuess);
 