/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once User will enter a number, you will tell user if the entered number is lower or higher. with this information, user will change the number of attempts made by users to rach to this right guess.
 */

// max number
// min number
// Secret number is a random number between the min and max
// get the prommpt from the user as a guess
// Create a variable to store the number of attempts
// write the logic to check if the guess and the secret nummber are same. if not continue a loop to ask again

// inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high

// give the option to play again


function NGG() {
  console.log("Secret Number Gussing Game");

  const userChoicePrompt = prompt("Gusse the Number");

  console.log("your selection :", userChoicePrompt)
  const randomNumber = Math.floor(Math.random() * 10) +1;

  console.log("Number :", randomNumber);

  if ( randomNumber === userChoicePrompt) {
    console.log("You gusse the right number")
  } else if ( 1 <= randomNumber <=5 && 1<= userChoicePrompt <= 5 ) {
    console.log("You are close enough");
    const userChoicePrompt = prompt("Gusse the Number");
  } else if ( 5 < randomNumber >= 10 && 5 < userChoicePrompt >= 10 ) {
    console.log("You are not close to the suprise number");
    const userChoicePrompt = prompt("Gusse the Number");
  }

}

NGG();