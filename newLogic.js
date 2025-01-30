function getComputerChoice (){
    let choice = Math.random();
    
    switch (true){
        case choice >= 0.66:
            return "rock";
        case choice <= 0.33:
            return "scissors";
        default:
            return "paper";
    }
}

function getPlayerChoice(){
    
    let choice = prompt("rock/paper/scissors?").toLowerCase();
    
    if (choice == "rock" || choice == "paper" || choice == "scissors"){
        return choice;
        }else {
            console.log("invalid");
            do{ 
                choice = prompt("rock/paper/scissors?").toLowerCase();
                
                if (choice == "rock" || choice == "paper" || choice == "scissors"){
                    return choice
                } else{
                    console.log(`invalid choice, ${choice}: try again.`);
                }
            } while (choice != "rock" && choice && "paper" && choice != "scissors");
    }
}

function playRound(playerChoice, computerChoice){
    console.log("you threw: ", playerChoice, "\ncomputer threw: ", computerChoice);
    playerWin = "you win!";
    computerWin = "you lose!";
    tieGame = "Tie!";
    
    if (playerChoice == computerChoice){
        console.log(tieGame);
        return tieGame;
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerScore++
        console.log(playerWin);
        return playerWin;
    } else if (playerChoice == "rock" && computerChoice == "paper"){
        computerScore++
        console.log(computerWin);
        return computerWin;
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        playerScore++
        console.log(playerWin);
        return playerWin;
    } else if (playerChoice == "paper" && computerChoice == "scissors"){
        computerScore++
        console.log(computerWin);
        return computerWin;
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        playerScore++
        console.log(playerWin);
        return playerWin;
    } else if (playerChoice == "scissors" && computerChoice == "rock"){
        computerScore++
        console.log(computerWin);
        return computerWin;
    }
}

function playGame(rounds){
    
    // let rounds = parseInt(prompt("how many rounds?"));
    // console.log(typeof(rounds));
    if (rounds <= 0 || typeof(rounds) != "number"){
        console.log("enter a number greater than 0");
        return;
    }
    for (let i = 0; i < rounds; i++){
        let result = playRound(getPlayerChoice(),getComputerChoice());
        if (result == "Tie!"){
            i--
            console.log("replay the tie!")
        }
    }
    console.log("your score: ", playerScore, "\ncomputer score: ", computerScore);
    finishGame();
}

function askRematch (){
    let rematch = prompt("rematch? (Y/N)").toLowerCase();
        if (rematch == "y"){
            playGame();
        } else {
            console.log("thanks for playing!");
            return
        }
}

function finishGame(){
    
    if (computerScore > playerScore){
        console.log("you lost! better luck next time...");
        askRematch();
    } else if (playerScore > computerScore){
        console.log("you won! rematch?");
        askRematch();
    } else {
        console.log("tie game, let's go again!");
        askRematch();
    }
}


let playerScore = 0;
let computerScore = 0;

const startButton = document.querySelector("#start");
const roundNum = document.querySelector("input");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector(".results");
const scoreboard = document.querySelector(".scoreboard");

startButton.addEventListener("click", () => {
    rounds = parseInt(roundNum.value);
    roundNum.value = '';
    console.log(rounds);
    playGame(rounds);
})

rockButton.addEventListener("click", () => {
    playerChoice = "rock";
})
