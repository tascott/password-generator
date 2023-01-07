// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let noOfChars, upperCase, lowerCase, numeric, special;
  let minOptsSelected = false;

  do {
    noOfChars = Number(prompt('how many characters would you like to include in your password? (Min 10, Max 64) '));
    if ((noOfChars > 64) || (noOfChars < 10)) alert('Character length must be a number and between 10 and 64!');
  } while ((noOfChars < 10) || (noOfChars > 64));

  do {
    upperCase = confirm('Include uppercase letters?');
    lowerCase = confirm('Include lowercase letters?');
    numeric = confirm('Include numeric characters?');
    special = confirm('Include special characters?');
    console.log(upperCase)
    if (upperCase || lowerCase || numeric || special) {
      minOptsSelected = true;
    } else {
      alert('You must pick at least one!')
    }
  } while (minOptsSelected == false);

  return {noOfChars, upperCase, lowerCase, numeric, special};
}

// Function for getting a random element from an array
function getRandom(arr) {
  // let length = arr.length;
  // pick a random element from the array passed in
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);