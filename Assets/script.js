///////////////////////// DO NOT CHANGE ////////////////////////////////////
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
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////
function genPass() {
    var chooseLength = window.prompt ("How long do you want your password? Enter number between 8-128.")
    var includeUppercase = window.prompt ("Do you need uppercase letters in your password? Enter Yes or No.")
    var includeNumbers = window.prompt ("Do you need numbers in your password? Enter Y or N.")
    var includeSpec = window.prompt ("Do you need a special character in your password? Enter Y or N.")
  
    var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var numberList = ["1", "2","3", "4", "5", "6", "7", "8", "9", "0"]
    var specList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", "/", "<", ">"]


}