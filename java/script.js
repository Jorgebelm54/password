//varibles for the characters for password 
const lowercaseChar = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercaseChar = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numericChar = ["1","2","3","4","5","6","7","8","9"];
const specialChar = ["!","@","#","$","%","^","&","*","(",")","-","=","+"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//define the generate password function
function generatePassword(){
  //get pref from the user
  var length = prompt("choose length of password"); 
  if(length < 8){
    alert("password must be 8 characters");
    return 
  }
  if(length > 128){
    alert("password must be less than 128 characters");
    return 
  }

  var lowercase = confirm("Do you want lower case to be included in password ?")
  var uppercase = confirm("Do you want upper case to be included in password ?")
  var numeric = confirm("Do you want numbers in your password?")
  var special = confirm("do you want special characters in your password?")
  console.log(lowercase, uppercase, numeric, special);

  //create a set of possible passwords based on user prefer
  var possibleChar = [];
  if(lowercase === true ){
    possibleChar = possibleChar.concat(lowercaseChar)
  }
  if(uppercase === true ){
    possibleChar = possibleChar.concat(uppercaseChar)
  }
  if(numeric === true ){
    possibleChar = possibleChar.concat(numericChar)
  }
  if(special === true ){
    possibleChar = possibleChar.concat(specialChar)
  }
  console.log(possibleChar);
  //loop over the possibleCHAR array whatever the value of length is figure out how to grab a random character everytime i loop over it, push random character into the pwd array (pwd[])
  var pwd = possibleChar.join("");
  for (var i = 0; i <= length; i++){
    console.log();
    var passRandom = pwd.charAt(Math.floor(Math.random() * pwd.length));
  password = passRandom;
  }
  return pwd;
}






// Write password to the #password input
var writePassword = function(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);