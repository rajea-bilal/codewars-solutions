// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(string){
  
    let newString = string.slice(1, -1);
    return newString
   
  }
  
  
  console.log(removeChar('rajea'));
   
   