// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //First, get the password
  var password = generatePassword();
  //store the selector we'll be adjusting
  var passwordText = document.querySelector("#password");
  //assign the password to the selector
  passwordText.value = password;

}

//generate the password after gathering criteria
function generatePassword(){
  //gather length
  var tempInput = parseInt(window.prompt("Select a number between 8 and 128, select the number of characters in your password."));
  //validate that supplied value meets requirements
  while(isNaN(tempInput) || tempInput < 8 || tempInput > 128){ 
    tempInput = parseInt(window.prompt("Sorry, we are limited a valid number between 8 and 128. Please try again."));
  }
  var numChars = tempInput;
  // get which character sets should be included
  var lowerCase = window.confirm("Should you password include lower-case letters?");
  var upperCase = window.confirm("Should you password include upper-case letters?");
  var numeric = window.confirm("What about numbers? Do you want some of them in there too?");
  var special = window.confirm("I heard you like special characters. Do you want me to sprinkle some of these on top?");

  // ensure that at least one character set is selected
  // if not, reprompt until one is
  while(lowerCase === false && upperCase === false && numeric === false && special === false){
    window.confirm("Sorry, you must select at least one character type to include.");
    lowerCase = window.confirm("Should you password include lower-case letters?");
    upperCase = window.confirm("Should you password include upper-case letters?");
    numeric = window.confirm("What about numbers? Do you want some of them in there too?");
    special = window.confirm("I heard you like special characters. Do you want me to sprinkle some of these on top?");
  }
  
  var myPassword = ""; //start with an empty string
  var lowerCaseChoices = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChoices = "ABCDEFGHIJKLMNOPQRZTUVWXYZ";
  var numumericChoices = "0123456789";
  var specialCharChoices = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  //loop through enabled character types and add a character until enough 
  //characters have been added to meet the requirements
  for(i=0;i<tempInput; i=i){
    if(lowerCase){
      var randTmp = Math.floor(Math.random()*lowerCaseChoices.length);
      myPassword = myPassword + lowerCaseChoices.substring(randTmp,randTmp+1);
      i++;
    }
    if(upperCase){
      var randTmp = Math.floor(Math.random()*upperCaseChoices.length);
      myPassword = myPassword + upperCaseChoices.substring(randTmp,randTmp+1);
      i++;
    }
    if(numeric){
      var randTmp = Math.floor(Math.random()*numumericChoices.length);
      myPassword = myPassword + numumericChoices.substring(randTmp,randTmp+1);
      i++;
    }
    if(special){
      var randTmp = Math.floor(Math.random()*numumericChoices.length);
      myPassword = myPassword + specialCharChoices.substring(randTmp,randTmp+1);
      i++;
    }
  }
  //return the password, but making sure to truncate it to the desired 
  //number of characters
  return myPassword.substring(0,numChars);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
