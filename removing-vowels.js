// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// doTest('hello', 'hll');
//   doTest('how are you today?', 'hw r y tdy?');
//   doTest('complain', 'cmpln');
//   doTest('never', 'nvr');


function shortcut (string) {
  
    let newWord = string.replace(/[aeiou]/, '')
    
    return newWord;
  }
  
  console.log(shortcut('how are you today'))