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

const MIN_NUMBER = 0;
const MAX_NUMBER = 10;

function NGG() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let guess = null;

  console.log("Secret Number Guessing Game between 1 to 10");

  while (guess !== randomNumber) {
    userChoicePrompt = prompt("Guess the Number between 1 to 10");

    guess = parseInt(userChoicePrompt);
    console.log("your selection :", guess);

    if (isNaN(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
      console.log("Please enter a valid number between 1 and 10.");
      continue;
    }

    attempts++;

    // if (randomNumber === guess) {
    //   console.log("Number :", randomNumber);
    //   console.log(`You guess the right number in ${attempts} attempts!`);
    // } else if (
    //   (randomNumber >= 1 &&
    //     randomNumber <= 5 &&
    //     guess >= 1 &&
    //     guess <= 5) ||
    //   (randomNumber > 5 &&
    //     randomNumber >= 10 &&
    //     guess > 5 &&
    //     guess >= 10)
    // ) {
    //   console.log("You are close enough");
    // } else {
    //   console.log("You are not close to the Suprise number. Try Again!");
    // }

    const difference = Math.abs(randomNumber - guess);
    if (difference === 0) {
      console.log("Number :", randomNumber);
      console.log(`You guessed the right number in ${attempts} attempts!`);
    } else if (difference === 1) {
      console.log("You are very close! Try again.");
    } else if (difference === 2) {
      console.log("You are close enough! Try again.");
    } else if (difference === 3) {
      console.log("You are getting there! Try again.");
    } else {
      console.log("You are not close to the surprise number. Try Again!");
    }
  }

  const playAgainPrompt = prompt("Do you want to play Again? (yes/no)");
  const playAgain = playAgainPrompt
    ? playAgainPrompt.toLocaleLowerCase()
    : "no";
  if (playAgain === "yes") {
    NGG();
  } else {
    console.log("Thanks for Playing! See you Next Time");
  }
}

NGG();
