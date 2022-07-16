// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

//  ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
//     ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
//     ["233312", [['2', 2], ['3', 3], ['1', 1 ]]],
// ];

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

function orderedCount(text) {
  
    const result = [];
    const letters = {};
    
    for (let i = 0; i < text.length ; i++) {
      const char = text[i];
      const index = letters[char];
      
      if (index === undefined) {
        letters[char] = i;
        result.push([char, 1]);
      } else {
        result[index][1]++;
      }
    }
    
    return result;
    
  }
  
  console.log(orderedCount("abracadabra"))