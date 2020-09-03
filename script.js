// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//input var
var enter;
var confirmNumber;
var confirmSpecial;
var confirmUpper;
var confirmLower;
//Code that trent gave us with edits
// counts up from 97 on the charsheet until it reaches 26
let letters = [...Array(26).keys()].map(i => String.fromCharCode(i + 97)); 
console.log(letters);

let upperLetters = [...Array(26).keys()].map(i => String.fromCharCode(i + 65));
console.log(upperLetters);

let number = [1,2,3,4,5,6,7,8,9,0];
console.log(number);

let special = ['!','@','#','&','%'];
console.log(special); 

let passwordArray = [
  
];
//Trents code ends
function generatePassword() {
  enter = parseInt(prompt("How many characters between 8 and 128?"));

//Validate input
//continue
if (enter < 8 || enter > 128) {
  enter = parseInt(prompt("Please input a valid number"));
}
confirmLower=confirm("would you like letters?");
if (confirmLower){
  passwordArray=passwordArray.concat(letters)
}
confirmUpper=confirm("would you like upper case letters?");
if (confirmUpper){
  passwordArray=passwordArray.concat(upperLetters)
}
confirmNumber=confirm("would you like numbers?");
if (confirmNumber){
  passwordArray=passwordArray.concat(number)
}
confirmSpecial=confirm("would you like special characters?"); 
if (confirmLower){
  passwordArray=passwordArray.concat(special)
}
//Array choice, turn off array numbers   
//Trents Code starts again
let passwordLength = enter;
console.log(passwordArray);
let password = '';
for(let i =0; i <= passwordLength; i++){
    let arrayNum = Math.floor(Math.random() * passwordArray.length); //gives us random number then math.floor rounds it
    console.log(`Array Choice ${arrayNum} char choice`);
    let passwordChar = passwordArray [arrayNum];
    password = password + passwordChar;
}
//Trents code ends
console.log(`Password is ${password}`);
return password;
}
// Create functions for random letters
// Found javascript browser charset on forum: http://www.net-comber.com/charset.html
// Create promt to set password prefrences with if statements
// Randomize 
//print