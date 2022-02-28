// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = 0;
  while(passwordLength <8 || passwordLength >128){
  passwordLength = prompt("Please enter the password length between 8 and 128");
  }
}
  var validPasswordType = false;
  var numeric = true;
  var upperLetter = true;
  var lowerLetter = true;

  while(!validPasswordType){
    numeric = window.confirm("Any Numberic?");
    upperLetter = window.confirm("Any Upperletter");
    lowerLetter = window.confirm("Any Lowerletter?")

    if(numeric || upperLetter || lowerLetter){
      validPasswordType = true;
    }else{
      alert("Please select at least one type of passowrd");
    }
  }
   var numericList = "0123456789"
   var upperList = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
   var lowerList = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
   var PasswordType = "";




   
   
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
