//Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Define characters for numbers, spceial characters, lowercase letters, and uppercase letters.
let specialChar = ["@", "$", "*", "!", "%", "&", "#", "?", ">", ".", "=", "+", "(", "-", ")", "<", "/", "\\", ';', '[', ']', ':', '{', '}', '|', '“', "'", "_"];
let numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowerChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');



// Prompt to ask for password length.
function pwLength() {

//let specialChar = "!@#$%^&*()-_+={}[]|:;'<,>.?/";
//let numberChar = "0123456789";
//let lowerChar = 'abcdefghijklmnopqrstuvwxyz';
//let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var passwordLength = prompt("How many characters do you want in your password? \n Enter a number between 8 and 128");
//Confirm length is a number and inbetween 8-128 characters.
  if (isNaN(passwordLength) || passwordLength <8 || passwordLength >128) {
        alert("Please enter a number in between 8 and 128");
        return pwLength();
      }
      console.log(passwordLength)

//Ask if user wants to use numbers, spceial characters, lowercase letters, and/or uppercase letters.
  let confirmLC = confirm("Do you want to use lower case letters?")
  let confirmUC = confirm("Do you want to use upper case letters?")
  let confirmN = confirm("Do you want to use numbers?")
  let confirmSC = confirm("Do you want to use special characters?")

if (confirmLC == "False" && confirmUC == "False" && confirmN == "False" && confirmSC == "False") {
  alert("You must choose at least one character type");
  return pwLength();
}

//create characters for password
  passwordCharacters="";

//If statements selecter user chosen characters.

  if (confirmLC == true) {
    passwordCharacters += specialChar;
  }
  if (confirmUC == true) {
    passwordCharacters += numberChar;
  }
  if (confirmN == true) {
    passwordCharacters += lowerChar;
  }
  if (confirmSC == true) {
    passwordCharacters += upperChar;
  }

  console.log(passwordCharacters);

  let passwordFinal = "";

  for (let i = 0; i <passwordLength; i++) {
    let randomSelect = Math.floor(Math.random() * passwordCharacters.length);
    passwordFinal += passwordCharacters[randomSelect];
  }
  console.log(passowrdFinal);

//let passwordInfo = {
  //length: passwordLength,
 // lcChar: confirmLC,
  //ucChar: confirmUC,
 // numChar: confirmN,
 // spChar: confirmSC 
}
//console.log(passwordInfo)


//function generatePassword() {
  pwLength();
//}