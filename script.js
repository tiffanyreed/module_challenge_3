// Generate password function
function generatePassword() {

  // Prompt for password length
  var length = prompt("Enter the desired length of your password (between 8 and 128 characters):");
  length = parseInt(length);

  // Validate the length input
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  } else {
    // Prompt for the next requirement
    var includeLowercase = confirm("Include at least lowercase character");
    var includeUppercase = confirm("Include at least one uppercase character");
    var includeNumeric = confirm("Include at least one numeric character");
    var includeSpecial = confirm("Include at least one special character");
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    // Check if at least one character type is selected
    var validCharacterTypes = '';
    if (includeLowercase) {
      validCharacterTypes += lowercaseChars;
    }
    if (includeUppercase) {
      validCharacterTypes += uppercaseChars;
    }
    if (includeNumeric) {
      validCharacterTypes += numericChars;
    }
    if (includeSpecial) {
      validCharacterTypes += specialChars;
    }
    var password = ''
    for (let i = 0; i < length; i++) {
      password += validCharacterTypes.charAt(Math.floor(Math.random() * validCharacterTypes.length))

    }
    return password
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
