//Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", pwLength);

//Assign variable for numbers, special characters, lowercase letters, and uppercase letters.
let specialChar = "!@#$%^&*()-_+={}[]|:;'<,>.?/";
let numberChar = "0123456789";
let lowerChar = 'abcdefghijklmnopqrstuvwxyz';
let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//function to create password
function pwLength() {

// Prompt to ask for password length.
  var passwordLength = prompt("How many characters do you want in your password? \n Enter a number between 8 and 128");

//Confirm length is a number and inbetween 8-128 characters.
  if (isNaN(passwordLength) || passwordLength <8 || passwordLength >128) {
        alert("Please enter a number in between 8 and 128");
        return pwLength();
      }
      console.log(passwordLength)

//Ask if user wants to use numbers, special characters, lowercase letters, and/or uppercase letters.
  let confirmLC = confirm("Do you want to use lower case letters?")
  let confirmUC = confirm("Do you want to use upper case letters?")
  let confirmN = confirm("Do you want to use numbers?")
  let confirmSC = confirm("Do you want to use special characters?")

  //Check to confirm user chose at least one set of characters.
  if (confirmLC == "False" && confirmUC == "False" && confirmN == "False" && confirmSC == "False") {  
    alert("You must choose at least one character type");
    return pwLength();
  }

//create string of characters for password
  passwordCharacters="";

//If statements to select user chosen characters to add into character string

  if (confirmLC == true) {
    passwordCharacters += lowerChar;
  }
  if (confirmUC == true) {
    passwordCharacters += upperChar;
  }
  if (confirmN == true) {
    passwordCharacters += numberChar;
  }
  if (confirmSC == true) {
    passwordCharacters += specialChar;
  }

  console.log(passwordCharacters);

  //Set up string for final password
  let password = "";

  //add random characters from the character string into the password string.
  for (let i = 0; i <passwordLength; i++) {
    let randomSelect = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters[randomSelect];
  }

  console.log(password);

  //Write password to the #password input

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}