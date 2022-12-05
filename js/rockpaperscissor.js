const user = {

    name: prompt("please enter your name"),
    choice: prompt("Choose rock,paper,scissors")

}



//generate random number -

const arrChoice = ["rock", "paper", "scissors"];

function generateRandomNum(max) {

    return Math.floor(Math.random()*max);

}

   

//generate the computer

const randomNumber = generateRandomNum(arrChoice.length);

const aIChoice = arrChoice[randomNumber];
console.log(aIChoice);



//determine the winner

function didUserWin(user, aIChoice){

    let result;

    if(user.choice === `rock` && aIChoice === 'paper'){

        result = false;
        alert("Sorry you loose");

    } else if(user.choice ===`rock` && aIChoice === `paper`){
        result = false;
    }else if(user.choice ===`scissors` && aIChoice === `rock`){
        result = false;
    }
}