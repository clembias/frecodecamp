const textInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");

button.addEventListener("click", function() {
  
  let userInput = textInput.value; 
  if (userInput === "") {
    alert("Please input a value");
  } else {
    
    let charactersArray = userInput.match(/[A-Za-z0-9]/g) || []; 
    let charactersArrayReversed = charactersArray.slice().reverse(); 

    
    let charactersString = charactersArray.join(''); 
    let charactersStringReversed = charactersArrayReversed.join(''); 

   /* console.log(charactersString);
    console.log(charactersStringReversed); */

    
    if (charactersString.toLowerCase() === charactersStringReversed.toLowerCase()) {
      console.log(userInput + " is a palindrome");
      document.getElementById("result").innerHTML = `${userInput} is a palindrome`; 
    } else {
      console.log(userInput + " is not a palindrome");
      document.getElementById("result").innerHTML = `${userInput} is not a palindrome`  
    }
  }
});