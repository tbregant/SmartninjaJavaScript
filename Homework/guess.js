let secretNumber = Math.floor(Math.random() * 100) + 1; // Math.random:  random number between 0 (inclusive) and 1 (exclusive):
let userGuess = document.getElementById("guess");
let button = document.getElementById("check");
let result = document.getElementById("result");

console.log("Pssst, the number you are looking for is: " + secretNumber)

button.addEventListener('click', function () {

    let userGuessNumber = parseInt(userGuess.value);

    if (userGuessNumber == secretNumber) {
        result.innerHTML = "You are correct, " + secretNumber + " was the secret number!";
        result.classList.remove("red-text");
        result.classList.add("green-text");
    }
    else if (userGuessNumber < secretNumber) {
        result.innerHTML = "Your guess " + userGuessNumber + " is too low!";
        result.classList.remove("green-text");
        result.classList.add("red-text");
    }
    else if (userGuessNumber > secretNumber) {
        result.innerHTML = "Your guess " + userGuessNumber + " is too high!";
        result.classList.remove("green-text");
        result.classList.add("red-text");
    }

});



