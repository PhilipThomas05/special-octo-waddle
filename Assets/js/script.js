var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]+\/=";
var chosenCharacters = "";

generateBtn.addEventListener("click", writePassword);

function writePassword() {
    chosenCharacters = "";
    var password = generatePassword();
    passwordText.value = password;
}

function generatePassword() {
    var result = "";
    var length = prompt("How many characters in your random password? (between 8 and 128)");

    if (isNaN(length) || length < 8 || length > 128) {
        alert("Please choose a number between 8 and 128!");
        return generatePassword();
    }

    var hasUpper = confirm("Include uppercase letters?");
    var hasLower = confirm("Include lowercase letters?");
    var hasNumbers = confirm("Include numbers?");
    var hasSpecial = confirm("Include special characters?");

    if (!hasUpper && !hasLower && !hasNumbers && !hasSpecial) {
        alert("You must select at least one character type!");
        return generatePassword();
    }

    if (hasUpper) {
        chosenCharacters += upper;
    }
    if (hasLower) {
        chosenCharacters += lower;
    }
    if (hasNumbers) {
        chosenCharacters += numbers;
    }
    if (hasSpecial) {
        chosenCharacters += special;
    }

    for (var i = 0; i < length; i++) {
        result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
    }

    return result;
}
