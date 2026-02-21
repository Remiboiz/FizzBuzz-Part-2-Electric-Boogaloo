// TODO: Define constants for the form and the result display area
const inputField = document.getElementById("fizzbuzzInput");
const submitButton = document.getElementById("fizzbuzzbutton");
const resultArea = document.getElementById("result");
const for1 = document.getElementById("for1");
// TODO: Add the first line of the event listener to handle form submission

for1.addEventListener("submit", function(event){
    // Prevent the form from refreshing the page
    event.preventDefault();

    let inputValue= inputField.value;

    let outputMessage = "";

    let num = Number(inputValue);

    if (inputValue === "" || isNaN(num)) {outputMessage= "Please enter a valid number."; } 

    else if (num % 3 === 0 && num% 5 === 0) { outputMessage = "FizzBuzz";}

    else if (num % 3 === 0) {outputMessage = "Fizz";}

    else if (num % 5 === 0) {outputMessage = "Buzz";}

    else {outputMessage = num;}
    

// TODO: Get the number from the form input

// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself

// Display the result on the page
resultArea.textContent = outputMessage; });
