// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    let removed = x.split(' ').join('');
    return removed
  }
   
  console.log(noSpace('My name is Rajea'));