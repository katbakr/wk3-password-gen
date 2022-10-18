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
    var chooseLength = window.prompt ("How long do you want your password? Enter number between 8-128.");
    var includeLowercase = confirm ("Do you need lowercase letters in your password? Confirm for YES and Cancel for NO.");
    var includeUppercase = confirm ("Do you need uppercase letters in your password? Confirm for YES and Cancel for NO.");
    var includeNumbers = confirm ("Do you need numbers in your password? Confirm for YES and Cancel for NO.");
    var includeSpec = confirm ("Do you need a special character in your password? Confirm for YES and Cancel for NO.");

  
    var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numberList = ["1", "2","3", "4", "5", "6", "7", "8", "9", "0"];
    var specList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", "/", "<", ">"];
  

    //variable for final password deploy(?)
    var passwordFinal = [];
    var possibleCharacters = [];

    //math.random used to pull random charcter from arrays above 
        var uppercaseIndex = Math.floor(Math.random()*uppercaseList.length);
        var lowercaseIndex = Math.floor(Math.random()*lowercaseList.length);
        var numberIndex = Math.floor(Math.random()*numberList.length);
        var specialIndex = Math.floor(Math.random()*specList.length);
   

      //If statements for using user inputs to choose what is added to final password
   
      //If for determining possible length for user password and prompt if input is too small/big
      if (chooseLength < 8 || chooseLength > 128) {
        window.alert("please choose a valid length");
        return null;
      }


      //if statement for lowercase choice concat
      if (includeLowercase){
        possibleCharacters = possibleCharacters.concat(lowercaseList); 
      }


      //if statement for uppercase choice concat
      if (includeUppercase){
      possibleCharacters = possibleCharacters.concat(uppercaseList);
    }
      

    //if statement for number choice concat

      if (includeNumbers) {
      possibleCharacters = possibleCharacters.concat(numberList); 
    }
    

    //if statement for special character choice concat

      if (includeSpec) {
      possibleCharacters = possibleCharacters.concat(specList); 
    }
      

    //If statement for prompt if user chooses no to all character choices

      if (includeUppercase===false && includeNumbers===false && includeSpec===false && includeLowercase===false) {
      window.alert("Please choose at least one from character options!");  
        return null;
      }
      //  console.log(possibleCharacters)

   //for loop for pulling random option from array above    
   for (let i = 0; i < chooseLength; i++)
      { var randomIndex = Math.floor(Math.random()*possibleCharacters.length);
     passwordFinal.push(possibleCharacters[randomIndex]);
    console.log(passwordFinal);
    }


    return passwordFinal.join("") ;
}