// Step 1 rows for the triangle
const numberOfRows = 7; 
// Initialize an empty string to build each row
let triangle = '';

// Loop through each row
for (let i = 1; i <= numberOfRows; i++) {
  // Add '#' characters to the 'triangle' string for the current row
  for (let j = 1; j <= i; j++) {
    triangle += '#';
  }
  // Add a newline character to move to the next row
  triangle += '\n';
}

// Step 3 
console.log(triangle);
