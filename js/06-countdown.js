// Step 1Prompt the user for a number
const userInput = parseInt(prompt("Enter a number to count down from:"));

// Step 2 Check if the user entered a valid number
if (!isNaN(userInput)) {
  //Step 3 Use a while loop to count down from the user's number to 0
  let count = userInput;
  while (count >= 0) {
    console.log(count);
    count--;
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}
