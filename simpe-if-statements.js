
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name) {

  const firstLetter = name.slice(0, 1)
 
  if(firstLetter == 'R' || firstLetter == 'r'){
    return 'You are playing banjo!'
  } else {
    return `${name} does not play banjo`
  }
  
  
}

console.log(areYouPlayingBanjo("rolf"))