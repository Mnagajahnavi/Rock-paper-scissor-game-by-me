let userScore = 0;
let comScore = 0;
let uScore = document.querySelector("#you-score");
let cScore = document.querySelector("#com-score");
let uChoice = document.querySelector(".userChoice");
let cChoice = document.querySelector(".comChoice");

let msg = document.querySelector("#msg");
console.log("hello");

const choices = document.querySelectorAll(".choice");

const draw = ()=>{
    console.log("Game was drawn");
    msg.innerText = "Oops! Game drawn. Play Again";
}

const win = (userWin) =>{
    if(userWin){
        console.log("User Wins");
        msg.innerText = "You Wins ! ";
        userScore ++;
        uScore.innerText = userScore;
    }
    else{
        console.log("Computer Wins");
        msg.innerText="Computer Wins !";
        comScore ++;
        cScore.innerText = comScore;
    }
}

const compChoice = () =>{
    let options = ["rock","paper","scissor"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
}

let userWin = true;
const playGame = (userChoice) =>{
    console.log("user choice",userChoice);
    let comChoice = compChoice();
    console.log("computer choice",comChoice);
    choicedisplay(userChoice,comChoice);
    if (userChoice == comChoice) {
        draw();
    }
    else{
        if(userChoice === "rock"){
            userWin = comChoice === "scissor" ? true : false;
        }
        else if(userChoice === "paper"){
            userWin = comChoice === "rock" ? true : false;
        }
        else{
            userWin = comChoice === "paper" ? true : false;
        }
        win(userWin);
    }
}

const choicedisplay = (userChoice,comChoice) =>{
    uChoice.innerText = userChoice;
    cChoice.innerText = comChoice;
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});