const inputElement = document.querySelector(".input");
const btnElement = document.querySelector(".enter");
const resetElement = document.querySelector(".reset");
let resultElement = document.querySelector(".result");


let low;
let high;
let random_number;

reset();//重置並隨機產生一個數字
btnElement.addEventListener("click",guessNumber);
resetElement.addEventListener("click",reset);

function guessNumber(){
  let guess = parseInt(inputElement.value);
  if(isNaN(guess)){
    resultElement.innerHTML = '';
    alert("Please enter a number!!!");
  } else{
    if(guess<low || guess>high){
      alert("Please enter a number in range!!!");
    }else{
      if(guess < random_number){
        low = guess;
        resultElement.innerHTML = `❌<br>${low}~${high}`;
      } else if(guess > random_number){
        high = guess;
        resultElement.innerHTML = `❌<br>${low}~${high}`;
      }else{
        resultElement.innerHTML = `✅ ${guess}<br>You get the correct number!!`;
      }
    }
  }
}

function reset(){
  low = 0;
  high = 100;
  resultElement.innerHTML = `Guess a number between ${low} and ${high}`;
  inputElement.value = '';
  random_number = Math.floor(Math.random() * 100 +1);
}

