const text = document.querySelector(".txt");
const guess = document.querySelector(".result");


function numberGuess(){

        const randomNUmber = Math.floor(Math.random()*10);

        if ( text.value== randomNUmber ){
            guess.innerText = "Number is " + randomNUmber + " "+"It is true !"
        } else {

            guess.innerText = "Number is" + " " + randomNUmber + " "+ "Try Again ! "
        }
        
}