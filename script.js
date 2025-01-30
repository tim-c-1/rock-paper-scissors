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
    let choice = prompt("Rock/Paper/Scissors?").toLowerCase()
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

let humanScore = 0;
let computerScore = 0;

// console.log("human score before: "+ humanScore, "computer score before: " + computerScore);

function playRound(humanChoice, computerChoice){
    
    if (humanChoice === computerChoice) {
        console.log("tied!");
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++
        console.log("you lose!");
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++
        console.log("you win!");
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++
        console.log("you win!");
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++
        console.log("you lose!");
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++
        console.log("you win!");
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++
        console.log("you lose!");
    }
}

// playRound(getHumanChoice(),getComputerChoice())
console.log("your score is: \nyou: " + humanScore +"\ncomputer: " + computerScore);

function playGame(rounds=5){
   for (let i = 0; i < rounds; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        console.log("your score is: \nyou: " + humanScore +"\ncomputer: " + computerScore);
   }

}
playGame(parseInt(prompt("How many rounds?")));