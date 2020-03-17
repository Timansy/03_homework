// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generate the password after gathering criteria
function generatePassword(){
  var myPassword= "";
  var tempInput = parseInt(window.prompt("Select a number between 8 and 128, select the number of characters in your password."));
  while(isNaN(tempInput) || tempInput < 8 || tempInput > 128){ 
    tempInput = parseInt(window.prompt("Sorry, we are limited a valid number between 8 and 128. Please try again."));
  }
  var numChars = tempInput;
  var lowerCase = window.confirm("Should you password include lower-case letters?");
  var upperCase = window.confirm("Should you password include upper-case letters?");
  var numeric = window.confirm("What about numbers? Do you want some of them in there too?");
  var special = window.confirm("I heard you like special characters. Do you want me to sprinkle some of these on top?");

  while(lowerCase === false && upperCase === false && numeric === false && special === false){
    window.confirm("Sorry, you must select at least one character type to include.");
    lowerCase = window.confirm("Should you password include lower-case letters?");
    upperCase = window.confirm("Should you password include upper-case letters?");
    numeric = window.confirm("What about numbers? Do you want some of them in there too?");
    special = window.confirm("I heard you like special characters. Do you want me to sprinkle some of these on top?");
  
  }

  var lowerCaseChoices = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChoices = "ABCDEFGHIJKLMNOPQRZTUVWXYZ";
  var numumericChoices = "0123456789";
  var specialCharChoices = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

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

  return myPassword.substring(0,numChars);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
