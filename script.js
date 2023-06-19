// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialCharacters = "!@#$%&*".split("");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var promptReturn = prompt("What length do you want your password");
  var parsedInteger = parseInt(promptReturn);
  
  // check that parsedInteger is a number
  if (isNaN(parsedInteger)) {
    alert("Hey please enter a number.");
    return null;
  }

  // check the size of your number
  if(parsedInteger < 8 || parsedInteger > 128) {
    alert('Hey you need to choose between 8 and 128 characters');
    return null;
  }

  var wantsLowercase = window.confirm ("Do you want lowercase letters?"); 
  var wantsUppercase = window.confirm ("Do you want uppercase letters?"); 
  var wantsNumbers = window.confirm ("Do you want numbers?"); 
  var wantsSpecial = window.confirm ("Do you want special characters?"); 

  if (wantsLowercase || wantsUppercase || wantsNumbers || wantsSpecial) {
    
    // since you know what sets of character the user wants
    // you can build a "master" array from the individual arrays
    // you would check IF one of the variables is true, and if so, add that array's characters
    // to your "master" array. Repeat this for the remaining variables
    // After, you're going to have one master array with all hthe possible characters from which to choose
    // Here is where you will choose a random character, as many times as you need to
    // reach the length rquested by the user.
    // Concatenate or combine all the characters together, and then return that as your value

    // return finalPassword
  } else {
    alert("Hey you need to pick at least one option.");
    return null;
  }
  
  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/* 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page 
*/
