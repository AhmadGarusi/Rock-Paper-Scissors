let divGame = document.getElementById("game");
let displayer = document.createElement("div");
displayer.setAttribute("id", "displayer");

divGame.appendChild(displayer);


let scoretext = document.createElement('div');
divGame.appendChild(scoretext);

function getComputerChoice(){
  let num = Math.random();

  if (num > 0.66) return "rock";
  else if ( num > 0.33 ) return "paper";
  else return "scissors";
}

function getHumanChoice(target){
  let humanChoice = "";

  switch(target.id)
  {
    case 'rock':
      humanChoice = 'rock';
      break;
    case 'paper':
      humanChoice = 'paper';
      break;
    case 'scissors':
      humanChoice = 'scissors'
      break;
    default:
      console.log('wrong button id try again')
  }

  return humanChoice;
}

function playRound(humanChoice, computerchoise){
  if( humanChoice === computerchoise ){ displayer.textContent = "draw..."; return 0; }

  if( humanChoice === "rock" && computerchoise === "scissors" ) { displayer.textContent = "you won. rock breaks scissors" ;   return 1; }
  if( humanChoice === "scissors" && computerchoise === "paper" ) { displayer.textContent = "you won. scissors cuts paper" ;   return 1; }
  if( humanChoice === "paper" && computerchoise === "rock" ) { displayer.textContent = "you won. paper surrounds rock" ;      return 1; }

  if( humanChoice === "scissors" && computerchoise === "rock" ) { displayer.textContent = "you loose. rock breaks scissors" ; return -1; }
  if( humanChoice === "paper" && computerchoise === "scissors" ) { displayer.textContent = "you loose. scissors cuts paper" ; return -1; }
  if( humanChoice === "rock" && computerchoise === "paper" ) { displayer.textContent = "you loose. paper surrounds rock" ;    return -1; }
}

function tryAgain() {
  let awnser = prompt("do you want to try again")
  awnser = awnser.toLocaleLowerCase();

  if (awnser === 'yes') return true;
  else return false;
}

let humanScore = 0;
let computerScore = 0;
let buttons = document.getElementById("buttons");

buttons.addEventListener('click', function (e) {
  let humanSelection = getHumanChoice(e.target);
  let computerSelection = getComputerChoice();
  
  let score = playRound(humanSelection, computerSelection);
  if ( score === 1 ) humanScore++;
  else if (score === -1) computerScore++;
  
  if ( computerScore < 5 && humanScore < 5 )
    scoretext.textContent = `your score: ${humanScore} computer score: ${computerScore}`;
  
  else if (computerScore === 5){
    scoretext.textContent = `your score: ${humanScore} computer score: ${computerScore} you lost this game :(`;
    computerScore = 0;
    humanScore = 0;
  }
  else if (humanScore === 5){
    scoretext.textContent = `your score: ${humanScore} computer score: ${computerScore} you won this game :)`;
    computerScore = 0;
    humanScore = 0;
  }
});

