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
function generatePassword() {
    //variables for user input prompts and character lists
    var chooseLength = window.prompt ("How long do you want your password? Enter number between 8-128.")
    var includeUppercase = confirm ("Do you need uppercase letters in your password? Enter Yes or No.")
    var includeNumbers = confirm ("Do you need numbers in your password? Enter Y or N.")
    var includeSpec = confirm ("Do you need a special character in your password? Enter Y or N.")
  
    var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var numberList = ["1", "2","3", "4", "5", "6", "7", "8", "9", "0"]
    var specList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", "/", "<", ">"]
  
    //variable for final password deploy(?)
    var passwordFinal = []
    var possibleCharacters = []
    //for loop for pulling random option from array above
  
        var uppercaseIndex = Math.floor(Math.random()*uppercaseList.length);
        var lowercaseIndex = Math.floor(Math.random()*lowercaseList.length);
        var numberIndex = Math.floor(Math.random()*numberList.length);
        var specialIndex = Math.floor(Math.random()*specList.length);
   
        //variable for NEED HELP
        var uppercase = uppercaseList[uppercaseIndex]
        var lowercase = lowercaseList[lowercaseIndex]
        var number = numberList[numberIndex]
        var specialChar = specList[specialIndex]

      //If statements for using user inputs to choose what is added to final password
   
      //if statement for uppercase choice concat
      if (chooseLength < 8 || chooseLength > 128) {
        window.alert("please choose a valid length")
        return null
      }

      if (includeUppercase){
        possibleCharacters.concat(uppercaseList) }
      // } else if (includeUppercase!=="Y","y","yes","YES", "Yes"){
      // passwordFinal.concat()
      // }

    //if statement for number choice concat

      if (includeNumbers) {
        possibleCharacters.concat(numberList) }
      // } else if (includeNumbers!=="Y","y","yes","YES", "Yes"){
      // passwordFinal.concat()
      // }

    //if statement for special character choice concat

      if (includeSpec) {
      possibleCharacters.concat(specList) }
      // } else if (includeSpec!=="Y","y","yes","YES", "Yes"){
      // passwordFinal.concat()
      // }

    //if statement for mandatory lowercase concat

      if (includeUppercase===false && includeNumbers===false && includeSpec===false) {
      window.alert("please choose a character")  
        return null}
       console.log(possibleCharacters)
       
   for (let i = 0; i < chooseLength; i++)
        { var randomIndex = Math.floor(Math.random()*possibleCharacters.length)
     passwordFinal.push(possibleCharacters[randomIndex])
    console.log(passwordFinal)
    }
    window.alert("Your new password is: " + password)
    return passwordFinal.join("") 
}