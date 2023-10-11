// Step 1 Declare a variable 
let coinFlip;

//Step 2 Create a do-while loop
do {
  
  coinFlip = Math.floor(Math.random() * 2);

  
  if (coinFlip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
} while (coinFlip === 0); 
