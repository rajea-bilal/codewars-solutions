// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example

// text before = "abc"
// character   = "z"
// text after  = "zzz"

// Test.assertEquals(contamination("abc","z"), "zzz")
// Test.assertEquals(contamination("","z"), "")
// Test.assertEquals(contamination("abc",""), "")
// Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
// Test.assertEquals(contamination("//case"," "), "      ")

function contamination(text, char){
  
    if(text.length == 0 || char.length == 0) {
      return ''
    }
     
  let check = text.split('').map(item => char).join('')
  return check
    
    
  }
  
  console.log(contamination('//case', ' '))