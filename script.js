// Assignment Code -- button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input -- function to be triggered
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword() {
  // return "Can you hear me??"
}


// Add event listener to generate button -- trigger to initiate function
generateBtn.addEventListener("click", writePassword);




// need to be able to choose length 8-128 characters

// character type options; lowercase, uppercase, numberic and special characters. must select at least one type

// password displays in an alert or is written on the page