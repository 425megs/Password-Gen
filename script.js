// press generate password --> prompt for length --> prompt for uppercase -->prompt for lowercase --> promt for special characters --> password is displayed


// Assignment Code -- button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input -- function to be triggered
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// need an empty array where password will live 
var mainArray = []


// prompts for password criteria
// window.prompt("How long do you want your password to be? Select a number between 8-128")
// window.confirm("Do you want to include numbers?")
// window.confirm("Do you want to include lowercase letters?")
// window.confirm("Do you want to include uppercase letters?")
// window.confirm("Do you want to include special characters?")

// something like... 
// if 'okay' for uppercase ... then generate a random letter between A-Z
//   else ... ?
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// if 'okay' for lowercase ... then generate a random letter between a-z
//   else ... ?
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// if 'okay' for special characters ... then randomly select from "~!@#$%^&*()-+<>"
//   else ...?
var specs = ["!",",",'"',"#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","{","|","}","~"]
// if 'okay' for numbers ... randomly select number between 0-9
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// How will I know how many letters vs numbers vs special characters to include?



function generatePassword() {
  var length = prompt("How long do you want your password to be? Select a number between 8-128");
  console.log(length)
  var addUpperCase = confirm("Do you want to include uppercase letters?")
  console.log(upperCase)
  var addLowerCase = confirm("Do you want to include uppercase letters?")
  console.log(lowerCase)
  var addNumbers = confirm("Do you want to include uppercase letters?")
  console.log(numbers)
  var addSpecialChar = confirm("Do you want to include uppercase letters?")
  console.log(specialChar)

  if (addUpperCase === true) {
    mainArray = mainArray.concat(upper);
  }
  if (addLowerCase === true) {
    mainArray = mainArray.concat(lower);
  }
  if (addNumbers === true) {
    mainArray = mainArray.concat(nums);
  }
  if (addSpecialChar === true) {
    mainArray = mainArray.concat(specs);
  }

}

// Add event listener to generate button -- trigger to initiate function
generateBtn.addEventListener("click", writePassword);

