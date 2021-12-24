// Array for uppercase options
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Array for lowercase options
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Array for special charater options
var specs = ["!", ",", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "{", "|", "}", "~"]

// Array for number options
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Button
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Empty array where options will be concacted 
var mainArray = []

// Empty string where password will be displayed after randomization
var passwordString = ""


// Function for various prompts, selector and randomizer
function generatePassword() {
  var length = prompt ("How long do you want your password to be? Select a number between 8-128");
  while(length < 8 || length > 128) {
    length = prompt("Please select a value between 8-128");
  }
  var addUpperCase = confirm("Do you want to include uppercase letters?")
  var addLowerCase = confirm("Do you want to include lowercase letters?")
  var addNumbers = confirm("Do you want to include numbers?")
  var addSpecialChar = confirm("Do you want to include special characters?")

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

  for (var i = 0; i < length; i++) {
    passwordString = passwordString.concat(mainArray[Math.floor(Math.random() * mainArray.length)]);
  }

  return passwordString;
}

// Trigger to initiate function
generateBtn.addEventListener("click", writePassword);