//Create rock-paper-scissors game
//Create computer choice function
//Create plyers selection function
//Create the function which compares computers and players selection
//Print out the result of tha match

const options = ["Rock","Paper","Scissors"]
const buttons = Array.from(document.querySelectorAll("button"))
const container = document.querySelector(".container")
const resultTextDiv = document.querySelector(".resultTextDiv")
const scoreTextDiv = document.querySelector(".scoreTextDiv")
const finalResultDiv = document.querySelector(".finalResultDiv")
finalResultDiv.classList="finalResultDiv"
const tryAgain = document.createElement("button")
tryAgain.classList = "tryAgain"
tryAgain.innerText ="Try Again!"
let countComputer = 0
let countPlayer = 0






const onClick = (event) => {
    player = event.srcElement.id
    computer = getComputerChoice()
    //console.log("Your choice: " +player)
    //console.log("Computer choice: "+ computer)
    //console.log("GAME:")
    
    
    let game = playRound(computer,player)
    
    //console.log(game)
    resultTextDiv.classList="resultTextDiv"
    scoreTextDiv.classList='scoreTextDiv'
    resultTextDiv.innerHTML = game
    scoreTextDiv.innerHTML = 

    "YOUR SCORE: "+ countPlayer+ "<br />" +
    "COMPUTER SCORE: "+ countComputer+ "<br />"

    container.appendChild(resultTextDiv)
    container.appendChild(scoreTextDiv)
    endGame()

  }

function getComputerChoice(){
    
    let random = Math.floor(Math.random() * 3);
    return options[random]
}


function endGame(){
    
    const finalLostMessage = "You are total looser! The game is over"
    const finalWinnMessage = "You just won againts the most advanced AI. You are a HERO!"

        
    
    if(countComputer ===5  || countPlayer===5){
        if(countComputer>countPlayer){finalResultDiv.innerText = finalLostMessage}
        if(countPlayer>countComputer){finalResultDiv.innerText = finalWinnMessage}
        
        container.appendChild(finalResultDiv)
        buttons.forEach((button)=>button.disabled = true)
        container.appendChild(tryAgain)
        tryAgain.addEventListener("click",gameRestart)
    }
}

function gameRestart(){
    countComputer= 0
    countPlayer = 0
    container.removeChild(resultTextDiv)
    container.removeChild(scoreTextDiv)
    container.removeChild(finalResultDiv)
    container.removeChild(tryAgain)

    buttons.forEach((button)=>button.disabled = false)
}


function playRound (computer, player){


    let loseMessage = "You lose! " + computer + " beats " + player + "!"
    let winMessage =  "You win! " + player + " beats " + computer + "!"
    let tieMessage = computer + " against " + player + " is a tie!"

    if (computer === player) return tieMessage

    if (
        computer === "Rock" && player === "Scissors" ||
        computer === "Paper" && player === "Rock" ||
        computer === "Scissors" && player === "Paper") 
        {
        countComputer+=1
        
        return loseMessage
        }

    
    else{
        countPlayer +=1
        return winMessage
    }
    
}


buttons.forEach(button=> button.addEventListener("click",onClick))