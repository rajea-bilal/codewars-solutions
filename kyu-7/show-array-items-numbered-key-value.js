// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

function number(array) {
 
    if (array.length === 0) {
      return []
    }  
    let check = array.map((item, index) => {
      return index + 1 + ':' + ' ' + item
    })
    
    return check
      
    }
    
    console.log(number(["a", "b", "c"]))
    
    // PREP
    // Params - an array
    // Result - a new array with array item and index as key: value pairs
    // Example - 
    // Pseudo code - 