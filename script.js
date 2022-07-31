//Create rock-paper-scissors game
//Create computer choice function
//Create plyers selection function
//Create the function which compares computers and players selection
//Print out the result of tha match

let options = ["rock","paper","scissors"]
function getComputerChoice(){
    
    let random = Math.floor(Math.random() * 3);
    return options[random].toLocaleLowerCase()
}
function getPlayerChoice(){
    return  prompt("Choose Rock, Paper or Scissors").toLowerCase()
}


function playRound (computer, player){

    if (options.indexOf(player)<0) return  "Since you chose " + player + " you really don't know how to play this game!"
    let loseMessage = "You lose! " + computer + " beats " + player + "!"
    let winMessage =  "You win! " + player + " beats " + computer + "!"
    let tieMessage = computer + " against " + player + " is a tie!"

    if (computer === player) return tieMessage

    if (computer === "rock" && player === "scissors" ||
    computer === "paper" && player === "rock" ||
    computer === "scissors" && player === "paper") return loseMessage

    

    return winMessage
}

console.log(playRound(getComputerChoice(),getPlayerChoice()))
