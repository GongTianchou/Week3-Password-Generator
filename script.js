// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 
function generatePassword(){
  //var passwordLength = 0;
  //while(passwordLength <8 || passwordLength >128){
 // passwordLength = prompt("Please enter the password length between 8 and 128");
  //}
  
  var passwordLength = prompt("Please enter the password length between 8 and 128");
  if(passwordLength < 8 || passwordLength > 128) {
  alert('Please input proper password length');
  return
}

  var validPasswordType = false;
  var numeric = false;
  var upperLetter = false;
  var lowerLetter = false;
  var special = false;

  while(!validPasswordType){
    numeric = window.confirm("Any Numberic?");
    upperLetter = window.confirm("Any Upperletter");
    lowerLetter = window.confirm("Any Lowerletter?")
    specialLetter = window.confirm ("Any Spcial Letter");
    if(numeric || upperLetter || lowerLetter || specialLetter){
      validPasswordType = true;
    }else{
      alert("Please select at least one type of passowrd");
    }
  }
   var numericList = "0123456789";
   var specialList =  " !#%&'()*,\-./:;?@[\]_{}]";
   var upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var lowerList = "abcdefghijklmnopqrstuvwxyz";
   var passwordType = "";

  if(numeric){
   passwordType += numericList;
  }
  if(upperList){
    passwordType += upperList;
  }
  if(lowerLetter){
    password += lowerList;
  }
  if (specialLetter){
    passwordType += specialList;
  }

  password = "";
  for(var i = 0; i < passwordLength; i++){
    password += passwordType.charAt(Math.floor(Math.random() * (passwordLength)));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
