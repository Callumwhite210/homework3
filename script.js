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
  letters,
  upperLetters,
  number,
  special
];

let passwordLength = 4;
let password = '';
for(let i =0; i <= passwordLength; i++){
    let arrayNum = Math.floor(Math.random() * 4); //gives us random number then math.floor rounds it
    let charNum = Math.floor(Math.random() * 4);
    console.log(`Array Choice ${arrayNum} char choice ${charNum}`);
    let passwordChar = passwordArray [arrayNum][charNum];
    password = password + passwordChar;
}

console.log(`Password is ${password}`);

// Create functions for random letters
// Found javascript browser charset on forum: http://www.net-comber.com/charset.html
// Create promt to set password prefrences with if statements 
// print password