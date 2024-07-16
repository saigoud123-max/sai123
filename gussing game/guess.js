let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100);

function checkGuess(){
    let guessval = parseInt(userInput.value);

    if (guessval > randomNumber){
        gameResult.textContent = "Too High ! try again";
        gameResult.style.backgroundColor = "red";
    }
    else if (guessval < randomNumber){
        gameResult.textContent = "Too Low ! try again..";
        gameResult.style.backgroundColor = "blue";

    }
    else if (guessval === randomNumber){
        gameResult.textContent = "Congrats correct!!";
        gameResult.style.backgroundColor = "green";
    }
    else {
        gameResult.textContent = "Invalid input only numbers between 1 to 100";
        gameResult.style.backgroundColor = "black";
    }

}