function SPSgame(){
  console.log("Welcome to SPS Game");
  const userChoicePrompt = prompt("Enter Rock, Paper, or Scissors")
  let userChoice = userChoicePrompt.toLowerCase();

  let computerChoice;

  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if( randomNumber === 1 ) {
    computerChoice = "rock"; 
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  
console.log("User selected", userChoice);
console.log("Computer selected", computerChoice);

if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper")
){
  console.log("You the User WIN, yay!!!")
} else if (userChoice === computerChoice) {
    console.log("The Game is a Tie");
} else if (
  (userChoice === "rock" && computerChoice === "paper") ||
  (userChoice === "paper" && computerChoice === "scissors") ||
  (userChoice === "scissors" && computerChoice === "rock")
){
  console.log("oh no... computer Wins!!!!!");
} else {
  console.log("Please check the input, we didn't understand it.")
}


const playAgainPrompt = prompt("Do you want to play Again? (yes/no)");
const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";

if (playAgain === "yes") {
  SPSgame();
}else {
  console.log("Thanks for Playing! See you Next Time")
}

};

SPSgame();
