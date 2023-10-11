// Declare a variable 
let coinFlip

const numFlips = parseInt(prompt("How many times do you want to flip the coin? "))

if(!isNaN(numFlips)){
    for(let i = 0; i <numFlips; i++){
        coinFlip = Math.floor(Math.random() * 2);
if(coinFlip === 0){
console.log("Heads")
}else{
    console.log("Tails")
}
    }
}else{
    console.log("Invalid input.")
}