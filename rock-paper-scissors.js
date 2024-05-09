function getComputerChoice(){
  let num = Math.random();

  if (num > 0.66) return "Rock";
  else if ( num > 0.33 ) return "paper";
  else return "scissors";
}

function getHumanChoice(){
  let humanChoice = "a";

  humanChoice = prompt("rock, paper, scissors?");
  humanChoice = humanChoice.toLowerCase();

  while ( humanChoice !== "scissors" && humanChoice !== "rock" && humanChoice !== "paper" ){
    humanChoice = prompt("wrong awnser :(\nrock, paper, scissors?");
    humanChoice = humanChoice.toLowerCase();
  }

  return humanChoice;
}

function playRound(humanChoice, computerchoise){
  if( humanChoice === computerchoise ){ console.log("draw..."); return 0; }

  if( humanChoice === "rock" && computerchoise === "scissors" ) { console.log( "you won. rock breaks scissors" );   return 1; }
  if( humanChoice === "scissors" && computerchoise === "paper" ) { console.log( "you won. scissors cuts paper" );   return 1; }
  if( humanChoice === "paper" && computerchoise === "rock" ) { console.log( "you won. paper surrounds rock" );      return 1; }

  if( humanChoice === "scissors" && computerchoise === "rock" ) { console.log( "you loose. rock breaks scissors" );return -1; }
  if( humanChoice === "paper" && computerchoise === "scissors" ) { console.log( "you loose. scissors cuts paper" );return -1; }
  if( humanChoice === "rock" && computerchoise === "paper" ) { console.log( "you loose. paper surrounds rock" );   return -1; }
}

function tryAgain() {
  let awnser = prompt("do you want to try again")
  awnser = awnser.toLocaleLowerCase();

  if (awnser === 'yes') return true;
  else return false;
}

function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  let humanSelection;
  let computerSelection;

  for( i = 1 ; i <= 5 ; i++ ){
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    let score = playRound( humanSelection, computerSelection);
    if ( score === 1 ) humanScore++;
    else if (score === -1) computerScore++;

    console.log( `round : ${i}/5 \nyour score: ${humanScore}\ncomputer score: ${computerScore}` );
  }

  if (humanScore > computerScore) console.log ("winner winner chicken dinner!!!");
  else if (humanScore === computerScore) console.log( "WOW draw...." );
  else console.log( "ahhhhh you lost" );
}


let again = true;

while(again)
{
  playGame();
  again = tryAgain();
}