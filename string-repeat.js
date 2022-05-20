// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
  
    let newString = "";
    
    for(let i = 1; i <= n; i++) {
      newString = newString + s;
    }
    return newString
  }
  
  console.log(repeatStr(5, 'hey'))