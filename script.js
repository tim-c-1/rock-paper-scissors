// console.log("testing");

function getComputerChoice(){
    let choice = Math.random()
    if (choice >= 0.66){
        return "scissors"
    } else if (choice < 0.66 && choice >= 0.33){
        return "rock"
    } else {
        return "paper"
    }
}

// console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Enter choice: ").toLowerCase()
    if (choice == ""){
        choice = "rock" //default choice to rock
    }
    if (choice == "scissors" || choice == "rock" || choice == "paper"){
        return choice
    } else {
        console.log("Not a valid choice. Choose again.")
    }
}

// console.log(getHumanChoice());


// console.log("human score before: "+ humanScore, "computer score before: " + computerScore);

function playRound(humanChoice, computerChoice){
    
    const resultsDiv = document.querySelector(".results");

    if (humanChoice === computerChoice) {
        console.log("tied!");
        resultsDiv.textContent = "Tied!";
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++
        console.log("you lose!");
        resultsDiv.textContent = "You lose!";
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++
        console.log("you win!");
        resultsDiv.textContent = "You win!";
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++
        console.log("you win!");
        resultsDiv.textContent = "You win!";
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++
        console.log("you lose!");
        resultsDiv.textContent = "You lose!";
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++
        console.log("you win!");
        resultsDiv.textContent = "You win!";
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++
        console.log("you lose!");
        resultsDiv.textContent = "You lose!";
    }
}

// playRound(getHumanChoice(),getComputerChoice())
// console.log("your score is: \nyou: " + humanScore +"\ncomputer: " + computerScore);

function playGame(humanChoice, rounds=1){
   for (let i = 0; i < rounds; i++){
        // let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        console.log("your score is: \nyou: " + humanScore +"\ncomputer: " + computerScore);
   }

}
function gameOver(){
    let winner = Math.max(humanScore,computerScore)
    if (winner == humanScore){
        winner = "you";
    }else{
        winner = "computer";
    }
    alert(`game over. ${winner} won.`)
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton  = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
const scoreboard = document.querySelector(".scoreboard");

rockButton.addEventListener("click", () => {
    let humanChoice = "rock";
    playGame(humanChoice);
    scoreboard.textContent = `your score: ${humanScore}
computer score: ${computerScore}`;
    if (humanScore == 5 || computerScore == 5){
    gameOver();
}
});
paperButton.addEventListener("click", () => {
    let humanChoice = "paper";
    playGame(humanChoice);
    scoreboard.textContent = `your score: ${humanScore}
computer score: ${computerScore}`;
    if (humanScore == 5 || computerScore == 5){
    gameOver();
}

});

scissorButton.addEventListener("click", () => {
    let humanChoice = "scissors";
    playGame(humanChoice);
    scoreboard.textContent = `your score: ${humanScore}
computer score: ${computerScore}`;
    if (humanScore == 5 || computerScore == 5){
        gameOver();
    }

});

// playGame(parseInt(prompt("How many rounds?")));